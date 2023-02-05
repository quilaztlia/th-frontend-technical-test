import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import AddPerson from './components/AddPerson'
import EditPerson from './components/EditPerson'

const store = createStore({
    state() {
        return {
            counter: 0,
            people: []
        }
    }
})
const app = createApp(App)

app.use(store)
app.use(router)

app.component('AddPerson', AddPerson)
app.component('EditPerson', EditPerson)
app.mount('#app')


