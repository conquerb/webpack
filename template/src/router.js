import Vue from "vue"
import Router from "vue-router"

import EventList from './components/EventList.vue'
import EventDetail from './components/EventDetail.vue'
import My from './components/My.vue'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'EventList',
        component: EventList
    }, {
        path: '/event/detail/:id',
        name: 'EventDetail',
        component: EventDetail
    }, {
        path: '/my',
        name: 'My',
        component: My
    }]

});