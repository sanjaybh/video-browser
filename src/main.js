import Vue from 'vue';
import App from './App';

/*
new Vue({
    render: function(createElement) {
        return createElement(App);
    },
    el: '#app',
    //different ways of rendering app
    //render: h => h(App)    
})
*/

new Vue({
    render: h => h(App)    
}).$mount('#app')