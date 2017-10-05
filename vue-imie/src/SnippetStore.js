let counter = 1;

class SnippetStore{
    constructor(){
        this.items = [
            { id: counter++, titre:'Déclarer une variable',description:'nouvelle pratique',code:'let x'},
        ];
        console.log(this)
    }

    add(titre,description,code){
        this.items.push({
            id: counter++,
            titre: titre,
            description: description,
            code: code
        })

    }
    update(id,titre){
        const item = this.items.find(function(el){
            return el.id === id
        })

        item.titre = titre
    }
    destroy(id){
        const item = this.find(id)
    }
}

export default new SnippetStore()