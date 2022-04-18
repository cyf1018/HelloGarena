// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible';
import './assets/css/base.less';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

Vue.use(VueLazyload, {
    // 预加载高度
    preLoad: 1.3,
    // 错误时显示的图片
    error: require('./../static/img/logo.png'),
    // 图片加载中显示的图片
    loading: require('./../static/img/logo.png'),
    // 尝试加载次数
    attempt: 2
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
