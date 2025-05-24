<script>
// M V VM
// VIEWMODEL
// МОДЕЛЬ ПРЕДСТАВЛЕНИЯ

const options = {
  props: ['list'],

  data() {
    return {
      instance: null,
    }
  },

  methods: {
    handle() {
      this.instance.addChip({ tag: 'new chip' })
    },
  },

  mounted() {
    const options = {
      data: this.list.map(item => ({ tag: item })),
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
