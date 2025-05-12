<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <span class="close" @click="$emit('cerrar')">&times;</span>
      <h2>
        <slot name="titulo">Formulario</slot>
      </h2>
      <div>
        <slot name="contenido"></slot>
      </div>
      <button @click="$emit('guardar')">{{ txtBoton }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCliente',
  props: {
    visible: Boolean,
    txtBoton: {
      type: String,
      default: "Guardar"
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}
.close {
  float: right;
  cursor: pointer;
  font-size: 20px;
}
</style>

