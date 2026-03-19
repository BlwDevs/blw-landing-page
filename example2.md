<!DOCTYPE html>
<html lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Software Company - Landing Page</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#0d80f2",
                        "background-light": "#ffffff",
                        "background-dark": "#111418",
                        "neutral-gray": "#f0f2f5",
                        "text-dark": "#1d232a",
                        "text-light-gray": "#6c757d",
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.25rem",
                        lg: "0.5rem",
                        xl: "0.75rem",
                        full: "9999px",
                    },
                },
            },
        };
    </script>
</head>
<body class="bg-background-light font-display text-text-dark">
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-7xl flex-1">
<header class="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3">
<div class="flex items-center gap-4">
<div class="w-24 h-8 bg-neutral-gray rounded-md flex items-center justify-center">
<span class="text-text-light-gray text-sm font-medium">Logo BLW</span>
</div>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-text-dark text-sm font-medium leading-normal hover:text-primary" href="#">Sobre nós</a>
<a class="text-text-dark text-sm font-medium leading-normal hover:text-primary" href="#">Serviços</a>
<a class="text-text-dark text-sm font-medium leading-normal hover:text-primary" href="#">Depoimentos</a>
<a class="text-text-dark text-sm font-medium leading-normal hover:text-primary" href="#">Contato</a>
</div>
</div>
<div class="md:hidden">
<button class="text-text-dark">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="flex-1">
<section class="py-16 md:py-24">
<div class="container mx-auto px-4">
<div class="grid md:grid-cols-2 gap-12 items-center">
<div class="flex flex-col gap-6 text-left">
<h1 class="text-text-dark text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                                            Transforme sua ideia em software de impacto
                                        </h1>
<p class="text-text-light-gray text-base sm:text-lg font-normal leading-normal">
                                            Desenvolvemos soluções de software sob medida para alavancar o seu negócio com tecnologia de ponta e design inovador.
                                        </p>
<div class="mt-4">
<img class="w-full h-auto rounded-xl object-cover" data-alt="Ilustração 3D de uma interface de aplicativo flutuando, com gradientes de azul e roxo." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2SQBCI3kFtTl1KYZYgTTgucyqD-u6blJEERq3obRI98vvb2t973Afml4AqydxRPRc8733_x9IqJxi-ae0hf5dJDCxqUsY8mEi78rwNpU9DQDMAZPTCjxKvKSML00SXJ6tk_3U_nLCERF9H1hPOHU2ACG7UPAM7oFXBKC_vy1Tf_l8f-71EmjhH4xiy402Jz7gVg4sVyNUD25C4W1KqrwEUcC3HcTJ4b3FisEke99SI6v--xRzWsaSWMXPhtDpikWZamlGCSqDcEM"/>
</div>
</div>
<div class="bg-white p-8 rounded-xl shadow-2xl border border-neutral-gray">
<h3 class="text-text-dark text-2xl font-bold mb-6 text-center">Fale com um especialista</h3>
<form class="space-y-4">
<div>
<label class="text-text-light-gray text-sm font-medium mb-2 block" for="name">Nome</label>
<input class="w-full bg-neutral-gray border border-transparent rounded-lg text-text-dark placeholder-text-light-gray focus:ring-primary focus:ring-2 focus:border-primary transition-colors" id="name" placeholder="Seu nome completo" type="text"/>
</div>
<div>
<label class="text-text-light-gray text-sm font-medium mb-2 block" for="email">E-mail</label>
<input class="w-full bg-neutral-gray border border-transparent rounded-lg text-text-dark placeholder-text-light-gray focus:ring-primary focus:ring-2 focus:border-primary transition-colors" id="email" placeholder="seu.email@exemplo.com" type="email"/>
</div>
<div>
<label class="text-text-light-gray text-sm font-medium mb-2 block" for="phone">Telefone</label>
<input class="w-full bg-neutral-gray border border-transparent rounded-lg text-text-dark placeholder-text-light-gray focus:ring-primary focus:ring-2 focus:border-primary transition-colors" id="phone" placeholder="(XX) XXXXX-XXXX" type="tel"/>
</div>
<div>
<label class="text-text-light-gray text-sm font-medium mb-2 block" for="company">Empresa</label>
<input class="w-full bg-neutral-gray border border-transparent rounded-lg text-text-dark placeholder-text-light-gray focus:ring-primary focus:ring-2 focus:border-primary transition-colors" id="company" placeholder="Nome da sua empresa" type="text"/>
</div>
<button class="w-full flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mt-6" type="submit">
<span class="truncate">Solicitar Contato</span>
</button>
</form>
</div>
</div>
</div>
</section>
<section class="py-16 md:py-24 bg-[#1a2027]/50 rounded-xl">
<div class="container mx-auto px-4">
<div class="text-center max-w-3xl mx-auto">
<h2 class="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Sobre Nós</h2>
<p class="text-white/80 text-base font-normal leading-normal mt-4">
                                        Somos uma equipe de especialistas apaixonados por tecnologia, dedicados a criar softwares que não apenas atendem, mas superam as expectativas. Nossa missão é transformar ideias em realidade digital, impulsionando o crescimento de nossos clientes através da inovação e da excelência técnica.
                                    </p>
