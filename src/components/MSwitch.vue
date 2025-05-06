<script>
export default {
  props: ['modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <div class="switch">
    <label>
      <input
        :checked="modelValue"
        @change="$emit('update:model-value', $event.target.checked)"
        type="checkbox"
      />
      <span class="lever"></span>
    </label>
  </div>
</template>
