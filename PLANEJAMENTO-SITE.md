# BLW — Planejamento da Landing Page (v3 · institucional, nova marca)

> Atualizado em 2026-11-11. Substitui a v2 (posicionamento AgTech / Cultiva.ai como foco).
> A página agora é da **empresa BLW Devs**: capta parcerias, projetos sob demanda e conversas
> para conhecer a metodologia. O Cultiva.ai virou prova de produto, não o assunto principal.
> Base: Guia de Identidade Visual BLW e o material interno da metodologia (E0–E8).

## 1. Posicionamento

**Categoria:** desenvolvimento de software sob medida com metodologia própria, mais parceria
executora para startups que captaram financiamento. Sede em Petrolina/PE.

**Quem a página quer atrair:**

1. Empresas, cooperativas e instituições com um projeto de software (sob demanda).
2. Startups com edital, aceleração ou investimento que precisam de um time executor.
3. Parceiros e quem só quer conhecer a BLW e a metodologia.

**CTA único da página:** "Vamos conversar" (formulário + WhatsApp). O formulário tem um campo
de assunto com quatro opções; links da página pré-selecionam o assunto (`data-interesse`).

**Regra de honestidade:** nada de métricas ou clientes inventados. Credenciais usadas na página:
parceira FACEPE (edital COMPET Soluções), aprovada no Inova Caatinga, incubada na INTECVASF,
apoio SEBRAE, redes AgriFuture Hub e São Francisco Valley.

**Confidencialidade:** a apresentação de especificação feita para um cliente (E3) é confidencial.
Ela foi usada só para entender a estrutura da metodologia. Nenhum nome de cliente, sistema,
número ou tela dela entra na página. O exemplo de requisito (RF-021) é fictício.

## 2. Identidade visual

Fonte: `Guia - Identidade Visual BLW.pdf`.

| Cor | Hex | Uso na página |
|---|---|---|
| Violeta tecnológico | `#615afb` | Botões, símbolo, seção de contato |
| Violeta claro (derivado) | `#a7a3ff` | Rótulos e texto pequeno sobre fundo escuro |
| Violeta escuro (derivado) | `#4338d6` | Texto pequeno sobre fundo claro |
| Roxo tech | `#a147b8` | Só em brilhos do hero |
| Preto profundo | `#0c0b18` | Fundo base |
| Azul noturno | `#11112a` | Cartões e seções alternadas |
| Cinza claro | `#e9e9ef` | Seção de parceria (ritmo claro) |

> O PDF do guia imprime `#615afb` para violeta, roxo tech e branco. O roxo tech (`#a147b8`) foi
> medido na imagem. **Confirmar com o designer.**

- **Tipografia:** Asap (Google Fonts), pesos 300 a 800. Títulos em 700/800, corpo em 400.
- **Logo:** vetores em `src/assets/brand/paths.ts`, gerados a partir dos arquivos oficiais.
  Componentes `BlwLogo`, `BlwSymbol` e `BrandPattern` em `src/components/BlwLogo.tsx`.
  Versões permitidas: violeta + branco (fundo escuro), violeta + preto (fundo claro), tudo branco
  sobre violeta. Não distorcer, rotacionar, trocar cores nem usar sem contraste.
- **Assinatura:** "Building Lines Worldwide", em caixa alta com espaçamento largo (footer).
- **Fundos:** duas artes de linhas luminosas fornecidas pela BLW, em `src/assets/backgrounds/`.
  `bg-hero.webp` no hero (com degradê à esquerda para o texto) e `bg-contato.webp` no contato.
  O padrão de símbolos em contorno ficou só no rodapé, bem discreto.
- **Logos de parceiros:** `src/assets/partners/`, sem alteração de cor. Logos com fundo branco
  ficam em placa branca; o agri.future hub (letras brancas) fica em placa escura.
- **Tema:** escuro por padrão, sem alternância claro/escuro. A seção de parceria é clara de
  propósito, para dar ritmo.

## 3. Arquitetura da página

```
[HEADER]            Atuação · Metodologia · Parceria executora · Produtos · Quem somos · Vamos conversar
[HERO]              "Software sob medida, com método do contato à entrega."
                    + cartão "Metodologia BLW" (4 fases, 9 etapas)
                    + faixa de prova: FACEPE · Inova Caatinga · INTECVASF · SEBRAE
[ATUAÇÃO]           3 frentes: Projetos sob demanda · Parceira executora · Produtos próprios
[METODOLOGIA]       4 fases, E0–E8 · exemplo do que sai da E3 (requisito fictício) · CTA
[PARCERIA]          Startups com financiamento: 4 passos + credenciais do ecossistema (fundo claro)
[PRODUTOS]          Cultiva.ai Gestão · Cultiva.ai Consultoria · Cultiva.Guard + tecnologias
[QUEM SOMOS]        Texto, 2 pilares e linha do tempo
[PARCEIROS]         Logos dos 9 parceiros em placas (brancas; escura só para o agri.future hub)
[CONTATO]           Arte de fundo da marca + formulário com campo de assunto
[FOOTER]
```

