<template>
  <div class="tarjeta">
    <header><slot name="cabecera"></slot></header>
    <main><slot></slot></main> <!-- slot default -->
    <footer><slot name="pie"></slot></footer>
  </div>
</template>

<script>
export default {
  name: 'TarjetaSlot'
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
