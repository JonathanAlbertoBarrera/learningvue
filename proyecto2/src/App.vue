<template>
  <div>
    <h1>Bro hola</h1>
    <BotonHijo @saludo="mostrarSaludo" />
    <p v-if="mensaje">El hijo hizo clic ✅</p>

    <ComponentePadre />
  </div>
</template>

<script>
import BotonHijo from './components/BotonHijo.vue'
import ComponentePadre from './components/ComponentePadre.vue'

export default {
  components: { BotonHijo,ComponentePadre },
  data() {
    return {
      mensaje: false
    }
  },
  methods: {
    mostrarSaludo(mensaje) {
    console.log(mensaje) // 'Hola desde el hijo'
  }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
