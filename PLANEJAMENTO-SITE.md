# BLW — Planejamento da Landing Page (v3.1 · institucional, marca nova, taste-skill)

> Atualizado em 2026-11-11. Substitui a v2 (posicionamento AgTech, Cultiva.ai como foco).
> A página é da **empresa BLW Devs**: capta projetos sob demanda, parcerias de execução com startups
> financiadas e conversas para conhecer a metodologia. O Cultiva.ai virou prova de produto.
> Base: Guia de Identidade Visual BLW, o material interno da metodologia (E0–E8) e o taste-skill 2.5.1.

## 1. Posicionamento

**Categoria:** desenvolvimento de software sob medida com metodologia própria, mais parceria de
execução para startups que captaram financiamento. Sede em Petrolina/PE.

**Quem a página quer atrair:** (1) empresas, cooperativas e instituições com um projeto de software;
(2) startups com edital, aceleração ou investimento que precisam de um time executor; (3) parceiros e
quem só quer conhecer a BLW e a metodologia.

**Ação única da página:** "Falar com a BLW" (formulário, WhatsApp ou e-mail). O formulário tem um
campo de assunto; links da página pré-selecionam o assunto (`data-interesse`).

**Honestidade:** nada de métrica ou cliente inventado. Credenciais usadas: parceira FACEPE (edital
COMPET Soluções), aprovada no Inova Caatinga, incubada na INTECVASF, apoio SEBRAE, mais os 9 logos de
parceiros enviados pela BLW.

**Confidencialidade:** a apresentação de especificação feita para um cliente (E3) é confidencial. Foi
usada só para entender a estrutura da metodologia. Nenhum nome, sistema, número ou tela dela entra na
página. O exemplo de requisito e os projetos nas janelas são fictícios.

## 2. Identidade visual

Fonte: `Guia - Identidade Visual BLW.pdf`. A marca é o cliente: violeta e Asap passam por cima das
regras de paleta e fonte do taste-skill (ele proíbe violeta em paletas sorteadas, mas manda usar a cor
do cliente por `start.mjs brand`).

| Cor | Hex | Uso |
|---|---|---|
| Violeta tecnológico | `#615afb` | Botão principal, símbolo |
| Preto profundo | `#0c0b18` | Fundo da página |
| Azul noturno | `#11112a` | (reservado) |
| Cinza claro | `#e9e9ef` | (reservado) |
| Chão aceso dos painéis | `#1d1b4e` | Violeta-noite atrás das janelas de interface |

> O PDF do guia imprime `#615afb` para violeta, roxo tech e branco. O roxo tech (`#a147b8`, medido na
> imagem) não é usado hoje. **Confirmar os hex com o designer.**

- **Tipografia:** Asap 400 e 500 (Google Fonts). Títulos em 500 com tracking apertado, como manda o kit
  para páginas de software. O 700/800 e a caixa alta do guia ficam de fora.
- **Logo:** vetores em `src/assets/brand/paths.ts`, gerados a partir dos arquivos oficiais
  (`BlwLogo` em `src/components/BlwLogo.tsx`). Versões permitidas: violeta + branco (fundo escuro),
  violeta + preto (fundo claro), tudo branco sobre violeta. Não distorcer nem trocar as cores.
- **Fundos:** as duas artes enviadas pela BLW. `bg-hero.webp` é o fundo do quadro do hero;
  `bg-contato.webp` é a camada (`img.layer`) atrás do fechamento da página.
- **Logos de parceiros:** `src/assets/partners/`, cores originais, num painel branco só. O agri.future hub
  (letras brancas) ganha uma pílula escura dentro do painel.
- **Tema:** escuro, sem alternância claro/escuro.

## 3. Como a página é montada (taste-skill)

A página segue o kit do taste-skill: `header.nav`, `main` com seções de uma ou duas telas e
`footer.closing`, tudo direto no `<body>`.

- **Tipo:** software. **Deal:** hero `collage`, nav `nav-mega`, footer `footer-dark`, close `close-type`,
  ritmo `space`, botões `solid` (o `tonal` sorteado dava 1,2:1 de contraste no fundo escuro).
- **Momento:** `pinned-chapters` na Metodologia: a seção segura duas telas e abre uma fase por vez, com a
  janela dela ao lado.
- **Kit:** `public/assets/` é uma cópia do kit (system.css, layout, motion, moments, icons). **Não
  editar.** O gate acusa `kit-edited`. Para atualizar, copiar de novo a pasta `assets` do skill.
- **Scripts do kit:** `src/kit.ts` carrega `system.js`, `layout.js` e `motion.js` como `<script type="module">`
  depois que o React desenha. Um `import()` passaria pelo Vite, que recusa arquivos de `public/`.
- **Raízes do React:** `src/main.tsx` monta três raízes (`header#nav-root`, `main#top`,
  `footer#closing-root`), porque o kit não admite um `div#root` no topo.
- **CSS de página:** `src/index.css` só tem o que mora dentro dos visuais (janelas, cartões, parede de
  logos). Botão, cartão, grade e tipografia são do kit. O Tailwind não é mais usado.

```
[NAV]               Atuação · Metodologia (painel) · Parceria · Produtos · Empresa · Falar com a BLW
[HERO]              "Software sob medida para empresas e startups" + janela com as 9 etapas
[ATUAÇÃO]           2 frentes: projetos sob demanda · execução para startups
[METODOLOGIA]       2 telas, pinned-chapters: 4 fases, uma janela por fase
[PARCERIA]          Startups com financiamento: 4 passos + janela do ecossistema de fomento
[PRODUTOS]          Cultiva.ai Gestão · Consultoria · Cultiva.Guard + Flutter, Go, PostgreSQL
[EMPRESA]           Quem somos + 9 logos de parceiros + trajetória (janela)
[CONTATO]           Formulário com assunto + WhatsApp e e-mail
[FECHAMENTO]        Chamada + links + cookies e créditos (arte de fundo)
```

