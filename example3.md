<!DOCTYPE html>

<html class="dark" lang="pt-br"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Serviços de Desenvolvimento de Software</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d7ff2",
                        "background-light": "#f5f7f8",
                        "background-dark": "#101922",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
</head>
<body>
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-16">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
<div class="flex flex-wrap justify-between gap-6 p-4">
<div class="flex max-w-2xl flex-col gap-3">
<p class="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Explore Nossos Serviços de Elite</p>
<p class="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal md:text-lg">Oferecemos um portfólio completo de serviços de desenvolvimento de software para impulsionar a inovação e o crescimento do seu negócio.</p>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
<div class="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<span class="material-symbols-outlined text-primary text-3xl">language</span>
<div class="flex flex-col gap-2">
<h2 class="text-gray-900 dark:text-white text-xl font-bold leading-tight">Desenvolvimento Web</h2>
<p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Criação de plataformas web robustas, escaláveis e de alta performance, desde MVPs a sistemas corporativos complexos.</p>
</div>
<button class="flex items-center text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] mt-auto self-start">
<span>Saiba Mais</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
<div class="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<span class="material-symbols-outlined text-primary text-3xl">phone_iphone</span>
<div class="flex flex-col gap-2">
<h2 class="text-gray-900 dark:text-white text-xl font-bold leading-tight">Desenvolvimento Mobile</h2>
<p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Aplicativos nativos e híbridos para iOS e Android com foco em experiência do usuário (UX) e design intuitivo.</p>
</div>
<button class="flex items-center text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] mt-auto self-start">
<span>Saiba Mais</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
<div class="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<span class="material-symbols-outlined text-primary text-3xl">neurology</span>
<div class="flex flex-col gap-2">
<h2 class="text-gray-900 dark:text-white text-xl font-bold leading-tight">Inteligência Artificial &amp; ML</h2>
<p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Implementação de soluções de IA e Machine Learning para otimizar processos e gerar insights estratégicos.</p>
</div>
<button class="flex items-center text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] mt-auto self-start">
<span>Saiba Mais</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
<div class="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<span class="material-symbols-outlined text-primary text-3xl">extension</span>
<div class="flex flex-col gap-2">
<h2 class="text-gray-900 dark:text-white text-xl font-bold leading-tight">Integrações e APIs</h2>
<p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Conectamos seus sistemas e plataformas, garantindo um fluxo de dados contínuo e eficiente através de APIs customizadas.</p>
</div>
<button class="flex items-center text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] mt-auto self-start">
<span>Saiba Mais</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
<div class="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
<span class="material-symbols-outlined text-primary text-3xl">compass_calibration</span>
<div class="flex flex-col gap-2">
<h2 class="text-gray-900 dark:text-white text-xl font-bold leading-tight">Consultoria Tecnológica</h2>
<p class="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Orientação estratégica para alinhar sua tecnologia aos seus objetivos de negócio, da arquitetura à execução.</p>
</div>
<button class="flex items-center text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] mt-auto self-start">
<span>Saiba Mais</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</body></html>