<script setup>
import EspecialidadeCard from '../components/EspecialidadeCard.vue'
const especialidades = [
  {
    icon: "💻",
    title: "Desenvolvimento Web",
    subtitle: "PHP, JavaScript, Laravel, Vue.js com foco em performance e UX"
  },
  {
    icon: "📊",
    title: "Business Intelligence",
    subtitle: "Power BI Embedded e integração de APIs para insights em tempo real"
  },
  {
    icon: "⚡",
    title: "Otimização",
    subtitle: "Refatoração de código, correção de bugs e melhoria de performance"
  }
]
const skills = [
  {
    title: "Desenvolvimento Web",
    description: "Aplicações modernas com PHP, Laravel e Vue.js",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M..." /></svg>`,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "APIs & Integrações",
    description: "Conexões robustas e escaláveis entre sistemas",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M..." /></svg>`,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Manutenção",
    description: "Correções, melhorias contínuas e evolução de sistemas",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M..." /></svg>`,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Análise de Dados",
    description: "Dashboards, métricas e insights para decisões estratégicas",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M..." /></svg>`,
    gradient: "from-green-500 to-emerald-500"
  }
]
</script>
<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <h2 class="text-4xl md:text-6xl font-bold mb-6">Iago Sousa</h2>
    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
      Desenvolvedor Full Stack especializado em soluções web eficientes e experiências digitais excepcionais
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#projetos" class="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">Ver Projetos
        →</a>
      <a href="#contato" class="px-6 py-3 border border-gray-900 rounded-md hover:bg-gray-50 transition">Entrar em
        Contato</a>
    </div>
  </section>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-4xl md:text-5xl font-light text-center text-gray-900 dark:text-white mb-16">Como posso
        ajudar você?</h3>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          class="group p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-rocket w-8 h-8" aria-hidden="true">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
              </path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
              </path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">Desenvolvimento Web</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Aplicações modernas com PHP, Laravel e Vue.js</p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-zap w-8 h-8" aria-hidden="true">
              <path
                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
              </path>
            </svg>
          </div>
          <p>APIs & Integrações</p>
          <p>Conexões robustas e escaláveis entre sistemas</p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-wrench w-8 h-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path d="M14.7 6.3a5 5 0 0 0-7.4 6.4L2 18v4h4l5.3-5.3a5 5 0 0 0 6.4-7.4z" />
            </svg>
          </div>
          <p>Manutenção</p>
          <p>Correções, melhorias contínuas e evolução de sistemas em produção.</p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-bar-chart-3 w-8 h-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18" />
              <rect x="7" y="13" width="3" height="5" />
              <rect x="12" y="9" width="3" height="9" />
              <rect x="17" y="5" width="3" height="13" />
            </svg>
          </div>
          <p>Desenvolvimento Web</p>
          <p>Aplicações modernas com PHP, Laravel e Vue.js</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-4xl md:text-5xl font-light text-center text-gray-900 dark:text-white mb-10">Experiência
        corporativa</h3>
      <p class="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">Desenvolvedor experiente
        em projetos empresariais, trabalhando com equipes multidisciplinares para
        criar soluções robustas e escaláveis. </p>
    </div>
    <div class="grid md:grid-cols-2 gap-8 mb-20">
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
        <p>Projetos Corporativos</p>
        <p>Desenvolvimento em equipes de grandes empresas</p>
        <ul>
          <li>Sistemas empresariais</li>
          <li>Arquitetura escalável</li>
          <li>Metodologias ágeis</li>
        </ul>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
        <p>Stack Moderno e Legado</p>
        <p>Tecnologias atuais e melhores práticas</p>
        <ul>
          <li>PHP & Laravel</li>
          <li>VueJs</li>
          <li>APIs RESTful</li>
        </ul>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
        <p>Trabalho em Equipe</p>
        <p>Colaboração efetiva em ambientes corporativos</p>
        <ul>
          <li>Comunicação Técnica</li>
          <li>Resolução de Conflitos</li>
          <li>Compartilhamento de Conhecimento</li>
        </ul>
      </div>
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
        <p>Foco em Resultados</p>
        <p>Soluções que impactam o negócio</p>
        <ul>
          <li>Performance</li>
          <li>Escalabilidade</li>
          <li>Manutenibilidade</li>
        </ul>
      </div>
    </div>
    <div class="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-3xl relative overflow-hidden shadow-lg">
      <!-- <div class="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-16 h-16 text-blue-400 mx-auto mb-6" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
        <h3 class="text-3xl font-light text-gray-900 text-center mb-4">Crescimento Contínuo</h3>
        <p class="text-gray-600  text-lg leading-relaxed">Constantemente aprendendo e aplicando novas tecnologias em projetos reais, sempre focado em entregar valor e
          impacto para o negócio.</p>
      <!-- </div> -->
    </div>
  </section>
  <section class="py-20 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-4xl md:text-5xl font-light text-center text-gray-900 dark:text-white mb-16">O que dizem sobre meu
        trabalho</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="group p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote w-8 h-8 text-blue-600 mb-4" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">"Possui um alto comprometimento com o
            trabalho, foca na resolução dos desafios que aparecem, sempre preocupado
            com a empresa e a melhor maneira de ajuda-lá, possui um boa relação com os funcionários e um ótimo empenho
            no
            estudo e possui uma atualização de conhecimento constante"</p>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">Ex Colega Empresa</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Tech Lead - Atualmente</p>
            </div>
            <div class="flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-star w-5 h-5 text-yellow-500 fill-current"
                aria-hidden="true">
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" aria-hidden="true">
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" aria-hidden="true">
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" aria-hidden="true">
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" aria-hidden="true">
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
              </svg></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="space-y-4" style="opacity: 1; transform: none;">
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-map-pin w-8 h-8 text-white" aria-hidden="true">
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
              </path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg></div>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Localização</h3>
          <p class="text-gray-600 dark:text-gray-400">Brasil, Remoto</p>
        </div>
        <div class="space-y-4" style="opacity: 1; transform: none;">
          <div
            class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-clock w-8 h-8 text-white" aria-hidden="true">
              <path d="M12 6v6l4 2"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg></div>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Horário</h3>
          <p class="text-gray-600 dark:text-gray-400">Seg - Sex, 9h às 18h</p>
        </div>
        <div class="space-y-4" style="opacity: 1; transform: none;">
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-sparkles w-8 h-8 text-white" aria-hidden="true">
                <path
                  d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
                </path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg></div>
          </div>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Especialidade</h3>
          <p class="text-gray-600 dark:text-gray-400">Full Stack PHP</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h3 class="text-3xl font-bold mb-4">Especialidades</h3>
      <p class="text-gray-600 mb-12">Transformo ideias em código, criando soluções digitais que fazem a diferença</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EspecialidadeCard v-for="(esp, i) in especialidades" :key="i" :icon="esp.icon" :title="esp.title"
          :subtitle="esp.subtitle" />
      </div>
    </div>
  </section>
  <section class="py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-4xl md:text-5xl font-light mb-6">Pronto para começar seu próximo projeto?</h3>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Vamos transformar sua ideia em uma solução digital
        poderosa e eficiente.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contato" class="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">Iniciar
          projeto ➡️</a>
        <div class="flex space-x-4"><a href="https://github.com"
            class="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300"
            style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-github w-6 h-6" aria-hidden="true">
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
              </path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg></a><a href="https://linkedin.com"
            class="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300"
            style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-linkedin w-6 h-6" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg></a><a href="mailto:contato@iagosilva.dev"
            class="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300"
            style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-mail w-6 h-6" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg></a></div>
      </div>
    </div>
  </section>
</template>
