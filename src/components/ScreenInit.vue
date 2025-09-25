<template>
  <div id="app">
    <!-- Splash screen -->
    <div 
      id="splash" 
      :class="{ hidden: splashHidden }"
      class="splash-container"
    >
      <div 
        ref="logo"
        :class="{ showFull: showFullName }"
        class="logo"
        :style="{ '--full-name-length': fullNameLength + 'ch' }"
      >
        {{ logoText }}
      </div>
      <div class="loading-bar">
        <span></span>
      </div>
    </div>

    <!-- Conteúdo -->
    <div 
      :class="{ show: contentVisible }"
      class="content"
    >
      <h1>Bem-vindo 🚀</h1>
      <p>Esse é o conteúdo do site após o splash.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleFileSplashScreen',
  data() {
    return {
      logoText: 'ISM',
      fullName: 'Iago Sousa',
      showFullName: false,
      splashHidden: false,
      contentVisible: false
    }
  },
  computed: {
    fullNameLength() {
      return this.fullName.length;
    }
  },
  mounted() {
    this.initSplashSequence();
    this.updateAnimationSteps();
  },
  methods: {
    updateAnimationSteps() {
      // Calcula automaticamente o número de steps para a animação
      const steps = this.fullName.length;
      this.$refs.logo.style.setProperty('--full-name-steps', steps);
    },
    initSplashSequence() {
      // Troca ISM -> Nome completo rapidinho
      setTimeout(() => {
        this.logoText = this.fullName;
        this.showFullName = true;
      }, 600);

      // Esconde splash depois de ~3.5s
      setTimeout(() => {
        this.splashHidden = true;
        this.contentVisible = true;
      }, 3500);
    }
  }
}
</script>

<style>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}

/* Splash */
.splash-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.6s ease, visibility 0.6s ease;
  /* Garantir centralização perfeita */
  min-height: 100vh;
  min-height: 100dvh; /* Para dispositivos móveis */
}

/* Dark/Light automático */
@media (prefers-color-scheme: dark) {
  :root { 
    --bg: #0f172a; 
    --text: #f8fafc; 
    --bar-bg: #1e293b; 
    --bar-fill: #38bdf8; 
  }
}

@media (prefers-color-scheme: light) {
  :root { 
    --bg: #f8fafc; 
    --text: #0f172a; 
    --bar-bg: #e2e8f0; 
    --bar-fill: #0f172a; 
  }
}

/* Nome inicial (ISM) */
.logo {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 30px;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid var(--text);
  width: 0;
  animation:
    typingISM 0.6s steps(3) forwards,
    blink 0.7s step-end infinite alternate;
  /* Garantir que o texto fique centralizado */
  text-align: center;
  display: block;
}

/* ISM -> apagado -> Nome completo */
.logo.showFull {
  animation: erase 0.4s steps(3) forwards,
             typingFull 1.2s steps(var(--full-name-steps, 10)) 0.4s forwards,
             blink 0.7s step-end infinite alternate;
}

@keyframes typingISM {
  from { width: 0; }
  to { width: 3ch; }
}

@keyframes erase {
  from { width: 3ch; }
  to { width: 0ch; }
}

@keyframes typingFull {
  from { width: 0; }
  to { width: var(--full-name-length, 10ch); }
}

@keyframes blink {
  50% { border-color: transparent; }
}

/* Barra de loading */
.loading-bar {
  width: 220px;
  height: 6px;
  background: var(--bar-bg);
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  animation: fadeIn 0.5s 0.8s forwards; /* aparece logo depois do ISM */
}

.loading-bar span {
  display: block;
  height: 100%;
  width: 0%;
  background: var(--bar-fill);
  border-radius: 10px;
  animation: loading 1.5s 1s forwards; /* começa a carregar quase junto */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes loading {
  from { width: 0%; }
  to { width: 100%; }
}

/* Esconde o splash */
.splash-container.hidden {
  opacity: 0;
  visibility: hidden;
}

/* Conteúdo */
.content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.8s ease;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  color: var(--text);
  /* Garantir centralização perfeita */
  min-height: 100vh;
  min-height: 100dvh; /* Para dispositivos móveis */
}

.content.show {
  opacity: 1;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
}

/* Responsividade */
@media (max-width: 768px) {
  .logo {
    font-size: 2rem;
  }
  
  .content h1 {
    font-size: 2rem;
  }
  
  .content p {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  .loading-bar {
    width: 180px;
  }
}

/* Suporte para iOS Safari e outros navegadores */
@supports (-webkit-touch-callout: none) {
  .splash-container,
  .content {
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
  }
}

/* Garantir que não haja scroll em dispositivos móveis */
@media (max-height: 600px) {
  .logo {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  .content h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  .content p {
    font-size: 0.9rem;
  }
}
</style>
