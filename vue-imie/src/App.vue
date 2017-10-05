<template>
  
  <div id="app">
    <my-header></my-header>
    </br>    
    <!--<my-box @nameChange="handleChange"></my-box>-->
    <div id="body">
      <my-form :snippet-id="snippetId"></my-form>
      <my-list @editRequest="sendIdToForm"></my-list>
    </div> 
  </div>
</template>

<script>
import Box from './Box.vue'
import Header from './Header.vue'
import Form from './Form.vue'
import List from './List.vue'
import store from './SnippetStore.js'

const endLine = '!!!'

export default {
  name: 'App',
  components: {
    'my-box': Box,
    'my-header': Header,
    'my-form': Form,
    'my-list': List,
      
  },
  //name: 'app',
  data () {
    return {
      name: '',
      snippetId: '',
    }
  },
  methods: {
    handleChange(val){
      this.name = val
      console.log(val)
    },
    sendIdToForm(id){
        const snippet = store.items.find(function(el){
                return el.id === id
        })
        
        if(snippet){
          this.snippetId = snippet.id
        }
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

#body{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

@media(max-width: 600px) {
  #body{
    flex-direction: column;
  }
}
</style>
