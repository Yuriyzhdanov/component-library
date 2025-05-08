<script>
export default {
  emits: ['update:selected'],

  data() {
    return {
      selected: null,
      breadcrumbs: ['First', 'Second', 'Third'],
    }
  },

  methods: {
    selectBreadcrumb(breadcrumb) {
      this.selected = breadcrumb
      this.$emit('update:selected', breadcrumb)
    },
  },
}
</script>

<template>
  <nav>
    <div class="nav-wrapper">
      <div class="col s12">
        <a
          v-for="(crumb, i) in breadcrumbs"
          :key="i"
          href="#"
          class="breadcrumb"
          :class="{ 'active-breadcrumb': selected === crumb }"
          @click.prevent="selectBreadcrumb(crumb)"
        >
          {{ crumb }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-breadcrumb {
  font-weight: bold;
  text-decoration: underline;
  color: #fff;
}
</style>
