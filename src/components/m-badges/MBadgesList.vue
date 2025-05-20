<script>
import { onMounted } from 'vue'
import MBadgesItem from './MBadgesItem.vue'

export default {
  components: { MBadgesItem },

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
    <MBadgesItem />
  </ul>
</template>
