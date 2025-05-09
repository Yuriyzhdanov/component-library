<script>
export default {
  props: ['listAvailable', 'selectedItem'],
}
</script>

<template>
  <div class="collection">
    <a
      v-for="item of listAvailable"
      :key="item"
      href="#!"
      class="collection-item waves-effect"
      :class="selectedItem === item && 'waves-light active'"
      @click="selectedItem = item"
    >
      {{ item }}
    </a>
  </div>
</template>
<!-- waves-light active -->
