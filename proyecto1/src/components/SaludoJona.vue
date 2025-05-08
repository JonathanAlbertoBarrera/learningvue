<template>
  <div>
    <h1>HolA {{nombre}} </h1>
  </div>
</template>

<script>
export default {
  name: 'SaludoJona',
  props: ['nombre'],
}
</script>

<style scoped>
h2 {
  color: orange;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
