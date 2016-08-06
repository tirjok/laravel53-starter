
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
Vue.component('navbar', require('./components/Navbar.vue'));

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var App = Vue.extend({});
var router = new VueRouter();

router.map({
    '/': {
        component: require('./components/Home.vue')
    },
    '/about': {
        component: require('./components/About.vue')
    },
    '/contact': {
        component: require('./components/Contact.vue')
    }
});

router.start(App, '#app');