```
src/components/
  Header.tsx        Nav fixa; menu mobile fora do <header> (backdrop-blur quebra position:fixed)
  Hero.tsx          Entrada única ao carregar (CSS, classe .enter)
  Atuacao.tsx       3 frentes
  Metodologia.tsx   Fases + linha que desenha uma vez + exemplo de especificação
  Parceria.tsx      Parceira executora + credenciais
  Produtos.tsx      Produtos próprios
  QuemSomos.tsx     Empresa e trajetória
  Parceiros.tsx     Logos dos parceiros, nas cores originais
  Contato.tsx       Seção final
  ContactForm.tsx   Formulário (WhatsApp + Google Sheets + RD Station)
  BlwLogo.tsx       Logo, símbolo e padrão
  CookieConsent.tsx Banner próprio (LGPD)
  Footer.tsx
src/data/methodology.ts   Fases e etapas (usado no hero e na seção)
```

Removidos na v3: `Partners`, `Solutions`, `CultivaAI`, `AISection`, `GuardSection`,
`AgroSolutions`, `About`, `CTAForm`, `ThemeToggle`, `ThemeContext` e o logo da marca antiga.
Ficam no histórico do git (commit `8b07ce4`).

## 4. Movimento

Pouco e com propósito: entrada do hero (uma vez), linha da metodologia que desenha ao entrar
na tela, e resposta ao ponteiro em botões e links (sobem 2px, sublinhado que desenha). Nada
aparece só porque a página rolou. `prefers-reduced-motion` desliga tudo.

## 5. Integrações do formulário

Um único formulário (`ContactForm.tsx`). Ao enviar dispara, em background:

| Destino | Quando roda | Falha silenciosa? |
|---|---|---|
| WhatsApp (`window.open`) | só se nenhum outro destino estiver configurado | — |
| Google Sheets | se `VITE_GOOGLE_SCRIPT_URL` estiver setada | sim |
| RD Station | se `VITE_RD_STATION_API_KEY` estiver setada | erro vai só para o console |

O assunto escolhido vai no começo da mensagem (`[Um projeto sob demanda] ...`) e no nome da
conversão da RD Station: `site-blw-contato-<assunto>`.

| Conversão na RD | Quando |
|---|---|
| `site-blw-contato-conhecer-blw` | Conhecer a BLW e a metodologia |
| `site-blw-contato-projeto-sob-demanda` | Projeto sob demanda |
| `site-blw-contato-parceria-executora` | Parceria de execução para startup |
| `site-blw-contato-outro` | Outro assunto |

> Mudou em relação à v2: os identificadores `site-blw-hero` e `site-blw-cta-final` deixam de
> existir (o formulário do hero saiu). Relatórios da RD que filtram por eles precisam ser
> atualizados.

### RD Station e cookies

O loader da RD **não está no `index.html`**. Ele é injetado por `src/services/consent.ts` só
depois do aceite no banner de cookies. A conversão do formulário é enviada em
`src/services/rdStation.ts` via API de Conversões, com o `traffic_source` lido do cookie
`__trf.src` quando existe. **Não ativar o RDCookieControl no painel da RD** (apareceriam dois
avisos).

## 6. Pendências

- [ ] Confirmar com o designer o hex do roxo tech e do branco (o PDF do guia imprime `#615afb`).
- [ ] Revisar as descrições das etapas E0, E1, E2, E4, E5, E6 e E7 em `src/data/methodology.ts`.
      Só E3 e E8 seguem o texto original; as outras são paráfrases do nome da etapa.
- [ ] Revisar o texto de "parceira executora" (`Parceria.tsx`), em especial a frase sobre registro
      rastreável ajudar na prestação de contas.
- [ ] Confirmar o status de cada credencial (Parceira FACEPE, Aprovada no Inova Caatinga,
      Incubada na INTECVASF, Apoio SEBRAE) e se os logos oficiais podem ser usados no lugar do texto.
- [ ] **Logo da IAris Tech está cortado à direita** (o "s" e o "h" saem pela borda do arquivo).
      Trocar pelo arquivo completo em `src/assets/partners/iaris-tech.png`.
- [ ] Logos dos parceiros têm só 100 px de altura (ficam levemente suaves em telas retina).
      Pedir SVG ou PNG maior, principalmente de NIT, Agrovel Salitre, Vallis e SEBRAE.
- [ ] Faltam os logos de Inova Caatinga, INTECVASF e São Francisco Valley. Hoje aparecem só como
      texto (hero e seção de parceria).
- [ ] Confirmar o papel de cada parceiro da seção Parceiros (a página só diz "Parceiros da BLW")
      e o nome exato de Vallis e NIT para o texto alternativo.
- [ ] Imagem de compartilhamento (`og:image`): ainda não existe.
- [ ] Links legais (Privacidade / Termos / Cookies): saíram do rodapé por não terem destino.
      Publicar a política de privacidade e voltar com os links.
- [ ] Revisar o consentimento depois de decidido: a escolha fica em `localStorage`
      (`blw-consentimento-cookies`) sem UI para trocar.
- [ ] Opcional: criar o campo personalizado da mensagem na RD e setar
      `VITE_RD_STATION_MESSAGE_FIELD` (ex.: `cf_mensagem`). Se o campo não existir, a RD rejeita
      a conversão inteira.
- [ ] Config do ESLint não casa com arquivos `.tsx` (lint não roda hoje).
- [ ] `tailwind.config.js` é de uma versão antiga do Tailwind e não é lido pelo v4. Os tokens da
      marca estão em `src/index.css` (`@theme`).
