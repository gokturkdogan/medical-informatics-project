import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Health from '../views/Health.vue'
import Training from '../views/Training.vue'
import TrainingList from '../views/Training-List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/health',
      name: 'health',
      component: Health
    },
    {
      path: '/training',
      name: 'training',
      component: Training
    },
    {
      path: '/training-list',
      name: 'traininglist',
      component: TrainingList
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})

export default router