import { createApp } from 'vue'
import { abilitiesPlugin } from '@casl/vue';
import { Ability } from '@casl/ability';
import App from './App.vue'
import router from './router'

import './assets/main.css'
const ability = new Ability();
const app = createApp(App)

app.use(router)
app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true
})

app.mount('#app')
