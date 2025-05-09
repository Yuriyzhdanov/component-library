<script>
export default {
  data() {
    return { counter: 0 }
  },

  methods: {
    incrementCounter() {
      this.counter++
    },
    decrementCounter() {
      this.counter--
    },
    multiCounter() {
      this.counter = Math.min(this.counter * this.counter, 100000)
    },
  },
}
</script>
<template>
  <section>
    <article>
      {{ counter }}
      <a @click="incrementCounter" class="waves-effect waves-light btn-large"
        >Button</a
      >
      <a @click="decrementCounter" class="waves-effect waves-light btn-large"
        ><i class="material-icons left">cloud</i>button</a
      >
      <a @click="multiCounter" class="waves-effect waves-light btn-large"
        ><i class="material-icons right">cloud</i>button</a
      >
    </article>
    <article>
      <a class="waves-effect waves-light btn-small">Button</a>
      <a class="waves-effect waves-light btn-small"
        ><i class="material-icons left">cloud</i>button</a
      >
      <a class="waves-effect waves-light btn-small"
        ><i class="material-icons right">cloud</i>button</a
      >
    </article>
  </section>
</template>

<style scoped>
a {
  margin: 5px;
}
</style>
