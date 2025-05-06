<script>
export default {
  props: ['isDisabled'],
}
</script>

<template>
  <a class="waves-effect waves-light btn" :class="{ disabled: isDisabled }">
    button
  </a>
</template>

<style scoped>
a {
  margin: 5px;
}
</style>
