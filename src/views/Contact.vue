<template>
  <section class="">
    <div class="mb-16" style="opacity: 1; transform: none;">
      <h1 class="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-8 transition-colors duration-300">
        Contato</h1>
      <div class="w-20 h-px bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" style="opacity: 1; transform: none;">
        <h1 class="text-4xl md:text-5xl font-light text-center text-gray-900 dark:text-white mb-8">Vamos Conversar?
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">Estou sempre aberto a
          discutir novos projetos, oportunidades criativas ou simplesmente trocar uma ideia sobre tecnologia e
          desenvolvimento.</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div
          class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
          style="opacity: 1; transform: none;">
          <div class="flex items-center space-x-3 mb-8">
            <div
              class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-message-square w-6 h-6 text-white" aria-hidden="true">
                <path
                  d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
                </path>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Envie uma Mensagem</h2>
              <p class="text-gray-600 dark:text-gray-400">Preencha o formulário abaixo</p>
            </div>
          </div>
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-user absolute left-3 top-3 w-5 h-5 text-gray-400" aria-hidden="true">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg><input type="text" name="name"
                    class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nome" required value=""></div>
              </div>
              <div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-mail absolute left-3 top-3 w-5 h-5 text-gray-400" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg><input type="email" name="email"
                    class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="email@exemplo.com" required value=""></div>
              </div>
            </div>
            <div class="space-y-2"><label
                class="text-sm font-medium text-gray-700 dark:text-gray-300">Assunto</label><input type="text"
                name="subject"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Sobre o que você gostaria de conversar?" required value=""></div>
            <div class="space-y-2"><label
                class="text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label><textarea name="message"
                rows="5"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Conte-me mais sobre seu projeto ou ideia..." required></textarea></div><button
              type="submit"
              class="w-full bg-gray-900 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-send w-5 h-5" aria-hidden="true">
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                </path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg><span>Enviar Mensagem</span></button>
          </form>
        </div>
        <div class="space-y-8" style="opacity: 1; transform: none;">
          <div
            class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            <div class="flex items-center space-x-3 mb-8">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-phone w-6 h-6 text-white" aria-hidden="true">
                  <path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                  </path>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Informações de Contato</h2>
                <p class="text-gray-600 dark:text-gray-400">Outras formas de me encontrar</p>
              </div>
            </div>
            <div class="space-y-6"><a href="mailto:iagosousa201486@gmail.com"
                class="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                style="opacity: 1; transform: none;">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-mail w-5 h-5 text-gray-600 dark:text-gray-400" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 dark:text-white">Email</h3>
                  <p class="text-gray-600 dark:text-gray-400 font-medium">iagosousa201486@gmail.com</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Resposta em até 24h</p>
                </div>
              </a><a href="tel:+5511999999999"
                class="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                style="opacity: 1; transform: none;">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-phone w-5 h-5 text-gray-600 dark:text-gray-400" aria-hidden="true">
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                    </path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 dark:text-white">Telefone</h3>
                  <p class="text-gray-600 dark:text-gray-400 font-medium">+55 (71) 99609-9120</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Seg-Sex, 9h às 18h</p>
                </div>
              </a><a href="#"
                class="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                style="opacity: 1; transform: none;">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-map-pin w-5 h-5 text-gray-600 dark:text-gray-400" aria-hidden="true">
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 dark:text-white">Localização</h3>
                  <p class="text-gray-600 dark:text-gray-400 font-medium">Salvador, Bahia</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Disponível para projetos remotos</p>
                </div>
              </a></div>
          </div>
          <div
            class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Redes Sociais</h3>
            <div class="flex space-x-4"><a href="https://github.com/iagosm" target="_blank" rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-github w-5 h-5" aria-hidden="true">
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                  </path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg></a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg></a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>