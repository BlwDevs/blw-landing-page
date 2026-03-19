import React from 'react';

interface Stat {
  number: string;
  label: string;
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "30+", label: "Clientes Satisfeitos" },
    { number: "99%", label: "Taxa de Sucesso" }
  ];

  const values: Value[] = [
    {
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas e práticas inovadoras para criar soluções que se destacam no mercado.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Qualidade",
      description: "Cada linha de código é cuidadosamente desenvolvida seguindo as melhores práticas e padrões de qualidade.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e objetivos de negócio.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Sobre a BLW
          </h2>
          <p className="text-xl text-text-light-gray max-w-3xl mx-auto">
            Somos uma empresa de desenvolvimento de software especializada em criar soluções digitais inovadoras
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <div>
            <h3 className="text-3xl font-bold text-text-dark mb-6">
              Transformamos ideias em realidade digital
            </h3>
            <div className="space-y-4 text-text-light-gray leading-relaxed">
              <p>
                Na BLW, acreditamos que a tecnologia deve ser uma ferramenta poderosa para impulsionar o crescimento dos negócios. 
                Com anos de experiência no mercado, nossa equipe de especialistas desenvolve soluções personalizadas que atendem 
                às necessidades específicas de cada cliente.
              </p>
              <p>
                Nosso compromisso vai além da entrega de código. Trabalhamos como parceiros estratégicos, oferecendo consultoria 
                técnica e suporte contínuo para garantir que sua solução evolua junto com seu negócio.
              </p>
              <p>
                Utilizamos metodologias ágeis e as tecnologias mais modernas do mercado para entregar projetos de alta qualidade, 
                dentro do prazo e orçamento estabelecidos.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background-light rounded-2xl border border-gray-100"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-light-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-text-dark text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background-light rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-text-dark mb-4">
                  {value.title}
                </h4>
                <p className="text-text-light-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Vamos conversar sobre como podemos ajudar sua empresa a crescer
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-white px-8 py-4 text-lg font-bold transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;