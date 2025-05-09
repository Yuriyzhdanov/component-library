<script>
export default {
  props: ['isDisabled', 'size', 'caption', 'icon', 'isIconRight'],
}
</script>

<template>
  <a
    class="waves-effect waves-light btn"
    :class="{
      disabled: isDisabled,
      'btn-small': size === 'small',
      'btn-large': size === 'large',
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
