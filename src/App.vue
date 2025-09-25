<script setup>
</script>
<template>
  <div class="bg-white text-gray-900">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-lg font-semibold">Iago Sousa</h1>
        <nav class="space-x-6 text-gray-600 font-medium">
          <router-link to="/" class="hover:text-gray-900 border-transparent hover:border-gray-900">Home</router-link>
          <router-link to="/about" class="hover:text-gray-900 border-transparent hover:border-gray-900">Sobre</router-link>
          <router-link to="/projects" class="hover:text-gray-900 border-transparent hover:border-gray-900">Projetos</router-link>
          <router-link to="/contact" class="hover:text-gray-900 border-transparent hover:border-gray-900">Contato</router-link>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
