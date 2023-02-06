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
            peopleCounter: 10,
            selectedPersonId: 0
        }
    },
    getters:{
        getPeopleCounter(state){
            return state.peopleCounter
        },
        getPersonId(state){
            return state.selectedPersonId
        },
        getPerson(state){
            return state.people.filter(p => p.id == state.selectedPersonId)
        },
    },

    mutations: {
        setIdPerson(state, payload){
            state.selectedPersonId = payload
        },

        addPerson(state, payload){
            state.people = this.$store.state.people.concat(payload)
        },

        updatePerson(state, updatedPerson){        
            state.people.filter(p => p.id == state.selectedPersonId)[0].firstname = updatedPerson.firstname
            state.people.filter(p => p.id == state.selectedPersonId)[0].lastname = updatedPerson.lastname
            state.people.filter(p => p.id == state.selectedPersonId)[0].email = updatedPerson.email
            state.people.filter(p => p.id == state.selectedPersonId)[0].address.city = updatedPerson.address.city
            state.people.filter(p => p.id == state.selectedPersonId)[0].address.country = updatedPerson.address.country            
        },

        deletePerson(state, idPerson){                        
            state.people = state.people.filter(p => p.id != idPerson)                   
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