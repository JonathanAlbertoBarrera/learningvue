<template>
  <div>
    <h1>CRUD de clientes</h1>

    <p v-if="error" class="alert alert-danger">{{ error }}</p>

    <button class="btn btn-success" @click="abrirModalCrear">Registrar</button>

    <ModalCliente :visible="modalVisible" :txtBoton="cliente.id ? 'Actualizar' : 'Crear'" @cerrar="cerrarModal" @guardar="guardarCliente">
      <template #titulo>
        {{ cliente.id ? 'Editar cliente' : 'Nuevo cliente' }}
      </template>

      <template #contenido>
        <input v-model="cliente.nombre" placeholder="Nombre" class="form-control my-1" />
        <input v-model="cliente.apellidos" placeholder="Apellidos" class="form-control my-1" />
        <input v-model="cliente.curp" placeholder="CURP" class="form-control my-1" />
        <input type="date" v-model="cliente.fechaNacimiento" class="form-control my-1" />
        <div v-if="Object.keys(errores).length">
          <p v-for="(msg, campo) in errores" :key="campo" class="text-danger">{{ msg }}</p>
        </div>
      </template>
    </ModalCliente>

    <table class="table" v-if="!error && clientes.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Curp</th>
          <th>Fecha de nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.id }}</td>
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellidos }}</td>
          <td>{{ cliente.curp }}</td>
          <td>{{ cliente.fechaNacimiento }}</td>
          <td>
            <button class="btn btn-primary" @click="abrirModalEditar(cliente)">Actualizar</button>
            <button class="btn btn-danger" @click="confirmarEliminar(cliente.id)" data-bs-toggle="modal" data-bs-target="#modalConfirmacion">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

 <!-- Modal Bootstrap -->
<div class="modal fade" id="modalConfirmacion" tabindex="-1" aria-labelledby="modalConfirmacionLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title" id="modalConfirmacionLabel">¿Estás seguro?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
    ¿Quieres confirmar que se borrará a este bro?
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cancelar </button>
       <button type="button" class="btn btn-danger" @click="eliminarCliente" data-bs-dismiss="modal"> Eliminar</button>

      </div>
    </div>
  </div>
</div>


</template>

<script>
import ModalCliente from "./ModalCliente.vue";
import { obtenerClientes, crearCliente, actualizarCliente, eliminarCliente } from "../api/clienteApi";

export default {
  name: "ClienteLista",
  components: { ModalCliente },
  data() {
    return {
      clientes: [],
      modalVisible: false,
      cliente: {
        nombre: "",
        apellidos: "",
        curp: "",
        fechaNacimiento: ""
      },
      error: null,
      errores: {},
      idAEliminar: null
    };
  },
  mounted() {
    this.cargarClientes();
  },
  methods: {
    async cargarClientes() {
      try {
        this.clientes = await obtenerClientes();
      } catch {
        this.error = "Ocurrió un error al cargar los clientes. Intenta más tarde.";
      }
    },
    abrirModalCrear() {
      this.cliente = {
        nombre: "",
        apellidos: "",
        curp: "",
        fechaNacimiento: ""
      };
      this.errores = {};
      this.modalVisible = true;
    },
    abrirModalEditar(cliente) {
      this.cliente = { ...cliente }; // Clonamos para evitar edición directa
      this.errores = {};
      this.modalVisible = true;
    },
    cerrarModal() {
      this.modalVisible = false;
    },
    async guardarCliente() {
      this.errores = {};
      try {
        if (this.cliente.id) {
          await actualizarCliente(this.cliente.id, this.cliente);
        } else {
          await crearCliente(this.cliente);
        }
        this.modalVisible = false;
        this.cargarClientes();
      } catch (error) {
        if (error.response) {
          this.errores = await error.response.json();
        } else {
          console.error("Error desconocido:", error);
        }
      }
    },
    confirmarEliminar(id) {
    this.idAEliminar = id;
    },
    async eliminarCliente() {
    try {
    await eliminarCliente(this.idAEliminar);
    this.cargarClientes();
    } catch (error) {
    alert("Error al eliminar el cliente");
    console.error(error);
    }
    }

  }
};
</script>
