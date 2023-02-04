import { createRouter, createWebHistory } from "vue-router"
 import NotFound from '../views/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         {
            path: '/',
            name: 'HomePage',
            component: () => import('../views/HomePage')
        },  
        {
            path: '/table',
            name: 'PeopleTable',
            component: () =>  import('../views/PeopleTable'),
            children: [
                {
                    path: '/edit-person/:idPerson',
                    name: 'EditPerson',
                    component: () => import('../views/EditPerson'),
                    props: true
                }
            ]
        },         
        {
            path: '/add-person',
            name: 'AddPerson',
            component: () => import('../views/AddPerson')
        },
        // {
        //     path: '/edit-person/:idPerson',
        //     name: 'EditPerson',
        //     component: () => import('../views/EditPerson'),
        //     props: true
        // },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }      
    ]
})

export default router