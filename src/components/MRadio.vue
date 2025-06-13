<script>
export default {
  props: ['modelValue'],

  emits: ['chips-updated'],

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
          @change="$emit('chips-updated', color)"
        />
        <span>{{ color }}</span>
      </label>
    </p>
  </form>
</template>
