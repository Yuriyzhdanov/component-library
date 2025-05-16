<script>
import MAvatarItem from './MAvatarItem.vue'

export default {
  components: { MAvatarItem },

  props: ['modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <ul class="collection">
    <MAvatarItem
      v-for="mvItem of modelValue"
      :key="mvItem.id"
      :item="mvItem"
      @item-updated="
        $emit(
          'update:model-value',
          modelValue.map(mv => (mv.id === $event.id ? $event : mv))
        )
      "
    ></MAvatarItem>
  </ul>
</template>
