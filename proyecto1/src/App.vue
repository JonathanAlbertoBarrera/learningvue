<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ContadorComponente />
    <MiContador />
  </div>
</template>

<script>
import ContadorComponente from './components/ContadorComponente.vue'
import MiContador from './components/MiContador'

export default {
  name: 'App',
  components: {
    ContadorComponente,
    MiContador
  }
}
</script>

