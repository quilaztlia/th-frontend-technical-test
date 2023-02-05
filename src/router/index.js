import { createRouter, createWebHistory } from "vue-router"
 import NotFound from '../views/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
            path: '/',
            name: 'HomePage',
            component: () => import('../views/HomePage'),
            children: [
                {
                    path: '/table',
                    name: 'PeopleTable',
                    component: () =>  import('../components/PeopleTable'),
                   
                },
                //  reload Page! so we LOST table data
                 {
                     path: '/edit-person/:idPerson',
                     name: 'EditPerson',
                     component: () => import('../components/EditPerson'),
                     props: true
                 },
                 {
                     path: '/add-person',
                     name: 'AddPerson',
                     component: () => import('../components/AddPerson')
                 },
             ]
        },                   
        // {
        //     path: '/edit-person/:idPerson',
        //     name: 'EditPerson',
        //     component: () => import('../components/EditPerson'),
        //     props: true
        // },
        // {
        //     path: '/add-person',
        //     name: 'AddPerson',
        //     component: () => import('../components/AddPerson')
        // },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }      
    ]
})

export default router