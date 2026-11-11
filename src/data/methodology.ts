/**
 * Metodologia BLW: nove etapas (E0 a E8) em quatro fases.
 *
 * Nomes e agrupamento vêm do material interno da BLW. As descrições de E3 e E8 seguem o
 * texto original; as demais são paráfrases curtas do nome de cada etapa — revisar com o time.
 */
export interface MethodStep {
  code: string;
  name: string;
  /** Nome curto, para chips. */
  short: string;
  description: string;
}

export interface MethodPhase {
  id: string;
  name: string;
  steps: MethodStep[];
}

export const phases: MethodPhase[] = [
  {
    id: 'entrada',
    name: 'Entrada',
    steps: [
      {
        code: 'E0',
        name: 'Contato e qualificação',
        short: 'Contato',
        description: 'Entendemos o que você precisa e se a BLW é a parceira certa para o projeto.',
      },
      {
        code: 'E1',
        name: 'Abertura',
        short: 'Abertura',
        description: 'Formalizamos o início: escopo inicial, responsáveis e combinados de trabalho.',
      },
    ],
  },
  {
    id: 'entender',
    name: 'Entender',
    steps: [
      {
        code: 'E2',
        name: 'Descoberta e diagnóstico',
        short: 'Diagnóstico',
        description: 'Vamos ao processo real, ouvimos quem opera e registramos como as coisas funcionam hoje.',
      },
      {
        code: 'E3',
        name: 'Especificação',
        short: 'Especificação',
        description:
          'Transformamos o diagnóstico em requisitos testáveis, critérios de aceite e um backlog priorizado, com protótipos das telas para você validar.',
      },
    ],
  },
  {
    id: 'construir',
    name: 'Construir',
    steps: [
      {
        code: 'E4',
        name: 'Arquitetura e plano técnico',
        short: 'Arquitetura',
        description: 'Definimos como o sistema será montado e o plano técnico do ciclo.',
      },
      {
        code: 'E5',
        name: 'Construção assistida por IA',
        short: 'Construção com IA',
        description: 'O time desenvolve com apoio de IA, seguindo a especificação que você aprovou.',
      },
      {
        code: 'E6',
        name: 'Verificação e validação',
        short: 'Verificação',
        description: 'Testamos cada entrega contra os critérios de aceite e você valida o resultado.',
      },
    ],
  },
  {
    id: 'entregar',
    name: 'Entregar',
    steps: [
      {
        code: 'E7',
        name: 'Entrega e operação',
        short: 'Entrega',
        description: 'Colocamos o sistema em uso e acompanhamos a operação.',
      },
      {
        code: 'E8',
        name: 'Encerramento e decisão',
        short: 'Decisão',
        description: 'No fim de cada ciclo decidimos juntos: encerrar, abrir um novo ciclo ou pausar.',
      },
    ],
  },
];
