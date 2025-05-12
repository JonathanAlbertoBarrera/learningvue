

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  
  <n-button strong secondary round type="success" @click="saludar">¡Haz clic!</n-button>
  <n-button type="primary" loading bordered>Hola</n-button>
  <n-calendar
    v-model:value="value"
    #="{ year, month, date }"
    :is-date-disabled="isDateDisabled"
    @update:value="handleUpdateValue"
  >
    {{ year }}-{{ month }}-{{ date }}
  </n-calendar>
  <n-button type="error" loading>
      Error
    </n-button>
    <n-date-picker v-model:value="range" type="daterange" clearable />
  <pre>{{ JSON.stringify(range) }}</pre>
</template>

<script setup>
import { NButton } from 'naive-ui' // Importación a demanda
import {NCalendar} from 'naive-ui'
const saludar = () => {
  window.alert('¡Hola desde Naive UI!')
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
