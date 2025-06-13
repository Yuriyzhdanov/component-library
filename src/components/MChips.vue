<script>
import compareArrays from '../../compareArrays.js'

export default {
  props: ['chips', 'selectedChip'],

  emits: ['chips-updated', 'selected-chip-updated'],

  data() {
    return {
      instance: null,
    }
  },

  watch: {
    chips: {
      deep: true,
      handler(newValue) {
        this.updateInstance()
        if (!compareArrays(newValue, this.getRenderedChips())) {
          this.chipsUpdated()
        }
      },
    },
  },

  methods: {
    getRenderedChips() {
      return this.instance.chipsData.map(chip => chip.tag)
    },

    chipsUpdated() {
      this.$emit('chips-updated', this.getRenderedChips())
    },

    updateInstance() {
      this.instance?.destroy()
      const uniq = [...new Set(this.chips)]
      const options = {
        data: [...uniq.map(tag => ({ tag }))],
        onChipAdd: () => this.chipsUpdated(),
        onChipDelete: () => this.chipsUpdated(),
      }
      this.instance = M.Chips.init(this.$refs.elChips, options)
      window.instance = this.instance
    },
  },

  mounted() {
    this.updateInstance()
    this.chipsUpdated()
  },
}
</script>

<template>
  <div ref="elChips" class="chips">
    <input class="custom-class" />
  </div>
</template>
