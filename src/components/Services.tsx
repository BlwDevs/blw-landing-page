import React from 'react';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["React/Next.js", "Node.js", "TypeScript", "APIs RESTful"],
      icon: (
        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Apps nativos e híbridos para iOS e Android com excelente experiência do usuário.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"],
      icon: (
        <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Inteligência Artificial",
      description: "Soluções de IA e Machine Learning para automatizar processos e gerar insights.",
      features: ["Machine Learning", "NLP", "Computer Vision", "Automação"],
      icon: (
        <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Integrações & APIs",
      description: "Conectamos seus sistemas com APIs robustas e integrações personalizadas.",
      features: ["REST APIs", "GraphQL", "Webhooks", "Microserviços"],
      icon: (
        <svg className="w-12 h-12 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      title: "UX/UI Design",
      description: "Design centrado no usuário com interfaces intuitivas e experiências memoráveis.",
      features: ["Design System", "Prototipagem", "User Research", "Figma/Adobe"],
      icon: (
        <svg className="w-12 h-12 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: "Consultoria Técnica",
      description: "Orientação estratégica em tecnologia para acelerar seu crescimento digital.",
      features: ["Arquitetura", "Code Review", "DevOps", "Mentoria"],
      icon: (
        <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas de desenvolvimento de software para transformar suas ideias em realidade digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Desenvolvemos soluções personalizadas para atender suas necessidades específicas
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;