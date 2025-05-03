<script>
export default {
  props: ['disabled'],
}
</script>

<template>
  <a class="waves-effect waves-light btn" :class="{ disabled: disabled }">
    button
  </a>
</template>

<style scoped>
a {
  margin: 5px;
}
</style>
