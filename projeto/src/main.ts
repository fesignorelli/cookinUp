import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CardCategoria from './components/CardCategoria.vue'

const app = createApp(App);
app.component('CardCategoria', CardCategoria);
app.mount('#app');