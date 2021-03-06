// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/less/normalize.less'
import '@/assets/less/common.less'
import '@/assets/vendor/marked/hightlight.less'
import '@/assets/vendor/marked/content-style.less'

import './filter';
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
