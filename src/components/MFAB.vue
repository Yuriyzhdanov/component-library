<script>
export default {
  props: ['modelValue', 'isShow', 'icon'],

  emit: ['update:model-value'],

  data() {
    return {
      isInvisible: true,
    }
  },

  watch: {
    isShow(newValue) {
      this.isInvisible = !newValue
    },
  },

  mounted() {
    console.log('MFAB mounted')
    requestAnimationFrame(() => {
      this.isInvisible = false || !this.isShow
    })
  },
}
</script>

<template>
  <a
    class="btn-floating btn-large waves-effect waves-light scale-transition"
    :class="{ pulse: modelValue, 'scale-out': isInvisible }"
    @click="$emit('update:model-value', false)"
  >
    <i class="material-icons">{{ icon }}</i>
  </a>
</template>
