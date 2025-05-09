<template>
  <h1>Usuarios</h1>
  <li v-for="(user,index) in usuarios" :key="index">
    {{user.name}} - {{user.email}}
  </li>
  <button @click="hacerAlgo">Cambiar xd</button>
  <p>{{hora}}</p>
</template>

<script>
export default {
  name: 'UsuarioConReloj',
  data(){
    return{
        usuarios:[],
        hora:new Date().toLocaleTimeString(),
        intervalo:null
    }
  },
  methods:{
    hacerAlgo(){
        this.hora= new Date().toLocaleTimeString()
    }
  },
  created(){
    console.log("Se empieza a crear el componente");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
        json => {
        this.usuarios=json;
        ///console.log("usuarios:");
        //console.log(this.usuarios)
        })
    .catch(err => console.log('Solicitud fallida',err))
  },
  updated() {
    console.log('🔁 UPDATED: Algo cambió y el DOM se actualizó');
  },
  unmounted(){
    console.log("Se destruyo el componente bro");
  }
}
</script>
