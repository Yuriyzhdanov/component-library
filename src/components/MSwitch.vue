<script setup>
import { ref } from 'vue'

const isChecked = ref(false)

function onToggle() {
  console.log('Switch state:', isChecked.value)
}
</script>

<template>
  <div class="switch">
    <label>
      Off
      <input v-model="isChecked" @change="onToggle" type="checkbox" />
      <span class="lever"></span>
      On
    </label>
  </div>
  <p>Статус: {{ isChecked ? 'Включено' : 'Выключено' }}</p>
</template>

<style scoped>
.switch {
  padding: 10px;
}
p {
  padding: 10px;
}
</style>
