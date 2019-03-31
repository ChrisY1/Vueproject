// export default ()=>{alert(123)}
import loading from './components/loading.vue'
export default {

    install:(Vue)=>{
        Vue.component('loading',loading)
    }
}
