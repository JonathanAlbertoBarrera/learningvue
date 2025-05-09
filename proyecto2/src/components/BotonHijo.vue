<template>
  <button @click="$emit('saludo', 'Hola blo')">Saludar</button>
</template>

<script>
export default {
  name: 'BotonHijo'
}
</script>
