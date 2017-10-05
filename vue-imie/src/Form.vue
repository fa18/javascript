<template>
    
  <div class="Form">
      <form action="" id="form">
          <div class="titre">
            <label>Titre de la snippet : </label>
            <input type="text" id="titre" placeholder="titre" class="form-control" v-model="titre" v-bind:value="snippetId">
          </div>

          <div class="description">
            <label>Description : </label>
            <input type="text" id="description" class="form-control" placeholder="description" v-model="description">
          </div>

          <div class="code">
            <label>Lignes de code : </label>
            <textarea name="" id="code" cols="30" rows="10" class="form-control" placeholder="code..." v-model="code"></textarea>
          </div>

          <button type="submit" @click.prevent.stop="handleSaveData" class="btn btn-primary">
            <i class="fa fa-check" aria-hidden="true"></i> Enregistrer
          </button>
      </form>
  </div>
</template>

<script>
import store from './SnippetStore.js'
export default {
    name: 'Form',
    props: ['snippetId'],
    data (){
        //alert(this.snippetId)
        return {
            id: this.snippetId,
            titre: '',
            description: '',
            code: '',
        }    
    },
    methods: {
        handleSaveData(e){
            
            e.stopPropagation();
            const snipet = [
                { titleName: this.titre, description: this.description, code: this.code}
            ]
           // localStorage.setItem("snipet",JSON.stringify(snipet));
            store.add(this.titre,this.description,this.code);
        }

    }    
}
</script>


<style>
.Form{
    margin-left: 5px;
    flex-grow: 2;
    min-width: 500px;
}
.Form #form{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: 250px; 
    width: auto;
}
.Form label{
    min-width: 200px;
    /*background-color: blue;*/
    margin-right: 10px;
    text-align: left;
}

.Form .description, .Form .titre{
    display: flex;
    flex-direction: row;
    min-height: 40px;
}

.Form .code{
    display: flex;
    flex-direction: row;
    margin: 2px; 
}

.Form textarea{ 
    resize:none;
}

@media(max-width: 800px) {
    .Form{
        min-width: 200px;
    }
    .Form .code{
        flex-direction: column;
    }    

}

</style>
