import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from '../views/HelloWorld'
import EditPerson from '../views/EditPerson'
import AddPerson from '../views/AddPerson'
//import HomePage from '../views/HomePage'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/edit-person',
            component: EditPerson
        },
        {
            path: '/add-person',
            component: AddPerson  
        }      
    ]
})

export default router