<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      colors: ['Red', 'Yellow', 'Green', 'Brown'],
    }
  },
}
</script>
<template>
  <form action="#">
    <p v-for="color of colors" :key="color">
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
    </p>
  </form>
</template>
