import * as types from './types'
// let actions = {
//     jia:({commit,state},payload)=>{
//         //处理业务（同步，异步，不修改数据）
//         //commit('类型','负载')
//         //commit({type:类型，payload:负载})
//         commit('increment',payload)
//     }
// }
// export default actions;
export default{
    [types.VIEW_HEADER]:({state,commit},payload)=>commit(types.VIEW_HEADER,payload),
    [types.VIEW_FOOTER]:({state,commit},payload)=>commit(types.VIEW_FOOTER,payload),
    [types.VIEW_LOADING]:({state,commit},payload)=>commit(types.VIEW_LOADING,payload),

    [types.UPDATE_CONTENT]:({state,commit},payload)=>commit(types.UPDATE_CONTENT,payload),
    [types.UPDATE_BANNER]:({state,commit},payload)=>commit(types.UPDATE_BANNER,payload),
    [types.UPDATE_FOLLOW]:({state,commit},payload)=>commit(types.UPDATE_FOLLOW,payload),
    [types.CHECK_USER]:({state,commit},payload)=>commit(types.CHECK_USER,payload),
    // [types.VIEW_HEADER]:({state,commit},payload)=>{},



}