# BLW Software - Planejamento Landing Page Empresarial

## 1. Identidade Visual

### Paleta de Cores
| Uso | Cor | Hex |
|-----|-----|-----|
| Primary (Azul BLW) | ![#0d80f2](https://via.placeholder.com/15/0d80f2/0d80f2.png) | `#0d80f2` |
| Primary Hover | ![#2563eb](https://via.placeholder.com/15/2563eb/2563eb.png) | `#2563eb` |
| Background Light | ![#f5f7f8](https://via.placeholder.com/15/f5f7f8/f5f7f8.png) | `#f5f7f8` |
| Background Dark | ![#111418](https://via.placeholder.com/15/111418/111418.png) | `#111418` |
| Texto Principal | ![#1d232a](https://via.placeholder.com/15/1d232a/1d232a.png) | `#1d232a` |
| Texto Secundario | ![#6c757d](https://via.placeholder.com/15/6c757d/6c757d.png) | `#6c757d` |
| Accent Verde (AgTech/Dados) | ![#10b981](https://via.placeholder.com/15/10b981/10b981.png) | `#10b981` |
| Accent Roxo (IA) | ![#8b5cf6](https://via.placeholder.com/15/8b5cf6/8b5cf6.png) | `#8b5cf6` |
| Accent Laranja (Fiscal) | ![#f59e0b](https://via.placeholder.com/15/f59e0b/f59e0b.png) | `#f59e0b` |
| Accent Rosa (Design) | ![#ec4899](https://via.placeholder.com/15/ec4899/ec4899.png) | `#ec4899` |

### Tipografia
- **Font Family:** Inter (Google Fonts) - ja configurada
- **Headline:** 800 (Extra Bold) / 900 (Black)
- **Subtitles:** 600 (Semi Bold)
- **Body:** 400 (Regular) / 500 (Medium)

### Logo
- Arquivo existente: `src/assets/logo-BLW.png` e `src/assets/logo-blw.svg`
- Empresa: **BLW Software**

### Contato Existente
- WhatsApp: +55 87 98868-5309
- Integracao Google Sheets para formularios

---

## 2. Arquitetura do Site (Seções)

### FLOW COMPLETO (Top to Bottom):

```
[HEADER] - Fixo, glassmorphism, revela ao scroll
    |
[HERO + FORM] - Fullscreen, particulas animadas, form lateral
    |
[TRUSTED BY] - Logos/numeros animados com counter
    |
[WEB & MOBILE] - Mockup interativo: ideia -> produto
    |
[DESIGN & IDENTIDADE] - Transicao visual: simples -> profissional
    |
[IA & AGENTES] - Terminal interativo com simulacao de chat IA
    |
[DADOS & AGTECH] - Dashboard animado com graficos fluidos
    |
[FISCAL & CONSULTORIA] - Timeline de processo + metricas
    |
[CTA + FORM FINAL] - Gradiente full-width com formulario
    |
[FOOTER] - Links, social, contato
```

---

## 3. Detalhamento por Seção

### 3.1 HEADER
- **Layout:** Fixo no topo, `backdrop-blur` (glassmorphism)
- **Comportamento:** Transparente no topo, fundo solido ao scrollar (detectado via IntersectionObserver)
- **Nav Links:** Inicio | Solucoes | Sobre | Contato
- **CTA:** Botao "Comecar Projeto" com pulse animation
- **Mobile:** Hamburger menu com slide-in lateral animado
- **Animacao:** fadeInDown ao carregar, transicao suave de bg

### 3.2 HERO + FORMULARIO
- **Layout:** Grid 2 colunas (60/40), fullscreen (min-h-screen)
- **Esquerda:**
  - Badge animado: "Solucoes que transformam negocios"
  - Headline com gradient text animado (typewriter effect nas palavras-chave)
  - Subtitulo com fade-in
  - Feature pills animados (stagger animation)
  - CTAs: "Solicitar Solucao" + "Ver Solucoes"
- **Direita:**
  - Card de formulario com glassmorphism e glow effect
  - Campos: Nome, Email, Telefone (mascara), Mensagem
  - Integra WhatsApp + Google Sheets (ja existente)
- **Background:**
  - Gradient mesh animado (CSS) com blobs flutuantes
  - Grid pattern sutil em overlay
- **Animacoes:**
  - Elementos entram com stagger (framer-motion)
  - Blobs de background flutuam suavemente (CSS keyframes)
  - Headline com gradient animado

### 3.3 TRUSTED BY / SOCIAL PROOF
- **Layout:** Faixa horizontal com numeros + indicadores
- **Conteudo:**
  - 50+ Projetos | 5+ Anos | 30+ Clientes | 99% Satisfacao
- **Animacao:**
  - Contadores animados (count-up) ao entrar no viewport
  - Fade-in com stagger nos items
- **Visual:** Background sutil, separadores com linhas verticais

### 3.4 WEB & MOBILE DEVELOPMENT
- **Conceito:** "Da ideia ao produto digital"
- **Layout:** Split screen com conteudo a esquerda e visual a direita
- **Esquerda:**
  - Titulo com accent azul
  - 3-4 bullet points com icones (sem texto longo)
  - Tags de tecnologia: React, Next.js, React Native, Flutter, Node.js
  - Micro-CTA: "Quero meu app"
- **Direita - VISUAL INTERATIVO:**
  - Stack de devices (laptop + mobile) em perspectiva 3D CSS
  - Dentro dos devices: mockup de dashboard/app animado
  - Ao scrollar, os devices rotacionam levemente (parallax)
  - Linhas de codigo fluindo no background (CSS animation)
- **Animacoes:**
  - Devices entram com slide + rotate 3D
  - Conteudo dos mockups "constroi" progressivamente
  - Tags de tech fazem float-in com stagger

### 3.5 DESIGN & IDENTIDADE VISUAL
- **Conceito:** "Transformamos o comum em extraordinario"
- **Layout:** Fullwidth com transicao visual central
- **VISUAL PRINCIPAL - ANTES/DEPOIS:**
  - Card central que mostra duas versoes:
    - ANTES: Design generico, cores apagadas, layout basico (wireframe)
    - DEPOIS: Design profissional, cores vibrantes, layout polido
  - Transicao controlada por hover/scroll (slider CSS)
  - Morphing animation entre os dois estados
- **Conteudo lateral:**
  - Titulo com accent rosa
  - "Sua marca merece mais" - subtitulo
  - Servicos: Branding, UI/UX, Design System, Prototipagem
- **Animacoes:**
  - Slider de comparacao (clip-path animation)
  - Elementos de design flutuando (paletas, fontes, layouts)
  - Gradiente de fundo animado

### 3.6 INTELIGENCIA ARTIFICIAL & AGENTES
- **Conceito:** "IA que trabalha por voce - 24/7"
- **Layout:** Background escuro (dark section), fullwidth
- **VISUAL PRINCIPAL - TERMINAL IA:**
  - Simulacao de chat/terminal com "digitacao" em tempo real
  - O agente IA "responde" perguntas demo sobre um negocio ficticio
  - Particulas neurais conectando-se no background (canvas/CSS)
  - Efeito de "neural network" com pontos e linhas
- **Conteudo:**
  - Titulo com accent roxo e glow
  - Cases de uso: Atendimento, RAG, Automacao, Analise
  - Cada case com icone animado
  - Numeros: "Resposta em 0.3s" / "Disponivel 24/7" / "100% Contextual"
- **Animacoes:**
  - Typing effect no terminal
  - Particulas flutuantes com conexoes (CSS pseudo-elementos)
  - Glow pulsante no card do terminal
  - Stagger nos cases de uso

### 3.7 INTELIGENCIA DE DADOS & AGTECH
- **Conceito:** "Dados que geram decisoes inteligentes"
- **Layout:** Grid 2 colunas, fundo claro com accent verde
- **VISUAL PRINCIPAL - DASHBOARD:**
  - Mini dashboard animado com:
    - Grafico de barras crescendo (CSS animation)
    - Linha de tendencia desenhando (SVG stroke-dashoffset)
    - KPIs com contadores
  - Icone de planta/folha para agtech
- **Conteudo:**
  - Titulo com accent verde
  - Bullets: BI, ETL, Data Lakes, Dashboards, Precision Farming
  - Case AgTech: "Monitore sua lavoura em tempo real"
- **Animacoes:**
  - Graficos "desenham" ao entrar no viewport
  - Numeros contam progressivamente
  - Elementos de dados fluem pela tela

### 3.8 INTELIGENCIA FISCAL & CONSULTORIA
- **Conceito:** "Simplifique o complexo"
- **Layout:** Fundo gradiente sutil, timeline horizontal
- **VISUAL PRINCIPAL - PROCESS FLOW:**
  - Timeline animada com 4 etapas:
    1. Diagnostico -> 2. Estrategia -> 3. Implementacao -> 4. Resultados
  - Cada etapa revela ao scroll com icone + breve descricao
  - Linha conectora animada entre etapas
- **Conteudo:**
  - Titulo com accent laranja/amber
  - Servicos: Compliance, Automacao Fiscal, EFD, SPED, Consultoria
  - Stats: "R$ X economizados" / "Y% reducao de erros"
- **Animacoes:**
  - Timeline desenha ao scrollar
  - Steps fazem pop-in sequencial
  - Icones rotacionam levemente ao hover

### 3.9 CTA + FORMULARIO FINAL
- **Layout:** Fullwidth, gradient background (primary -> dark)
- **Conteudo:**
  - Headline: "Pronto para transformar seu negocio?"
  - Subtitulo persuasivo
  - Formulario identico ao do Hero (reuso do componente)
  - Informacoes de contato laterais (WhatsApp, email)
- **Animacoes:**
  - Entrance suave do formulario
  - Background com particulas sutis
  - Botao com shimmer effect

### 3.10 FOOTER
- **Layout:** Dark background, grid 4 colunas
- **Colunas:** Logo + desc | Servicos | Empresa | Contato
- **Social:** LinkedIn, GitHub, Instagram
- **Bottom bar:** Copyright + links legais

---

## 4. Dependencias Necessarias

```bash
npm install framer-motion lucide-react
```

- `framer-motion` - Animacoes declarativas React (scroll, stagger, layout)
- `lucide-react` - Icones modernos e consistentes (substituir SVGs manuais)

---

## 5. Estrutura de Componentes

```
src/
  components/
    Header.tsx          # Nav fixa com glassmorphism
    Hero.tsx            # Hero + Form
    TrustedBy.tsx       # Social proof / stats
    WebMobile.tsx       # Secao Dev Web & Mobile
    DesignSection.tsx   # Secao Design & Identidade
    AISection.tsx       # Secao IA & Agentes
    DataAgtech.tsx      # Secao Dados & AgTech
    FiscalConsulting.tsx # Secao Fiscal & Consultoria
    CTAForm.tsx         # CTA final com formulario
    Footer.tsx          # Rodape
    ContactForm.tsx     # Componente de formulario reutilizavel
    AnimatedCounter.tsx # Counter animado reutilizavel
  hooks/
    useInView.ts        # Hook para detectar visibilidade
    useScrollProgress.ts # Hook para progresso de scroll
  contexts/
    ThemeContext.tsx     # (existente)
  services/
    googleSheets.ts     # (existente)
```

---

## 6. Padroes de Animacao

| Tipo | Biblioteca | Uso |
|------|-----------|-----|
| Scroll reveal | framer-motion `whileInView` | Todos os elementos que aparecem ao scroll |
| Stagger | framer-motion `staggerChildren` | Listas, grids, features |
| Hover effects | Tailwind + framer-motion | Cards, botoes, links |
| Typing effect | CSS/JS customizado | Terminal IA |
| Counter | Custom hook + requestAnimationFrame | Numeros/stats |
| Parallax leve | framer-motion `useScroll` | Backgrounds, devices |
| Background blobs | CSS keyframes | Hero, CTA |
| SVG draw | CSS stroke-dashoffset | Graficos, linhas |
| 3D transforms | CSS perspective + rotate | Device mockups |

---

## 7. Performance & UX

- **Lazy loading:** Secoes carregam animacoes apenas quando visiveis
- **Reducao de motion:** `prefers-reduced-motion` respeita preferencia do OS
- **Mobile first:** Todas animacoes 3D simplificadas em mobile
- **Core Web Vitals:** Nenhuma animacao bloqueia LCP
- **Acessibilidade:** Foco visivel, alt texts, semantic HTML, aria-labels
