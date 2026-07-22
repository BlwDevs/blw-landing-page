# BLW — Planejamento da Landing Page (v2 · posicionamento AgTech)

> Atualizado em 2026-07-22. Substitui a versão anterior, que posicionava a BLW como
> software house generalista (Web & Mobile, Design, Fiscal). Base: `business-workspace/trabalho/2026-07-canvas/canvas-blw-v2.md`
> e `canvas-cultiva-ai-v2.md`.

## 1. Posicionamento

**Categoria:** casa de produtos de IA para o agronegócio, nascida no Vale do São Francisco.

**Público desta página (vitrine institucional — não é canal de aquisição de produtor):**
cooperativas e associações, distritos de irrigação e concessionárias, empresas do agro,
parceiros institucionais e bancas de edital. A aquisição de produtor acontece por venda
fundador, indicação e WhatsApp — ver canvas do Cultiva.ai.

**Hierarquia das soluções (não estão em pé de igualdade):**

| Solução | Papel na página |
|---|---|
| Cultiva.ai Gestão | Produto principal — seção dedicada com mockup do app |
| Cultiva.ai Consultoria | Diferencial — seção dedicada com terminal de conversa |
| Cultiva.Guard (SDPAH) | Prova técnica e piloto DINC — não vendido como produto pronto |
| Soluções sob medida | Porta B2B para cooperativas e empresas do agro |

**Regra de honestidade:** nada de métricas inventadas (projetos entregues, clientes, acurácia
de modelo). A BLW é pré-receita; a prova social vem dos parceiros reais e do piloto DINC.

## 2. Identidade Visual

### Paleta

| Uso | Hex | Variável |
|-----|-----|----------|
| Verde agro (ação primária, Cultiva.ai Gestão) | `#10b981` | `--blw-accent-emerald` |
| Azul BLW (marca, soluções sob medida) | `#0d80f2` | `--blw-blue` |
| Roxo (IA / Consultoria) | `#8b5cf6` | `--blw-accent-violet` |
| Ciano (água / Cultiva.Guard) | `#06b6d4` | `--blw-accent-cyan` |
| Âmbar (alerta / anomalia) | `#f59e0b` | `--blw-accent-amber` |
| Fundo dark | `#0a0d12` | `--blw-dark` |

O verde substituiu o azul como cor de ação primária (CTAs do header, hero, formulário) —
é o que ancora a leitura "agro" antes mesmo do texto. O azul permanece como cor da marca.

Gradiente `.gradient-text-agro` (verde → teal → azul) para as palavras de destaque.

### Tipografia
- Títulos: **Space Grotesk** — utilitário `font-display` (token `--font-display` no `@theme`).
  Substituiu a Syne, que era display demais e prejudicava a leitura de headlines longos.
- Corpo: **DM Sans**

> A Space Grotesk vai só até o peso **700**. Os títulos usam `font-bold`, não `font-extrabold`,
> e o CSS aplica `font-synthesis-weight: none` para nenhum navegador forjar peso acima disso.

### Contato
- WhatsApp exibido: +55 87 98868-5309 · e-mail: blwdevs@gmail.com
- Sede: Petrolina/PE — Vale do São Francisco

## 3. Arquitetura da página

```
[HEADER]              Início · Soluções · Cultiva.ai · Sobre · Parceiros · Contato
    |
[HERO + FORM]         "Inteligência artificial para o agro decidir melhor"
    |                 (palavra rotativa: decidir melhor / produzir mais / perder menos)
[PARCEIROS]           INTECVASF, SEBRAE, AgriFuture Hub, São Francisco Valley
    |                 + fomento: FACEPE, Inova Caatinga, DINC
[SOLUÇÕES]            4 cards — os 2 do Cultiva.ai com borda de destaque
    |
[CULTIVA.AI GESTÃO]   Split: features + mockup de dashboard e captura por voz
    |
[CULTIVA.AI CONSULT.] Dark section, terminal de conversa (manejo / solo / cooperativa)
    |
[CULTIVA.GUARD]       Painel de pressão de adutora com anomalia detectada
    |
[SOB MEDIDA]          Casos de uso B2B + timeline "como trabalhamos"
    |
[SOBRE]               Pilares + linha do tempo da empresa (jul/2025 → jun/2026)
    |
[CTA + FORM]          "Vamos colocar inteligência na sua operação?"
    |
[FOOTER]
```

## 4. Componentes

