import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
]

function smoothScrollToTop(duration = 1000) {
  const start = window.scrollY
  const startTime = performance.now()

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2
    window.scrollTo(0, start * (1 - ease))
    if (elapsed < duration) {
      requestAnimationFrame(scrollStep)
    }
  }
  requestAnimationFrame(scrollStep)
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          smoothScrollToTop(1000)
          resolve({ left: 0, top: 0 })
        }, 100)
      })
    }
  }
});

export default router