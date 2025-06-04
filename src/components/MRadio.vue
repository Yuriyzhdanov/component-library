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
  <form>
    <p v-for="color of colors" :key="color">
      <label>
        <input
          name="group1"
          type="radio"
          :value="color"
          :checked="color === modelValue"
          @change="$emit('update:modelValue', color)"
        />
        <span>{{ color }}</span>
      </label>
    </p>
  </form>
</template>
