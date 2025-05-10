<script>
export default {
  props: ['isDisabled', 'size', 'caption', 'icon', 'isIconRight'],

  data() {
    return {
      isInvisible: true,
    }
  },
  mounted() {
    console.log('MButtons mounted')
    setTimeout(() => {
      this.isInvisible = false
    }, 1000)
  },
}
</script>

<template>
  <transition name="fade">
    <a
      v-show="!isInvisible"
      class="waves-effect waves-light btn"
      :class="{
        disabled: isDisabled,
        'btn-small': size === 'small',
        'btn-large': size === 'large',
      }"
    >
      <i class="material-icons" :class="isIconRight ? 'right' : 'left'">
        {{ icon }}
      </i>
      {{ caption }}
    </a>
  </transition>
</template>

<style scoped>
a {
  margin: 5px;
}
.waves-effect {
  transition: all 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
