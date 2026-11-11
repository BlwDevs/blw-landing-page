# BLW — Planejamento da Landing Page (v3.2 · rodada 2: proposta comercial, agro e IA)

> Atualizado em 2026-11-11. A página é da **empresa BLW Devs**: capta projetos sob demanda, parcerias de
> execução com startups financiadas e produtores e empresas do Vale do São Francisco. A metodologia
> sustenta a execução, mas **não é mais o assunto da página** (na rodada 1 ela ocupava o hero e uma seção
> de duas telas). Base: Guia de Identidade Visual BLW, material interno da metodologia (E0–E8) e taste-skill 2.5.1.

## 1. Posicionamento

**Frase do hero:** "IA e software para [empresas. / startups. / agronegócio.]", com a última palavra viva.

**Quem a página quer atrair:** (1) startups com edital, aceleração ou investimento; (2) o agronegócio do
Vale do São Francisco; (3) empresas tradicionais com um projeto de software ou de IA.

**Ação única:** "Falar com a BLW" (formulário, WhatsApp ou e-mail). O formulário tem um campo de assunto;
links da página pré-selecionam o assunto (`data-interesse`).

**Honestidade:** nada de métrica ou cliente inventado. Credenciais: parceira FACEPE, aprovada no Inova
Caatinga, incubada na INTECVASF, apoio SEBRAE, e os 9 logos de parceiros enviados pela BLW.

**Confidencialidade:** a apresentação de especificação feita para um cliente (E3) é confidencial. Foi usada
só para entender a metodologia. Nada dela entra na página; as janelas de interface são fictícias.

## 2. Identidade visual

Fonte: `Guia - Identidade Visual BLW.pdf`. A marca é o cliente: violeta `#615afb` e Asap passam por cima das
regras de paleta e fonte do taste-skill (`start.mjs brand`).

- **Tipografia:** Asap 400 e 500, com eixo de largura (`wdth`) para as letras do hero. Títulos em 500.
- **Logo:** vetores em `src/assets/brand/paths.ts` (`BlwLogo`). Não distorcer nem trocar cores.
- **Artes de fundo (enviadas pela BLW, em `src/assets/backgrounds/`):** `bg-contato.webp` no hero e no
  fechamento; `bg-hero.webp` no painel de atalhos do contato.
- **Chão aceso dos painéis:** violeta-noite `#1d1b4e` (tokens `--ground-*` no `index.html`).
- **Logos de parceiros:** `src/assets/partners/`, cores originais, numa faixa branca; o agri.future hub
  (letras brancas) ganha uma pílula escura.
- **Telas do Cultiva.ai:** `src/assets/app/`, recortadas (sem barra de status nem teclado).

## 3. Como a página é montada (taste-skill)

Tipo software. **Deal:** nav `nav-mega`, footer `footer-dark`, close `close-type`, botões `solid`.
**Hero:** `word` (palavra viva). O deal sorteou `triptych`, que não serve ao pedido de uma frase só; a `word`
é o hero que o próprio skill reserva para "uma palavra que troca". **Momento:** `word-highlight` na frase
logo abaixo do hero (sorteado de novo sem os efeitos de ponteiro, porque o hero já tem o seu).

- **Kit:** `public/assets/` é cópia do kit. **Não editar** (o gate acusa `kit-edited`). `src/kit.ts` carrega
  `system.js`, `layout.js` e `motion.js` como `<script type="module">` depois que o React desenha.
- **Raízes do React:** `src/main.tsx` monta `header#nav-root`, `main#top` e `footer#closing-root`.
- **CSS de página:** `src/index.css`, só o que mora dentro dos visuais.

```
[HERO]          "IA e software para empresas / startups / agronegócio" + fatos (sede, FACEPE, Inova Caatinga, Cultiva.ai)
[FRASE]         word-highlight: desenvolvemos com quem opera (campo, empresa, startup)
[PARCERIAS]     3 formatos de parceria com IA: startups · agronegócio · empresas
[PROJETOS]      Projetos sob demanda + janela da metodologia (as 9 etapas, sem detalhe)
[IA]            IA e visão computacional: visão, agentes, previsão/anomalias, voz
[AGRO]          Gestão de propriedade rural: fotos do agro + telas do Cultiva.ai + link para o site
[EMPRESA]       Quem somos · gráfico de marcos que sobe (animado) · carrossel de parceiros
[CONTATO]       Formulário com assunto · painel com a arte da marca, WhatsApp e e-mail
[FECHAMENTO]    Chamada + links + créditos e cookies (arte de fundo)
```

```
src/components/  Header, Hero, Statement, Parcerias, Projetos, IA, Agro, Empresa, Contato,
                 ContactForm, Footer, CookieConsent, BlwLogo
src/data/methodology.ts   Fases e etapas (janela de Projetos)
```

Removidos na rodada 2: `Atuacao`, `Metodologia` (pinned-chapters), `Parceria`, `Produtos`, `QuemSomos`.

