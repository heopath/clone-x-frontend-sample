import {defineStore} from 'pinia'

export const useFruitStore = defineStore('fruit', {
    state: () => ({
        fruitlist: [
            {id:1, name: "Apple"},
            {id:2, name: "Banana"},
            {id:3, name: "Orange"},
            {id:4, name: "Data"},
            {id:5, name: "Elderberry"},
          ]
        }),
    getters: {
        getFruitlistLength: (state) => state.fruitlist.length,
        getFruitByNameWithA: (state) => state.fruitlist.filter(fruit => fruit.name.includes('A'))
    },
    actions: {
        removeFirstItem(){
            this.fruitlist.shift()
        },
        removeLastItem() {
            this.fruitlist.pop()
        }
    }
})