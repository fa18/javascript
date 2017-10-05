<template>
    <div class="Box">
        <h1>Box</h1>
        <input type="text" v-model="name" @input='handleInput'>
        bonjour {{name}}
    </div>
</template>

<script>
export default {
    name: 'Box',
    data (){
        return {
            name: ''
        }    
    },
    methods: {
        up(str){
            return str.toUpperCase()
        },
        handleInput(e){
            this.$emit('nameChange',this.up(name))
        } 
    }
}
</script>

<style>
.Box{
    border: 10px solid #35495e;
    
}
</style>

