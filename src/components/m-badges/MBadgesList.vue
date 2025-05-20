<script>
import { onMounted } from 'vue'
import MBadgesItem from './MBadgesItem.vue'

export default {
  components: { MBadgesItem },

  props: ['items'],
  setup() {
    onMounted(() => {
      const elems = document.querySelectorAll('.collapsible')
      M.Collapsible.init(elems)
    })
  },
}
</script>

<template>
  <ul class="collapsible">
    <MBadgesItem v-for="item of items" :key="item.id" :item="item" />
  </ul>
</template>
