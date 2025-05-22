<script>
export default {
  mounted() {
    const options = {
      duration: 200,
      dist: -100,
      shift: 0,
      padding: 0,
      numVisible: 5,
      indicators: false,
      noWrap: false,
      onCycleTo: null,
    }
    M.Carousel.init(this.$refs.elCarousel, options)
  },
}
</script>

<template>
  <div ref="elCarousel" class="carousel">
    <a class="carousel-item" href="#one!"
      ><img src="https://picsum.photos/800/1200?1"
    /></a>
    <a class="carousel-item" href="#two!"
      ><img src="https://picsum.photos/800/1200?2"
    /></a>
    <a class="carousel-item" href="#three!"
      ><img src="https://picsum.photos/800/1200?3"
    /></a>
    <a class="carousel-item" href="#four!"
      ><img src="https://picsum.photos/800/1200?4"
    /></a>
    <a class="carousel-item" href="#five!"
      ><img src="https://picsum.photos/800/1200?5"
    /></a>
  </div>
</template>

<style scoped>
.carousel {
  border: 1px solid black;
}
</style>
