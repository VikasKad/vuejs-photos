import {
    createWebHistory,
    createRouter
} from 'vue-router';
import PhotoApp from './../components/PhotoApp';
import PhotoView from './../components/PhotoView';

export const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path:'/',
        component:PhotoApp,
         children:[{
             path:'albums/:id',
             component:PhotoView
         }]
    }]
})