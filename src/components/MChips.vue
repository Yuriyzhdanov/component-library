<script>
// M V VM
// VIEWMODEL
// МОДЕЛЬ ПРЕДСТАВЛЕНИЯ

const options = {
  props: ['modelValue'],

  emits: ['update:modelValue'],
  data() {
    return {
      instance: null,
      localData: {},
    }
  },

  methods: {
    handle() {
      this.instance.addChip({ tag: 'new chip' })
      this.$emit('update:modelValue', [...this.modelValue, tagText])
    },
    syncChipsFromInstance() {
      const chips = this.instance.chipsData.map(chip => chip.tag)
      this.$emit('update:modelValue', chips)
    },
  },

  mounted() {
    const options = {
      data: this.modelValue.map(tag => ({ tag })),
      onChipAdd: () => this.syncChipsFromInstance(),
      onChipDelete: () => this.syncChipsFromInstance(),
    }

    this.instance = M.Chips.init(this.$refs.elChips, options)
    window.instance = this.instance
  },
}

export default options
</script>

<template>
  <div ref="elChips" class="chips">
    <input class="custom-class" />
  </div>
  <div>
    <button @click="instance.addChip({ tag: 'new chip' })">Force ADD</button>
  </div>
</template>
