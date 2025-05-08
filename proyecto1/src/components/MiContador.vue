<template>
    <h1>El conteo es: {{conteo}}</h1>
    <button @click="sumar" >Más</button>
    <button @click="restar">Menos</button>
</template>
<script>
export default {
  name: 'SaludoJona',
  data(){
    return{
      conteo: 0
    }
  },
  methods:{
    sumar(){
      this.conteo++
    },
    restar(){
        this.conteo--
    }
  }
}
</script>

<style scoped>
</style>