<script>
export default {
  data() {
    return {
      instance: null,
    }
  },

  mounted() {
    this.instance = M.Dropdown.init(this.$refs.elButton)
    this.interval = setInterval(() => {}, 1000)
  },

  unmounted() {
    this.instance.destroy()
    clearInterval(this.interval)
  },
}
</script>

<template>
  <div>
    <ul id="dropdown2" class="dropdown-content">
      <li>
        <a href="#!">one<span class="badge">1</span></a>
      </li>
      <li>
        <a href="#!">two<span class="new badge">1</span></a>
      </li>
      <li><a href="#!">three</a></li>
    </ul>
    <a
      ref="elDropdown"
      class="btn dropdown-trigger"
      href="#!"
      data-target="dropdown2"
    >
      Dropdown
      <i class="material-icons right">arrow_drop_down</i>
    </a>
  </div>
</template>
