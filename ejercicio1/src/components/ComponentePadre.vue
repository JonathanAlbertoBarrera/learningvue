<template>
  <p>Soy componente padre</p>
  <input v-model="tamano" type=number placeholder="ingresa un tamaño de letra"/>
  <br>
  <input v-model="txtEnviar" placeholder="envia algo"/>
  <p v-if="tamano!=0">Tamaño a enviar: {{tamano}} </p>
  <select v-model="color">
    <option>Green</option>
    <option>Blue</option>
    <option>Red</option>
  </select>
  <p>Color a mandar: {{color}}</p>
  
  <input type=checkbox id="check" v-model="conBorde"/>
  <label for="check">Borde</label>
  <ComponenteHijo :tamLetra="tamano" :fondo="color" :borde="conBorde"  :txt="txtEnviar"/>
</template>

<script>
import ComponenteHijo from './ComponenteHijo.vue'

export default {
  name: 'App',
  components: {
    ComponenteHijo
  },
  data(){
    return{
        tamano:0,
        color: "yellow",
        conBorde: false,
        txtEnviar: ''
    }
  }
}
</script>

