<template>
  
  <div id="app">
    App
    <user-manager v-bind:users="users"></user-manager>
    <form-user @submitData="handleUserSubmit"></form-user>
  </div>
</template>

<script>

import UserManager from './pages/UserManager/UserManager.vue'
import FormUser from './pages/UserManager/Form.vue'

const endLine = '!!!'

export default {
  name: 'App',
  components: {
    UserManager,
    FormUser
      
  },
  data () {
    return {
      users: [
        { id: 0, name: 'Fabien', password: 'fabien'}
      ]
    }   
  },
  methods: {
    handleUserSubmit(form){
      this.users.push(form)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