</div>
</div>
</section>
<section class="py-16 md:py-24">
<div class="container mx-auto px-4">
<h2 class="text-white text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">Nossos Serviços</h2>
<div class="grid md:grid-cols-3 gap-8">
<div class="bg-[#1a2027] p-8 rounded-xl flex flex-col items-center text-center">
<div class="p-4 bg-primary rounded-full mb-4">
<span class="material-symbols-outlined text-white text-3xl">code</span>
</div>
<h3 class="text-white text-xl font-bold mb-2">Desenvolvimento de Software</h3>
<p class="text-white/70">Criação de soluções robustas e escaláveis, do backend ao frontend.</p>
</div>
<div class="bg-[#1a2027] p-8 rounded-xl flex flex-col items-center text-center">
<div class="p-4 bg-primary rounded-full mb-4">
<span class="material-symbols-outlined text-white text-3xl">design_services</span>
</div>
<h3 class="text-white text-xl font-bold mb-2">Design de UX/UI</h3>
<p class="text-white/70">Interfaces intuitivas e experiências de usuário memoráveis.</p>
</div>
<div class="bg-[#1a2027] p-8 rounded-xl flex flex-col items-center text-center">
<div class="p-4 bg-primary rounded-full mb-4">
<span class="material-symbols-outlined text-white text-3xl">support_agent</span>
</div>
<h3 class="text-white text-xl font-bold mb-2">Consultoria Técnica</h3>
<p class="text-white/70">Orientação especializada para otimizar sua estratégia de tecnologia.</p>
</div>
</div>
</div>
</section>
<section class="py-16 md:py-24 bg-[#1a2027]/50 rounded-xl">
<div class="container mx-auto px-4">
<h2 class="text-white text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">O que nossos clientes dizem</h2>
<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div class="bg-[#1a2027] p-6 rounded-lg">
<p class="text-white/80 italic">"A equipe transformou nossa visão em um produto incrível. A comunicação foi excelente e o resultado superou todas as expectativas."</p>
<p class="text-white font-bold mt-4">- CEO, TechCorp</p>
</div>
<div class="bg-[#1a2027] p-6 rounded-lg">
<p class="text-white/80 italic">"Profissionalismo e expertise técnica definem esta empresa. Eles entregaram nosso projeto no prazo e com uma qualidade impecável."</p>
<p class="text-white font-bold mt-4">- Founder, InovaStart</p>
</div>
</div>
</div>
</section>
<section class="py-16 md:py-24">
<div class="container mx-auto px-4">
<div class="max-w-xl mx-auto text-center">
<h2 class="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Vamos conversar?</h2>
<p class="text-white/80 mt-4 mb-8">Preencha o formulário abaixo e um de nossos especialistas entrará em contato.</p>
<form class="space-y-4">
<input class="w-full bg-[#1a2027] border-0 rounded-lg text-white placeholder-white/50 focus:ring-primary focus:ring-2" placeholder="Seu nome" type="text"/>
<input class="w-full bg-[#1a2027] border-0 rounded-lg text-white placeholder-white/50 focus:ring-primary focus:ring-2" placeholder="Seu melhor e-mail" type="email"/>
<input class="w-full bg-[#1a2027] border-0 rounded-lg text-white placeholder-white/50 focus:ring-primary focus:ring-2" placeholder="Seu telefone" type="tel"/>
<textarea class="w-full bg-[#1a2027] border-0 rounded-lg text-white placeholder-white/50 focus:ring-primary focus:ring-2" placeholder="Sua mensagem" rows="4"></textarea>
<button class="w-full flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" type="submit">
<span class="truncate">Enviar Mensagem</span>
</button>
</form>
</div>
</div>
</section>
</main>
<footer class="border-t border-solid border-b-[#283039] py-8">
<div class="container mx-auto px-4 text-center text-white/60">
<p>© 2024 Software Company. Todos os direitos reservados.</p>
<div class="flex justify-center gap-4 mt-4">
<a class="hover:text-primary transition-colors" href="#">Facebook</a>
<a class="hover:text-primary transition-colors" href="#">LinkedIn</a>
<a class="hover:text-primary transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>
</div>
</div>
</div>
</div>
</body></html>