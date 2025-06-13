<script>
export default {
  props: ['listAvailable', 'modelValue'],

  emits: ['chips-updated'],
}
</script>

<template>
  <div class="collection">
    <a
      v-for="item of listAvailable"
      :key="item"
      href="#!"
      class="collection-item waves-effect"
      :class="modelValue === item && 'waves-light active'"
      @click="$emit('chips-updated', item)"
    >
      {{ item }}
    </a>
  </div>
</template>
<!-- waves-light active -->
