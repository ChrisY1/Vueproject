import Vue from 'vue';
import Vuex from 'vuex';
//vuex 是个对象（store类，mapActions，mapGetters）
Vue.use(Vuex)

//vuex实例store
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

const store = new Vuex.Store({
    //actions，mutations,getters,states单例对象
    actions,mutations,getters,state
});

export default store;
