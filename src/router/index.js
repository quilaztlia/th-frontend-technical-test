import { createRouter, createWebHistory } from "vue-router"
import PeopleTable from '../views/PeopleTable'
import EditPerson from '../views/EditPerson'
import AddPerson from '../views/AddPerson'
import NotFound from '../views/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
            path: '/',
            name: PeopleTable,
            component: PeopleTable
        },
        {
            path: '/edit-person',
            name: EditPerson,
            component: EditPerson
        },
        {
            path: '/add-person',
            name: AddPerson,
            component: AddPerson  
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }      
    ]
})

export default router