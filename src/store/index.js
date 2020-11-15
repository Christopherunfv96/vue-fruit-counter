import { createStore } from 'vuex'

export default createStore({
  state: {
    fruits: [
      {id: 14, name: 'Manzana', quantity: 0},
      {id: 27, name: 'Pera', quantity: 0},
      {id: 44, name: 'Plátano', quantity: 0},
      {id: 71, name: 'Mandarina', quantity: 0}
    ]
  },
  mutations: {
    increase(state, index){
      state.fruits[index].quantity ++
    },
    resetCounter(state){
      state.fruits.forEach(element => element.quantity = 0 )
    }
  },
  actions: {
  },
  modules: {
  }
})
