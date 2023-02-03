import { createRouter, createWebHistory } from "vue-router"
import PeopleTable from '../views/PeopleTable'
import AddPerson from '../views/AddPerson'
import EditPerson from '../views/EditPerson'
import NotFound from '../views/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
            path: '/',
            name: 'PeopleTable',
            component: PeopleTable
        },       
        {
            path: '/add-person',
            name: 'AddPerson',
            component: () => AddPerson  
        },
        {
            path: '/edit-person/:idPerson',
            name: 'EditPerson',
            component: () => EditPerson  
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }      
    ]
})

export default router