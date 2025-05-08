<script>
export default {
  props: ['icon', 'modelValue', 'isShow'],

  emit: ['update:model-value'],

  mounted() {
    console.log('MFAB mounted')
  },
}
</script>

<template>
  <a
    class="btn-floating btn-large waves-effect waves-light scale-transition"
    :class="{ pulse: modelValue, 'scale-out': !isShow }"
    @click="$emit('update:model-value', false)"
  >
    <i class="material-icons">{{ icon }}</i>
  </a>
</template>
