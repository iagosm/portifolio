<script setup>
import { computed } from 'vue'
const metricas = [
  {
    title: "3+%", subtitle: "Anos de Experiência em Desenvolvimento Web"
  },
  {
    title: "100%", subtitle: "Dedicação e Aprendizado Contínuo"
  },
  {
    title: 'Full Stack', subtitle: 'Do Backend ao Frontend'
  },
  {
    title: 'Foco', subtitle: 'Performance e Experiência do Usuário'
  }
];
const valores = [
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-6 h-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    gradient: "from-blue-500 to-cyan-500",
    title: "Foco em Resultados",
    subtitle: "Cada linha de código tem um propósito claro e mensurável",
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-6 h-6" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`,
    gradient: "from-yellow-500 to-orange-500",
    title: "Inovação Constante",
    subtitle: "Sempre explorando novas tecnologias e metodologias",
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-6 h-6" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>`,
    gradient: "from-purple-500 to-pink-500",
    title: "Performance",
    subtitle: "Otimização e velocidade são prioridades em todos os projetos",
  },
];
const processos = [
  {
    title: "Análise",
    subtitle: "Entendimento profundo do problema e objetivos"
  },
  {
    title: "Planejamento",
    subtitle: "Arquitetura e escolha das melhores tecnologias"
  },
  {
    title: "Desenvolvimento",
    subtitle: "Código limpo, testado e documentado"
  },
  {
    title: "Entrega",
    subtitle: "Deploy otimizado e suporte contínuo"
  },
]
const habilidades = [
  { name: 'PHP', icon: '🐘', gradient: 'bg-gradient-to-br from-purple-600 to-blue-600' },
  { name: 'Laravel', icon: '🔴', gradient: 'bg-gradient-to-br from-red-500 to-orange-500' },
  { name: 'Vue.js', icon: '💚', gradient: 'bg-gradient-to-br from-green-500 to-emerald-500' },
  { name: 'jQuery', icon: '💙', gradient: 'bg-gradient-to-br from-blue-500 to-indigo-500' },
  { name: 'MySQL', icon: '🐬', gradient: 'bg-gradient-to-br from-orange-500 to-yellow-500' },
  { name: 'Bootstrap', icon: '🅱️', gradient: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { name: 'Tailwind', icon: '🎨', gradient: 'bg-gradient-to-br from-cyan-500 to-blue-500' },
  { name: 'Git', icon: '📦', gradient: 'bg-gradient-to-br from-orange-600 to-red-600' },
  { name: 'VS Code', icon: '💻', gradient: 'bg-gradient-to-br from-blue-600 to-purple-600' },
  { name: 'Linux', icon: '🐧', gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
  { name: 'Chart.js', icon: '📊', gradient: 'bg-gradient-to-br from-pink-500 to-rose-500' },
  { name: 'IA/Gemini', icon: '🤖', gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
  { name: 'ChatGPT', icon: '🧠', gradient: 'bg-gradient-to-br from-green-600 to-teal-600' }
]
const linhaTempo = [
  {
    workMode: "Remoto",
    title: "Desenvolvedor Web Júnior",
    company: "Analítica 3M",
    startDate: "2024-05-01",
    endDate: null,
    description: "Consolidação como desenvolvedor júnior. Foco em correção de bugs, refatoração de código e manutenção de aplicações web. Experiência com MVC, PSR, integração de APIs e Power BI Embedded para dashboards interativos.",
    icon: "💡",
    bgGradient: "from-blue-500 to-cyan-600"
  },
  {
    workMode: "Remoto",
    title: "Técnico de suporte (FreeLance)",
    company: "Giusoft Tecnologia",
    startDate: "2023-05-01",
    endDate: "2024-07-01",
    description: "Atendimento aos usuários dos sistemas desenvolvidos pela empresa, documentação e apresentação de correção a problemas apresentados e prestação de suporte via AnyDesk.",
    icon: "🛠️",
    bgGradient: "from-green-500 to-teal-500"
  },
  {
    workMode: "Remoto",
    title: "Desenvolvedor Web (Estágio)",
    company: "Analítica 3M",
    startDate: "2023-05-01",
    endDate: "2024-07-01",
    description: "Entrada no desenvolvimento web com PHP, JavaScript, jQuery e SQL. Atuação com correção de bugs, otimização de performance e colaboração em novas funcionalidades. Construção de base sólida em backend e frontend.",
    icon: "💻",
    bgGradient: "from-purple-500 to-pink-500"
  },
  {
    workMode: "Hibrido",
    title: "Técnico de suporte",
    company: "Giusoft Tecnologia",
    startDate: "2022-12-01",
    endDate: "2023-08-01",
    description: "Atendimento aos usuários dos sistemas desenvolvidos pela empresa, documentação e apresentação de correção a problemas apresentados e prestação de suporte via AnyDesk.",
    icon: "🖥️",
    bgGradient: "from-yellow-400 to-orange-500"
  },
  {
    workMode: "Hibrido",
    title: "Estagiário → Técnico de TI",
    company: "Giusoft Tecnologia",
    startDate: "2022-05-01",
    endDate: "2022-12-01",
    description: "Início em TI com suporte técnico e documentação. Evolução para técnico de suporte com atendimento direto a usuários, manutenção de sistemas e apoio técnico especializado.",
    icon: "⚙️",
    bgGradient: "from-gray-400 to-gray-600"
  }
]
function calculatePeriod(start, end) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;
  if (months <= 0) {
    years--;
    months += 12;
  }

  let result = '';
  if (years > 0) result += `${years} ano${years > 1 ? 's' : ''} `;
  if (months > 0) result += `${months} ${months > 1 ? 'meses' : 'mês'}`;
  return result.trim() || 'menos de 1 mês';
}
const timelineSorted = computed(() => {
  return [...linhaTempo].sort((a, b) => {
    const [aYear, aMonth] = a.startDate.split('-').map(Number);
    const [bYear, bMonth] = b.startDate.split('-').map(Number);
    if (bYear !== aYear) return bYear - aYear;
    return bMonth - aMonth;
  });
});
function getMonthYear(dateStr) {
  if (!dateStr) return 'Momento';
  const [year, month] = dateStr.split('-');
  const months = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
  return `${months[Number(month) - 1]} ${year}`;
}
</script>
<template>
  <section class="min-h-screen max-w-6xl mx-auto pt-20">
    <div class="mb-20 text-center">
      <h2 class="text-4xl md:text-6xl font-bold mb-6 text-center">Sobre Mim</h2>
      <div
        class="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto transition-colors duration-300">
      </div>
    </div>
    <div class="mb-20" style="opacity: 1; transform: none;">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="relative" style="opacity: 1; transform: none;">
            <div
              class="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center transition-colors duration-300">
              <div class="text-8xl">👨‍💻</div>
            </div>
            <div
              class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-code w-8 h-8 text-white" aria-hidden="true">
                <path d="m16 18 6-6-6-6"></path>
                <path d="m8 6-6 6 6 6"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 transition-colors duration-300">
            Desenvolvedor Full Stack</h2>
          <p class="text-lg text-gray-600 leading-relaxed transition-colors duration-300">Transformo
            ideias em soluções digitais completas. Especializado em PHP, Laravel e Vue.js, criando desde APIs robustas
            até interfaces elegantes e funcionais.</p>
          <p class="text-gray-600 leading-relaxed transition-colors duration-300">Combinando
            tecnologias tradicionais com ferramentas modernas de IA, entrego projetos que superam expectativas.</p>
          <div class="grid grid-cols-2 gap-6 pt-8">
            <div v-for="(metrica, i) in metricas" :key="i" class="text-center">
              <div class="text-2xl md:text-3xl font-light text-gray-900 transition-colors duration-300">
                {{ metrica.title }}</div>
              <div class="text-sm text-gray-500 transition-colors duration-300">{{ metrica.subtitle
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <h3
        class="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center transition-colors duration-300">
        Tecnologias & Ferramentas</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div v-for="(habilidade, index) in habilidades" :key="index" class="group cursor-pointer">
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto', habilidade.gradient]">
              <span class="text-2xl">{{ habilidade.icon }}</span>
            </div>
            <h4 class="text-sm font-medium text-gray-900 text-center transition-colors duration-300">
              {{ habilidade.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <h3
        class="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center transition-colors duration-300">
        Meus Valores
      </h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(item, index) in valores" :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl text-center">
          <div
            :class="`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white bg-gradient-to-br ${item.gradient}`">
            <div v-html="item.svg"></div>
          </div>
          <h4 class="text-xl font-medium text-gray-900 dark:text-white mb-4 transition-colors duration-300">{{
            item.title }}</h4>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{{ item.subtitle }}
          </p>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <h3
        class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-12 text-center transition-colors duration-300">
        Jornada Profissional
      </h3>
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <div
            class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 transition-colors duration-300">
          </div>
          <div class="space-y-12">
            <div v-for="(item, index) in timelineSorted" :key="index" class="relative flex items-start">
              <div :class="[
                'relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg',
                item.bgGradient,
                item.endDate === null ? 'ring-4 ring-cyan-400' : ''
              ]"
                :style="{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }">
                <span class="text-2xl">{{ item.icon }}</span>
              </div>
              <div class="ml-8 flex-1">
                <div
                  class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 border transition-colors duration-300 border-gray-100 dark:border-gray-700">
                  <span
                    class="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 mr-2 transition-colors duration-300 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {{ new Date(item.startDate).getFullYear() }}
                  </span>
                  <span
                    class="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 transition-colors duration-300 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {{ item.workMode }}
                  </span>
                  <h4 class="text-xl font-medium text-gray-900 dark:text-white mb-1 transition-colors duration-300">{{
                    item.title }}</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">{{
                    item.company }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {{ getMonthYear(item.startDate) }} - {{ getMonthYear(item.endDate) }} - {{
                      calculatePeriod(item.startDate, item.endDate) }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{{
                    item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <h3
        class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-12 text-center transition-colors duration-300">
        Meu Processo
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="(processo, i) in processos" class="text-center">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
            {{ i + 1 }}</div>
          <h4>{{ processo.title }}</h4>
          <p>{{ processo.subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="text-center mb-20" style="opacity: 1; transform: none;">
      <div
        class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 transition-colors duration-300">
        <div></div>
        <h3 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Vamos Conversar?</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">Sempre aberto para discutir
          novos projetos, ideias criativas ou oportunidades de parceria.</p>
        <a href="#contato"
          class="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-100">Entre
          em contato</a>
      </div>
    </div>
  </section>
</template>