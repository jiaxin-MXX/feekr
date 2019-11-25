import Vue from 'vue'
import Vuex from 'vuex'
import list from './module/list'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:false,
    show:false,
    msg1:'分类',
    msg2:'目的地',
    msg3:'排序',
    onoff3:false,
    bottom:true,
    bottom2:false
  },
  mutations: {
    settype(state, payload) {
      state.type = payload
    },
    setshow(state, payload){
      state.show = payload
    },
    setmsg1(state, payload) {
      state.msg1 = payload
    },
    setmsg2(state, payload) {
      state.msg2 = payload
    },
    setmsg3(state, payload) {
      state.msg3 = payload
    },
    setonoff3(state, payload) {
      state.onoff3 = payload
    },
    setbottom(state, payload) {
      state.bottom = payload
    },
    setbottom2(state, payload) {
      state.bottom2 = payload
    },
  },
  actions: {
  },
  modules: {
    list
  }
})
