<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="contador++">Aumentar</button>
  </div>
</template>

<script>
export default {
  name: 'CicloHijo',
  data() {
    return {
      contador: 0
    }
  },
  created() {
    console.log('✅ CREATION: El componente fue creado');
  },
  mounted() {
    console.log('✅ MOUNTED: El componente ya está en el DOM');
  },
  updated() {
    console.log('🔁 UPDATED: Algo cambió y el DOM se actualizó');
  },
  unmounted() {
    console.log('🗑️ UNMOUNTED: El componente fue destruido');
  }
}
</script>
