// Serviço de integração com a RD Station Marketing (API de Conversões).
//
// O loader da RD (em index.html) rastreia visitas e grava o cookie de origem de
// tráfego, mas NÃO captura formulários próprios como o nosso. Para registrar o
// lead é preciso enviar a conversão explicitamente por esta API.
//
// Chave pública: RD Station > Integrações > API > "Chave de API pública".
// É pública por natureza (pensada para uso no navegador) — só permite criar
// conversões, não ler a base.

export interface RdConversionData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  /** Nome da conversão como aparece na RD Station. Ex.: 'site-blw-hero'. */
  identifier: string;
}

const CONVERSIONS_ENDPOINT = 'https://api.rd.services/platform/conversions';

/**
 * Origem de tráfego gravada pelo loader da RD no cookie `__trf.src`.
 * Sem isso a RD atribui todas as conversões como tráfego direto.
 */
const getTrafficSource = (): string | undefined => {
  const match = document.cookie.match(/(?:^|;\s*)__trf\.src=([^;]*)/);
  if (!match) return undefined;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
};

class RdStationService {
  private apiKey: string;
  /**
   * Identificador do campo personalizado que recebe a mensagem do formulário
   * (ex.: 'cf_mensagem'). Vazio = mensagem não é enviada.
   *
   * A API rejeita a conversão inteira se o campo não existir na conta, então o
   * padrão é não enviar — crie o campo na RD antes de preencher esta variável.
   */
  private messageField: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_RD_STATION_API_KEY || '';
    this.messageField = import.meta.env.VITE_RD_STATION_MESSAGE_FIELD || '';
  }

  isConfigured(): boolean {
    return !!this.apiKey;
  }

  async submitConversion(data: RdConversionData): Promise<void> {
    if (!this.apiKey) {
      throw new Error('Chave de API da RD Station não configurada');
    }

    const payload: Record<string, string> = {
      conversion_identifier: data.identifier,
      name: data.name,
      email: data.email,
    };

    if (data.phone) payload.personal_phone = data.phone;

    const trafficSource = getTrafficSource();
    if (trafficSource) payload.traffic_source = trafficSource;

    if (this.messageField && data.message) {
      payload[this.messageField] = data.message;
    }

    const response = await fetch(
      `${CONVERSIONS_ENDPOINT}?api_key=${encodeURIComponent(this.apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'CONVERSION',
          event_family: 'CDP',
          payload,
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`RD Station respondeu ${response.status}: ${detail}`);
    }
  }
}

export const rdStationService = new RdStationService();

export const useRdStation = () => ({
  submitToRdStation: (data: RdConversionData) => rdStationService.submitConversion(data),
  isConfigured: rdStationService.isConfigured(),
});
