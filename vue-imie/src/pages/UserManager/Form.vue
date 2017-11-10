<template>
    
  <div class="Form">
      <form action="" id="form" @submit="handleSubmit">
          <div class="id">

            <input type="hidden" id="id" placeholder="id" class="form-control" v-model="form.id">
          </div>

          <div class="name">
            <label>Nom : </label>
            <input type="text" id="name" placeholder="name" class="form-control" v-model="form.name">
          </div>

          <div class="password">
            <label>Mot de passe : </label>
            <input type="password" id="password" class="form-control" placeholder="password" v-model="form.password">
          </div>

          <button type="submit" class="btn btn-primary" @click.prevent.stop="handleSubmit">
            <i class="fa fa-check" aria-hidden="true"></i> Enregistrer
          </button>
      </form>
  </div>
</template>

<script>
export default {
  name: "Form",
    data () {
    return {
      form: {
        id: '',  
        name: '',
        password: ''
      }
    }   
  },
  methods: {
      handleSubmit(e){
          this.$emit('submitData',this.form)
      }
  }
}
</script>



<style>
.Form{
    margin-left: 5px;

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

.Form .password, .Form .name{
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
