<template>
  <button @click="cambiar">{{mostrar ? 'Ocultar' : 'Mostrar'}}</button>
  <UsuarioConReloj v-if="mostrar"/>
</template>

<script>
import UsuarioConReloj from './components/UsuarioConReloj.vue'
export default{
  name:'App',
  components:{UsuarioConReloj},
  data(){
    return{
      mostrar:false
    }
  },
  methods:{
    cambiar(){
      this.mostrar=!this.mostrar;
    }
  }
}
</script>

