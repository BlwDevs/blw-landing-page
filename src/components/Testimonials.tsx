import React from 'react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechStart",
      content: "A BLW transformou nossa ideia em uma plataforma incrível. A qualidade do código e a atenção aos detalhes superaram nossas expectativas. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Ana Costa",
      position: "Diretora de Marketing",
      company: "InnovaLab",
      content: "Trabalhar com a BLW foi uma experiência excepcional. Eles entenderam perfeitamente nossa visão e entregaram uma solução que revolucionou nosso processo de vendas.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      position: "CTO",
      company: "DataFlow",
      content: "A expertise técnica da equipe BLW é impressionante. Eles não apenas desenvolveram nossa aplicação, mas também nos orientaram sobre as melhores práticas e tecnologias.",
      rating: 5
    },
    {
      name: "Mariana Santos",
      position: "Fundadora",
      company: "EcoSolutions",
      content: "Desde o primeiro contato até a entrega final, a BLW demonstrou profissionalismo e comprometimento. O resultado final superou todas as nossas expectativas.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      position: "Gerente de TI",
      company: "FinanceHub",
      content: "A BLW conseguiu integrar sistemas complexos de forma elegante e eficiente. A comunicação foi excelente durante todo o projeto.",
      rating: 5
    },
    {
      name: "Juliana Ferreira",
      position: "Product Manager",
      company: "AppVenture",
      content: "O app desenvolvido pela BLW tem uma performance excepcional e uma UX incrível. Nossos usuários adoraram a nova experiência!",
      rating: 5
    }
  ];

  const renderStars = (rating: number): React.ReactNode => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-text-light-gray max-w-3xl mx-auto">
            Veja os depoimentos de empresas que confiaram na BLW para transformar suas ideias em realidade
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-text-light-gray mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Author Info */}
                  <div>
                    <h4 className="font-bold text-text-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-text-light-gray text-sm">
                      {testimonial.position} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-text-light-gray">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                <div className="text-text-light-gray">Avaliação Média</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-text-light-gray">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-text-light-gray">Tempo de Resposta</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-text-dark mb-4">
            Seja nosso próximo caso de sucesso
          </h3>
          <p className="text-xl text-text-light-gray mb-8">
            Junte-se às empresas que já transformaram seus negócios com a BLW
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary px-8 py-4 text-lg font-bold transform hover:scale-105 shadow-lg"
          >
            Começar Meu Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;