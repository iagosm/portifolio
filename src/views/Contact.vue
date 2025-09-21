<template>
  <section class="max-w-4xl mx-auto flex flex-col justify-center px-6 pt-20">
    <div class="mb-16" style="opacity: 1; transform: none;"><h1 class="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-8 transition-colors duration-300">Contato</h1>
      <div class="w-20 h-px bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
    </div>
    <!-- <div class="flex flex-wrap gap-4"> -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
      <div>
        <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-8 transition-colors duration-300">
          Vamos Conversar
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
          Estou sempre aberto a novas oportunidades e projetos interessantes. 
          Entre em contato e vamos criar algo incrível juntos.
        </p>
        <div className="space-y-6">
          <div class="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors duration-300">
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-light transition-colors duration-300">
                iagosousa201486@gmail.com
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                Email
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors duration-300">
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-light transition-colors duration-300">
                +55 (71) 99609-9120
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                Telefone
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors duration-300">
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-light transition-colors duration-300">
                Salvador, Bahia
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                Localização
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form action="">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4 w-100">
              <label for="nome" class="block text-sm/6 font-medium text-gray-900">Nome</label>
              <div class="mt-2">
                <div
                  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input id="nome" type="text" name="nome"
                    class="w-full block min-w-0 grow h-12 bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                </div>
              </div>
            </div>
            <div class="sm:col-span-4 w-100">
              <label for="email" class="block text-sm/6 font-medium text-gray-900">E-mail</label>
              <div class="mt-2">
                <div  class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input id="email" type="text" name="email"
                    class="w-full block min-w-0 grow h-12 bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                </div>
              </div>
            </div>
            <div class="col-span-full w-100">
              <label for="mensagem" class="block text-sm/6 font-medium text-gray-900">Mensagem</label>
              <div class="mt-2">
                <textarea id="mensagem" name="mensagem" rows="6"
                  class="w-full p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-300 resize-none rounded-md"></textarea>
              </div>
            </div>
            <button class="w-100 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition cursor-pointer">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>