<script>
export default {
  props: ['isDisabled', 'size', 'caption', 'icon', 'isIconRight'],

  data() {
    return {
      isInvisible: true,
    }
  },
  mounted() {
    console.log('MButtons mounted')
    requestAnimationFrame(() => {
      this.isInvisible = false
    })
  },
}
</script>

<template>
  <a
    class="waves-effect waves-light btn scale-transition"
    :class="{
      disabled: isDisabled,
      'btn-small': size === 'small',
      'btn-large': size === 'large',
      'scale-out': isInvisible,
    }"
  >
    <i class="material-icons" :class="isIconRight ? 'right' : 'left'">
      {{ icon }}
    </i>
    {{ caption }}
  </a>
</template>

<style scoped>
a {
  margin: 5px;
}
</style>
