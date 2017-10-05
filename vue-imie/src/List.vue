<template>
    <div class="List">
        <ul id="list-snippet">
           <li v-for="item in snippet" :key="item.id">
               <div class="snippet">
                    <div class="titre">{{ 'Snippet n°'+item.id+' : '+item.titre}}</div>  
                    <div class="description">{{ item.description }}</div>
                    <div class="code">{{item.code}}</div>
                    <div class="btns">
                        <button @click="handleEditRequest(item.id)" class="btn btn-primary">
                            <i class="fa fa-pencil" aria-hidden="true"></i> Modifier
                        </button>
                        <button button @click="handleDeleteRequest(item.id)" class="btn btn-danger">
                            <i class="fa fa-eraser" aria-hidden="true"></i> Effacer
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import store from './SnippetStore.js'
export default {
    name: 'List',
    data (){
        return {
            snippet: store.items
        }    
    },
    methods: {
        handleEditRequest(id){
            this.$emit('editRequest',id)
        },
        handleDeleteRequest(id){
            store.destroy(id)
        }

    }

}
</script>

<style>
.List .snippet{
    padding: 5px;
    margin-bottom: 10px;
    background-color: rgba(128, 128, 128, 0.34);
    border-radius: 10px;
}
.List .titre{
    font-size: large;
}
.List .description{
    font-style: oblique;
    color: grey;
}
.List .code{
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
}
.List .btns{
    display: flex;
    justify-content: space-around;
}
.List .btns button{
    width: auto;
    margin: 5px;
    flex-grow: 2;
}
</style>


