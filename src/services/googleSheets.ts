// Serviço para integração com Google Sheets via Google Apps Script
export interface FormSubmissionData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  timestamp?: string;
}

export interface GoogleSheetsResponse {
  result: 'success' | 'error';
  message: string;
  row?: number;
  error?: any;
}

class GoogleSheetsService {
  private scriptUrl: string;

  constructor() {
    // URL do Google Apps Script (configurada via .env)
    this.scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
  }

  /**
   * Envia dados do formulário para Google Sheets
   */
  async submitForm(data: FormSubmissionData): Promise<GoogleSheetsResponse> {
    if (!this.scriptUrl) {
      throw new Error('URL do Google Apps Script não configurada');
    }

    try {
      const submissionData = {
        nome: data.name,
        email: data.email,
        telefone: data.phone || '',
        mensagem: data.message
      };

      // Criar FormData para enviar ao Google Apps Script
      const formData = new FormData();
      formData.append('nome', submissionData.nome);
      formData.append('email', submissionData.email);
      formData.append('telefone', submissionData.telefone);
      formData.append('mensagem', submissionData.mensagem);

      // Fazer requisição para Google Apps Script com FormData
      const response = await fetch(this.scriptUrl, {
        method: 'POST',
        body: formData,
        mode: 'cors'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      // Como o script retorna HTML para FormData, vamos considerar sucesso se status for 200
      const textResponse = await response.text();
      
      // Se a resposta contém "Mensagem Enviada com Sucesso", consideramos sucesso
      if (textResponse.includes('Mensagem Enviada com Sucesso') || textResponse.includes('Dados salvos com sucesso')) {
        return {
          result: 'success',
          message: 'Dados enviados com sucesso!',
          row: 1
        };
      } else {
        throw new Error('Erro ao processar dados no servidor');
      }

    } catch (error) {
      throw new Error(
        error instanceof Error 
          ? error.message 
          : 'Erro ao enviar dados. Tente novamente.'
      );
    }
  }

  /**
   * Valida se a configuração está correta
   */
  isConfigured(): boolean {
    return !!this.scriptUrl;
  }

  /**
   * Atualiza a URL do script (útil para testes)
   */
  setScriptUrl(url: string): void {
    this.scriptUrl = url;
  }
}

// Instância singleton
export const googleSheetsService = new GoogleSheetsService();

// Hook personalizado para usar o serviço
export const useGoogleSheets = () => {
  const submitToSheets = async (data: FormSubmissionData): Promise<GoogleSheetsResponse> => {
    return await googleSheetsService.submitForm(data);
  };

  return {
    submitToSheets,
    isConfigured: googleSheetsService.isConfigured()
  };
};