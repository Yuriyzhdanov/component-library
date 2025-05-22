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
      ><img src="https://picsum.photos/100/100"
    /></a>
    <a class="carousel-item" href="#two!"
      ><img src="https://picsum.photos/100/100"
    /></a>
    <a class="carousel-item" href="#three!"
      ><img src="https://picsum.photos/100/100"
    /></a>
    <a class="carousel-item" href="#four!"
      ><img src="https://picsum.photos/100/100"
    /></a>
    <a class="carousel-item" href="#five!"
      ><img src="https://picsum.photos/100/100"
    /></a>
  </div>
</template>
