import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'

// createApp(App).mount('#app')
// Vuex libraay사용하도록 추가
const app = createApp(App)  
app.use(store)  
app.mount('#app')
