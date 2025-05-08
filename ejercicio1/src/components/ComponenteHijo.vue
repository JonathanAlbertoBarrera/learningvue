<template>
    <div :style="{backgroundColor: fondo, color:'white'}" :class="{'add-borde': borde}">
    <p :style="{fontSize: tamLetra + 'px'}">{{txt}}</p>
    <p v-if="txt===''">No has mandado nada</p>
    </div>
  
  
</template>

<script>

export default {
  name: 'ComponenteHijo',
  props: ['tamLetra','fondo','borde','txt']
  
}
</script>

<style >
.add-borde {
  border: 3px solid black;
  padding: 10px;
  border-radius: 8px;
}
</style>
