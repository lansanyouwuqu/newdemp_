<template>
  <div id="app">
  <router-link to='/home'>首页</router-link>
  <router-link to='/about'>关于</router-link>
  <router-view></router-view>
  <about/>
  <button @click='minus'>按钮-1</button>
  </div>
</template>

<script>
import about from './components/About.vue'
export default {
  name: 'App',
  components:{
  about
  },
  methods:{
    minus(){
    this.$store.commit('minus')
    }
  }
}
</script>

<style>

</style>
