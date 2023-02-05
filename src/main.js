import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import AddPerson from './components/AddPerson'
import EditPerson from './components/EditPerson'
import PeopleTable from './components/PeopleTable'

const store = createStore({
    state() {
        return {            
            people: [],
            peopleCounter: 10
        }
    }
})

const app = createApp(App)

app.use(store)
app.use(router)

app.component('AddPerson', AddPerson)
app.component('EditPerson', EditPerson)
app.component('PeopleTable', PeopleTable)

app.mount('#app')