## 4. Animações

- **Hero:** a palavra troca a cada 2 s por duas rodadas, descansa e volta a tocar quando o ponteiro entra no
  título (`data-ly-word`, do kit); as letras perto do ponteiro mudam de largura (`data-ly-letters="wdth"`).
- **Frase:** acende palavra por palavra ao cruzar o meio da tela (momento `word-highlight`).
- **Marcos:** gráfico em degraus no violeta da marca. Um ciclo de 3,2 s (`--m-cycle`): a linha se desenha,
  cada nó acende e o quadro final descansa antes de recomeçar. Dentro de `[data-m-loop]`: o kit pausa fora da
  tela, reinicia com o ponteiro, põe o botão de pausa e mostra o quadro final no celular e sem movimento.
- **Carrossel de parceiros:** avança um logo a cada 3 s (5 por vez no desktop, 3 no tablet), pausa com o
  ponteiro, com o foco e pelo botão. No celular e sem movimento vira uma grade parada.
- **Linhas da marca:** as artes entram como fundo do hero, do painel de contato e do fechamento. Ainda não
  há animação das linhas em si (ver pendências).

## 5. Verificação (gate)

```bash
# com `npm run dev` rodando, na raiz do projeto:
node <skill>/scripts/gate.mjs --start http://localhost:5173/ --new --kind software --category "<categoria>" --primary "Falar com a BLW"
node <skill>/scripts/gate.mjs
```

- **Categoria:** a lista de substantivos que os títulos usam (o checador só conhece substantivos em inglês).
  Ver o `--category` em uso: `software e IA sob medida: parcerias, projetos, sistemas, aplicativos, produtos,
  startups, agronegócio, propriedade rural, gestão, inteligência artificial, visão computacional, metodologia,
  empresa, empresas, engenheiros, conversa, parceiros, campo, adutoras, falhas`.
- **Waivers (2 de 5), em `.taste-skill/waivers.json` (não vai para o git):**
  1. `phone-number`: o link do WhatsApp comercial da BLW (canal principal).
  2. `row-lines`: o carrossel horizontal de parceiros, pedido pelo cliente. O kit proíbe carrossel e faixa
     que passa atrás de uma janela; o resto das regras de carrossel passa porque cada logo ocupa uma fatia
     fixa e a faixa para sempre alinhada à fatia.
- **Último run:** `GATE: PASS`. Layout sem achados em 1440, 1024, 820, 768 e 390. Build de produção:
  `perf.mjs` passa, exceto "imagens abaixo da dobra sem lazy" (o React cria as imagens depois do load).

## 6. Formulário e cookies

Igual à v3.1: `ContactForm.tsx` no padrão `form.form` do kit; envia para Google Sheets e RD Station
(`site-blw-contato-<assunto>`) e cai no WhatsApp se nenhum destino estiver configurado. O consentimento de
cookies é um bloco no rodapé (o kit não admite aviso fixo): o loader da RD só entra depois do aceite.
**Não ativar o RDCookieControl no painel da RD.**

## 7. Pendências

- [ ] **Vídeos do agro:** a mensagem citava "videozinhos", mas nenhum arquivo chegou. Se mandar, a seção Agro
      pode ganhar um quadro de vídeo (o kit prevê um quadro com poster, sem som e com botão de pausa).
- [ ] **Fotos do agro são provisórias** (Wikimedia Commons e USDA; créditos no rodapé): mangas de B.navez,
      Rio São Francisco de Sued Sheila Sarmento, irrigação do USDA. Trocar por fotos da BLW ou de clientes do
      Vale (mangas e uvas irrigadas de Petrolina e Juazeiro).
- [ ] **Animação das linhas da marca:** hoje as artes são fundo estático. Dá para desenhar as linhas com
      `stroke-dashoffset` (uma vez, na entrada do hero) ou trazer o momento `line-carries-colour` do kit.
- [ ] Logo da IAris Tech está cortado à direita no arquivo enviado. Faltam logos de Inova Caatinga,
      INTECVASF e São Francisco Valley; os enviados têm 100 px de altura.
- [ ] Hex do roxo tech e do branco no PDF do guia (imprime `#615afb` três vezes).
- [ ] Revisar os textos novos: formatos de parceria, "Automação com IA", as quatro linhas de IA (vieram do
      site anterior) e os marcos do gráfico (vieram da trajetória anterior).
- [ ] CNPJ, telefone e e-mail impressos saíram do rodapé (regra do skill). Decidir se voltam.
- [ ] `og:image` aponta para `/share.jpg` (relativo): trocar por URL absoluta e ativar o `canonical` com o
      domínio. O link "Baixar o app Cultiva.ai" (lojas) saiu do rodapé; hoje só há o link para o site.
- [ ] Links legais (Privacidade / Termos): as páginas não existem.
- [ ] Limpeza: `framer-motion`, `lucide-react` e o Tailwind não são mais usados.
