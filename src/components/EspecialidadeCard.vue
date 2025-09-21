<script setup>
defineProps({
  icon: String,
  title: String,
  subtitle: String,
})
</script>
<template>
  <div class="bg-white p-7 rounded-lg shadow hover:shadow-lg transition">
    <div class="text-2xl mb-4">{{icon}}</div>
    <h4 class="text-xl font-semibold mb-2">{{title}}</h4>
    <p class="text-gray-600 text-sm">{{subtitle}}</p>
  </div>
</template>
