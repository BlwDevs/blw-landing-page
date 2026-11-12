/**
 * Carrega os scripts do taste-skill (public/assets) depois que o React desenhou a página.
 *
 * system.js (menu, formulários, momentos), layout.js (movimentos do hero) e motion.js (hover, entrada do
 * hero) leem o DOM quando iniciam. Num HTML estático eles rodam no fim do <body>; aqui o DOM nasce do React,
 * então eles entram só depois da primeira renderização. Entram como <script type="module"> comuns, um por
 * vez: um import() passaria pelo Vite, que recusa arquivos de public/. Os arquivos não são editados.
 */
const KIT_SCRIPTS = ['/assets/system.js', '/assets/layout/layout.js', '/assets/motion/motion.js'];

let started = false;

const load = (src: string): Promise<void> =>
  new Promise(resolve => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => {
      console.error(`[kit] não foi possível carregar ${src}`);
      resolve();
    };
    document.body.append(script);
  });

export async function loadKit(): Promise<void> {
  if (started) return;
  started = true;
  for (const src of KIT_SCRIPTS) await load(src);
}