```
src/components/
  Header.tsx          Nav fixa, glassmorphism; breakpoint lg (6 links)
  Hero.tsx            Hero + formulário
  Partners.tsx        Parceiros e apoiadores (substituiu TrustedBy com números fictícios)
  Solutions.tsx       Grid das 4 soluções
  CultivaAI.tsx       Cultiva.ai Gestão
  AISection.tsx       Cultiva.ai Consultoria — terminal animado
  GuardSection.tsx    Cultiva.Guard / SDPAH
  AgroSolutions.tsx   Soluções sob medida para empresas do agro
  About.tsx           Quem somos + trajetória
  CTAForm.tsx         CTA final
  ContactForm.tsx     Formulário reutilizável (WhatsApp + Google Sheets)
  Footer.tsx
```

Removidos na v2: `WebMobile`, `DesignSection`, `DataAgtech`, `FiscalConsulting`,
`TrustedBy`, `AnimatedCounter`, `Testimonials`, `Services`.

## 5. Padrões de animação

| Tipo | Como | Onde |
|------|------|------|
| Scroll reveal | framer-motion `whileInView` + `once: true` | todas as seções |
| Stagger | delays incrementais por índice | grids e listas |
| Typing | timeouts encadeados | terminal da Consultoria |
| Barras de gráfico | `height` animada — **a coluna pai precisa de `h-full`** | Guard |
| Parallax leve | `useScroll` + `useTransform` | mockup do Cultiva.ai |
| Blobs | CSS keyframes | hero, CTA |

> Armadilha conhecida: altura em `%` dentro de coluna flex sem altura definida resolve para 0.
> Foi o bug que deixava o gráfico invisível na versão anterior.

## 6. Integrações do formulário

Um único componente (`ContactForm.tsx`) atende os dois formulários da página. Ao enviar,
ele dispara três coisas — o WhatsApp é o caminho principal, os outros dois rodam em
background e nunca bloqueiam o contato:

| Destino | Quando roda | Falha silenciosa? |
|---|---|---|
| WhatsApp (`window.open`) | sempre | — é o caminho principal |
| Google Sheets | se `VITE_GOOGLE_SCRIPT_URL` estiver setada | sim |
| RD Station | se `VITE_RD_STATION_API_KEY` estiver setada | erro vai só para o console |

### RD Station

O loader rastreia visitas e grava o cookie `__trf.src` de origem de tráfego, mas **não captura
formulários próprios** — por isso a conversão é enviada explicitamente em
`src/services/rdStation.ts` via API de Conversões, incluindo o `traffic_source` lido daquele
cookie (sem ele a RD atribui tudo como tráfego direto).

**O loader não está no `index.html`.** Ele é injetado por `src/services/consent.ts` só depois
do aceite no banner de cookies — antes disso nenhum cookie de rastreamento é gravado. Quem
recusa navega e envia o formulário normalmente; a conversão até chega na RD (o visitante
digitou os próprios dados justamente para ser contatado), só que sem origem de tráfego.

Nomes de conversão por origem, para saber qual formulário converte:

- `site-blw-hero` — formulário do topo
- `site-blw-cta-final` — formulário do fim da página

## 7. Pendências

- [x] `VITE_RD_STATION_API_KEY` preenchida no `.env`.
- [x] Banner de cookies próprio (`CookieConsent.tsx`), com bloqueio real do loader da RD
      até o aceite. **Não ativar o RDCookieControl no painel da RD** — apareceriam dois avisos.
- [x] WhatsApp unificado em `5587988685309`, lido de `VITE_WHATSAPP_NUMBER`.
- [x] Redes sociais no footer: LinkedIn e Instagram (GitHub removido — não se aplica hoje).
- [x] Link do app Cultiva.ai (`redirectcultiva.netlify.app`, redireciona por dispositivo)
      na seção do produto e no footer.

- [ ] Opcional: criar o campo personalizado da mensagem na RD e setar
      `VITE_RD_STATION_MESSAGE_FIELD` (ex.: `cf_mensagem`). Se apontar para um campo que não
      existe, a RD rejeita a conversão inteira.
- [ ] Links legais (Privacidade / Termos / Cookies) sem destino. A política de privacidade
      passou a ser mais necessária agora que o banner de cookies cita "cookies de análise".
- [ ] Não há como revisar o consentimento depois de decidido — a escolha fica no
      localStorage (`blw-consentimento-cookies`) sem UI para trocar. Avaliar um link
      "Preferências de cookies" no rodapé.
- [ ] `logo-BLW.png` tem 835 kB — converter para WebP/SVG otimizado.
- [ ] Config do ESLint não casa com arquivos `.tsx` (lint não roda hoje).