```
src/main.tsx · src/kit.ts · src/App.tsx (as seções)
src/components/  Header, Hero, Atuacao, Metodologia, Parceria, Produtos, QuemSomos, Contato,
                 ContactForm, Footer, CookieConsent, BlwLogo
src/data/methodology.ts   Fases e etapas (hero e Metodologia)
```

Removidos nesta versão: `Partners`, `Solutions`, `CultivaAI`, `AISection`, `GuardSection`,
`AgroSolutions`, `About`, `CTAForm`, `ThemeToggle`, `ThemeContext` e o logo da marca antiga.
Ficam no histórico do git (commit `8b07ce4`).

## 4. Verificação (gate)

```bash
# Com o servidor de desenvolvimento rodando (npm run dev), na raiz do projeto:
node <skill>/scripts/gate.mjs --start http://localhost:5173/ --new --kind software \
  --category "<categoria>" --primary "Falar com a BLW"
node <skill>/scripts/gate.mjs
```

- **Categoria usada:** a lista de substantivos que os títulos usam (`software sob medida: projetos,
  sistemas, aplicativos, produtos, startups, metodologia em etapas, parceria de execução, propriedade
  rural, campo, dúvidas, adutoras, falhas, engenheiros, conversa, parceiros`). O checador só conhece
  substantivos em inglês; sem isso ele reprova todo título em português por "não nomear a coisa".
- **Waiver (1 de 5):** `phone-number`, o link do WhatsApp comercial da própria BLW (canal principal).
  Fica em `.taste-skill/waivers.json`, que não vai para o git.
- **Estado do último run:** `GATE: PASS`. A checagem completa em 1440 e 390 só tem esse FAIL, já com
  waiver. O layout passa sem achados em 1440, 1024, 820, 768 e 390.
- **Build de produção:** `perf.mjs` passa, exceto "imagens abaixo da dobra sem lazy". O React cria as
  imagens depois do carregamento e o `system.js` do kit troca `lazy` por `eager` depois do load, por
  desenho do kit.

## 5. Formulário

Um formulário (`ContactForm.tsx`) no padrão `form.form` do kit: o `system.js` valida no envio, mostra o
erro sob o campo e leva o foco ao primeiro erro. O envio é nosso e roda em background:

| Destino | Quando roda | Falha silenciosa? |
|---|---|---|
| Google Sheets | se `VITE_GOOGLE_SCRIPT_URL` estiver setada | sim |
| RD Station | se `VITE_RD_STATION_API_KEY` estiver setada | erro vai só para o console |
| WhatsApp (`window.open`) | só se nenhum outro destino estiver configurado | — |

O assunto vai no começo da mensagem (`[Um projeto sob demanda] ...`) e no nome da conversão da RD:
`site-blw-contato-<assunto>` (`conhecer-blw`, `projeto-sob-demanda`, `parceria-executora`, `outro`).
Os identificadores antigos `site-blw-hero` e `site-blw-cta-final` deixaram de existir.

**Cookies.** O kit não admite aviso fixo na tela. O consentimento (LGPD) agora é um bloco no rodapé,
com as mesmas regras de antes: o loader da RD (`src/services/consent.ts`) só é injetado depois do
aceite, e a escolha pode ser trocada ali a qualquer momento. Quem nunca abre o bloco nunca aceita, então
a atribuição de origem de tráfego da RD tende a cair. **Não ativar o RDCookieControl no painel da RD.**

## 6. Pendências

- [ ] **Logo da IAris Tech está cortado à direita** no arquivo enviado ("s" e "h" saem pela borda).
      Trocar `src/assets/partners/iaris-tech.png` pelo arquivo completo.
- [ ] Confirmar com o designer o hex do roxo tech e do branco (o PDF imprime `#615afb` três vezes).
- [ ] Revisar as descrições das etapas E0, E1, E2, E4, E5, E6 e E7 em `src/data/methodology.ts`
      (só E3 e E8 seguem o texto original) e o texto de "parceria de execução".
- [ ] Confirmar o status de cada credencial e o papel de cada logo da parede de parceiros.
- [ ] Faltam logos de Inova Caatinga, INTECVASF e São Francisco Valley. Os logos enviados têm 100 px de
      altura e ficam suaves em telas retina: pedir SVG ou PNG maior.
- [ ] Decidir se o CNPJ volta ao rodapé. O taste-skill manda não imprimir número de registro; saiu junto
      com o telefone e o e-mail impressos (os dois viraram botões).
- [ ] `og:image` aponta para `/share.jpg` (relativo). Trocar por URL absoluta quando o domínio existir
      (e ativar o `canonical`, hoje ausente).
- [ ] Links legais (Privacidade / Termos): não existem as páginas. Publicar a política de privacidade.
- [ ] Opcional: criar o campo personalizado da mensagem na RD e setar `VITE_RD_STATION_MESSAGE_FIELD`.
- [ ] Limpeza: `framer-motion`, `lucide-react` e o Tailwind (`tailwind.config.js`, plugin do PostCSS) não
      são mais usados. O ESLint não casa com `.tsx` (o lint não roda hoje).
