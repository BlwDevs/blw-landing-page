/**
 * Momento "word-highlight": a frase descansa em meia tinta e acende palavra por palavra ao cruzar o meio da tela.
 * A palavra forte (strong) vai para a cor de destaque. Vale como gancho comercial logo depois do hero.
 */
const Statement: React.FC = () => {
  return (
    <section className="section statement" id="vale" data-moment="word-highlight" aria-label="A BLW e o Vale do São Francisco">
      <div className="wrap">
        <p className="t-label">A BLW</p>
        <p className="mo-wh__text">
          Desenvolvemos software e inteligência artificial com quem opera: no campo do Vale do São Francisco, na empresa
          que já funciona e na startup que precisa <strong>entregar o produto</strong>.
        </p>
      </div>
    </section>
  );
};

export default Statement;
