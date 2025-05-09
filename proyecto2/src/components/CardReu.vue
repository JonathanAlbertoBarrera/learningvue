<template>
  <div class="tarjeta">
    <h1><slot name="titulo"></slot></h1>
    <main><slot name="contenido"></slot></main>
    <button>{{txtMandar}}</button>
  </div>
</template>

<script>
export default {
  name: 'CardReu',
  props: ['txtMandar']
}
</script>

<style scoped>
.tarjeta {
  border: 2px solid gray;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
</style>