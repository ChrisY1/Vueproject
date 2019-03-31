import * as types from './types';
// import state from "./state";
// console.log(state.bheader)
export default{
    [types.VIEW_HEADER]:(state,payload)=>{state.bhead=payload},
    [types.VIEW_FOOTER]:(state,payload)=>state.bfoot=payload,
    [types.VIEW_LOADING]:(state,payload)=>state.bloading=payload,

    [types.UPDATE_CONTENT]:(state,payload)=>state.content=payload,
    [types.UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,
    [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,
    [types.CHECK_USER]:(state,payload)=>state.user.auth=payload,

}


// let mutations = {
//     increment:(state,payload)=>{
//         //state仓库，payload actions携带的负载

//         //负载突变
//         state.count += payload
//     }
// }
// export default mutations;