<script>
export default {
  props: ['modelValue', 'totalPages'],

  emits: ['update:model-value'],

  data() {
    return {
      left: 0,
    }
  },

  watch: {
    left(newValue) {
      this.$refs.elUl.scrollTo({ left: newValue, behavior: 'smooth' })
    },
  },
}
</script>

<template>
  <div class="container-pagination">
    <div class="disabled">
      <a href="#!" @click="left -= 100"
        ><i class="material-icons">chevron_left</i></a
      >
    </div>
    <ul ref="elUl" class="pagination">
      <li
        v-for="page of totalPages"
        class="waves-effect"
        :class="page === modelValue && 'waves-light teal lighten-2 active'"
      >
        <a href="#!" @click="$emit('update:model-value', page)">{{ page }}</a>
      </li>
    </ul>
    <div class="waves-effect">
      <a href="#!" @click="left += 100"
        ><i class="material-icons">chevron_right</i></a
      >
    </div>
  </div>
</template>
<!-- <li class="waves-light teal lighten-2 active">
  <a href="#!">1</a>
</li> -->

<style scoped>
.container-pagination {
  width: 210px;
  white-space: nowrap;
}
.container-pagination > div {
  display: inline-block;
  width: 30px;
  vertical-align: top;
}
.container-pagination > ul {
  margin: 0;
  vertical-align: top;
  overflow: hidden;
  display: inline-block;
  width: calc(100% - 30px * 2);
}
</style>
