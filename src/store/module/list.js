const state = {
    myid1:0,
    myid2:1,
    mycity:'',
    keyword:''
  }
  
const mutations = {
    setmyid1(state, payload) {
        state.myid1 = payload
    },
    setmyid2(state, payload) {
        state.myid2 = payload
    },
    setmycity(state, payload) {
      state.mycity = payload
    },
    setkeyword(state, payload) {
      state.keyword = payload
    },
}
  
const actions = {
  
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
}