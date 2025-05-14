import { createRouter, createWebHistory } from 'vue-router';
import InicioVista from '../views/InicioVista.vue'
import ContactoVista from '../views/ContactoVista.vue'

const routes=[
    {
        path: '/',
        name: 'Inicio',
        component:InicioVista
    },
    {
        path:'/contacto',
        name:'Contacto',
        component: ContactoVista
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;