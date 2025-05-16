<script>
export default {
  props: ['item'],

  emits: ['item-updated'],

  data() {
    return {
      localItem: { ...this.item },
    }
  },

  watch: {
    item: {
      deep: true,
      handler(newValue) {
        this.localItem = newValue
      },
    },

    localItem: {
      deep: true,
      handler(newValue, oldValue) {
        if (newValue === oldValue) {
          this.$emit('item-updated', { ...this.localItem })
        }
      },
    },
  },
}
</script>

<template>
  <li class="collection-item avatar">
    <div class="circle">
      <img :src="localItem.img" alt="" />
    </div>
    <span class="title">{{ localItem.firstName }}</span>
    <p>
      {{ localItem.secondName }} <br />
      {{ localItem.jobTitle }}
    </p>
    <a
      href="#!"
      class="secondary-content"
      @click="localItem.isFavorite = !localItem.isFavorite"
      ><i class="material-icons"
        >{{ localItem.isFavorite ? 'grade' : 'star_border' }}
      </i></a
    >
  </li>
</template>

<style scoped>
img {
  height: 100%;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
}
</style>
