<template>
  <TarjetaSlot>
    <template #cabecera>
    <h2>Encabezado personalizado</h2>
  </template>

  <p>Este es el cuerpo (slot por defecto)</p>

  <template #pie>
    <small>Pie de página</small>
  </template>
  </TarjetaSlot>

  <!-- MIS CARDS DE EJERCICIO-->
    <h1>Creacion de cards</h1>
    <input v-model="titulo" type="text" placeholder="Escribe el titulo de la card">
    <input v-model="descripcion" type="text" placeholder="Escribe la descripcion" />
    <input v-model="txtBtn" type="text" placeholder="Escribe el texto que tendra el boton" />

    <button @click="mandarDatos">Crear</button>

    <CardReu v-for="(tarjeta,index) in cards" :key="index" :txtMandar="tarjeta.txtBtn">
    <template #titulo>
      <h1>{{tarjeta.titulo}}</h1>
    </template>
    <template #contenido>
      <p>{{tarjeta.descripcion}}</p>
    </template>
    </CardReu>

</template>

<script>
import TarjetaSlot from './TarjetaSlot.vue'
import CardReu from './CardReu.vue'

export default {
    name: 'ComponentePadre',
  components: { TarjetaSlot,CardReu },
  data(){
    return{
        titulo:'',
        descripcion:'',
        txtBtn:'',
        cards:[]
    }
  },
  methods:{
    mandarDatos(){
      if((this.titulo!='') && (this.descripcion!='') && (this.txtBtn!='')){
        this.cards.push({
          titulo: this.titulo,
          descripcion: this.descripcion,
          txtBtn: this.txtBtn
        })
        this.titulo='',
        this.descripcion='',
        this.txtBtn=''
      }else{
        alert("Llena los datos blo");
      }
    }
  }
}
</script>
