<template>
<div>
  <h3 class="text-center mt-3">Listado de frutas</h3>
  <ul class="list-group" v-if="fruits.length !== 0">
    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(fruit, index) of arrayOrdered" :key="fruit.id">
      {{ fruit.name }}
      <span class="btn btn-success"  @click="increase(index)" >{{fruit.quantity}}</span>
    </li>
  </ul>
  <div class="alert alert-danger" role="alert" v-else>
    <h4 class="alert-heading">¡Lo sentimos!</h4>
    <p>No es posible ver este contenido ya que no existen frutas en el arreglo.</p>
    <hr>
    <p class="mb-0">Agrega frutas al arreglo y podrás ver el listado.</p>
  </div>
  <button class="btn btn-block px-5 mt-3 btn-danger" @click="resetCounter">Reiniciar contadores</button>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "List",
  computed:{
    ...mapState(['fruits']),
    arrayOrdered(){
      return this.fruits.sort((a,b) => b.quantity - a.quantity)
    }
  },
  methods: {
    ...mapMutations(['increase', 'resetCounter'])
  }
}
</script>

<style scoped>

</style>