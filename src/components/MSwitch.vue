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
  <p>Вам есть 18?: {{ isChecked ? 'Да' : 'Нет' }}</p>
</template>

<style scoped>
.switch {
  padding: 10px;
}
p {
  padding: 10px;
}
</style>
