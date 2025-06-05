<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      instance: null,
      localChips: [...this.modelValue],
    }
  },

  watch: {
    modelValue: {
      deep: true,
      handler(newValue) {
        this.localChips = [...newValue]
        this.clearAllChips()
        newValue.forEach(v => {
          console.log(v)
          this.instance.addChip({ tag: v })
        })

        console.log(newValue)
        console.log(this.localChips)

        console.log(newValue)
        console.log(this.getRenderedChips())

        if (newValue.length !== this.getRenderedChips().length) {
          this.$emit('update:modelValue', [...this.getRenderedChips()])
        }
      },
    },
    localChips: {
      deep: true,
      handler(newValue, oldValue) {
        if (newValue === oldValue) this.$emit('update:modelValue', newValue)
      },
    },
  },

  methods: {
    getRenderedChips() {
      return this.instance.chipsData.map(chip => chip.tag)
    },
    clearAllChips() {
      const chipsCount = this.instance.chipsData.length
      for (let i = 0; i < chipsCount; i++) this.instance.deleteChip(0)
      this.updateLocalChips()
    },

    updateLocalChips() {
      this.localChips.splice(0, Infinity)
      this.localChips.push(...this.instance.chipsData.map(chip => chip.tag))
      // this.localChips = this.instance.chipsData.map(chip => chip.tag)
    },
  },

  mounted() {
    const options = {
      data: this.localChips.map(tag => ({ tag })),
      onChipAdd: () => this.updateLocalChips(),
      onChipDelete: () => this.updateLocalChips(),
    }
    this.instance = M.Chips.init(this.$refs.elChips, options)
    window.instance = this.instance
  },
}
</script>

<template>
  <div ref="elChips" class="chips">
    <input class="custom-class" />
  </div>
  <div>
    <button @click="instance.addChip({ tag: 'new chip' })">Force ADD</button>
  </div>
  <div><button @click="clearAllChips">CLEAR ALL</button></div>
</template>
