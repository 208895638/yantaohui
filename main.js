import Vue from 'vue'
import App from './App'
import icon from "@/components/uni-icon.vue"
import headers from "@/components/header.vue" // 公共头部
import block from "@/components/block.vue" // 公共占位
Vue.config.productionTip = false
Vue.component('v-icon', icon);
Vue.component('headers', headers);
Vue.component('block', block);
App.mpType = 'app' 

const app = new Vue({
    ...App
})
app.$mount()
