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
</script>
<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
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
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h3 class="text-3xl font-bold mb-4">Especialidades</h3>
      <p class="text-gray-600 mb-12">Transformo ideias em código, criando soluções digitais que fazem a diferença</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EspecialidadeCard v-for="(esp, i) in especialidades" :key="i" :icon="esp.icon" :title="esp.title"
          :subtitle="esp.subtitle" />
      </div>
    </div>
  </section>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h3 class="text-3xl font-bold mb-4">Vamos trabalhar juntos?</h3>
      <p class="text-gray-600 mb-12">Estou sempre aberto a novos desafios e oportunidades de colaboração</p>
      <a href="#contato" class="px-6 py-3 border border-gray-900 rounded-md hover:bg-gray-50 transition">Iniciar
        conversa ➡️</a>
    </div>
  </section>
</template>
