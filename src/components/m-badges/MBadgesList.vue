<script>
import MBadgesItem from './MBadgesItem.vue'

export default {
  components: { MBadgesItem },

  props: ['items'],

  mounted() {
    M.Collapsible.init(this.$refs.elCollapsible)
  },
}
</script>

<template>
  <ul ref="elCollapsible" class="collapsible">
    <MBadgesItem v-for="item of items" :key="item.id" :item="item" />
  </ul>
</template>
