<template>
  <div>
    <h1>Contador {{contador}} </h1>
    <button @click="aumentar">Aumentar</button>
    <button @click="disminuir">Disminuir</button>
    <p v-if="contador===0">No llevas nada bro</p>
    <p v-else> Llevas {{contador}}</p>

    <input v-model="nombre" placeholder="Escribe tu nombre aquí">
    <p v-if="nombre">Hola, {{ nombre }} 👋</p>
    <SaludoJona :nombre="nombre" />

    <p>------------</p>
    <input v-model="nueva"  type=text required placeholder="Agrega una tarea">
    <button @click="add">Agregar</button>
        <input v-model="actualizado"  type=text required placeholder="Actualiza una tarea">
    <button @click="cambiar(this.actualizado)">Actualizar</button>
    <ul>
    <li v-for="(tarea,index) in tareas" :key="index">
    {{index+1}}.    {{tarea}}
    <button @click="elim(index)">Eliminar</button>
    <button @click="set(tarea,index)">Cambiar</button>
    </li>
    </ul>

     <div>
    <div v-for="(color, index) in colores" :key="index">
      <div :style="{ backgroundColor: color, width: '100px', height: '100px', margin: '10px' }">
        {{ color }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import SaludoJona from './SaludoJona.vue'
export default {
  name: 'ContadorComponente',
  components:{
      SaludoJona
  },
  data(){
    return{
        contador:0,
        nombre: '',
        name: 'rocja kike',
        tareas: ['siii','nooo','XD'],
        nueva:'',
        actualizado: '',
        indexActualizar:0,
        colores: ['red', 'green', 'blue', 'purple']
    }
  },
  methods:{
    aumentar(){
        this.contador+=1
    },
    disminuir(){
        this.contador-=1
    },
    add(){
        if(this.nueva.trim()!=''){
            this.tareas.push(this.nueva);
            this.nueva=''
        }
    },
    elim(index){
        this.tareas.splice(index, 1)
    },
    set(tarea,index){
        this.actualizado = tarea;
        this.indexActualizar=index
    },
    cambiar(texto){
        this.tareas.splice(this.indexActualizar, 1, texto);
        this.set('',this.indexActualizar)
        this.indexActualizar=0
    }
   
  }
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
input {
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
