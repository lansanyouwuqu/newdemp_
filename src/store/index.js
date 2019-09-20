import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建对象
const store=new Vuex.Store({
  state:{
    count:100
  },
  mutations:{
    minus(state){
       state.count--
    }
  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
})
//导出store独享
export default store
