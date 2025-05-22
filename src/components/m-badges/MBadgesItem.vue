<script>
export default {
  props: ['item'],
}
</script>

<template>
  <li>
    <div class="collapsible-header">
      <i class="material-icons">{{ item.icon }}</i>
      <div class="header-text">
        <div>{{ item.title }}</div>
        <small class="subtitle">{{ item.subtitle }}</small>
      </div>
      <span v-if="item.badge" class="new badge blue">{{ item.badge }}</span>
    </div>

    <div class="collapsible-body">
      <div class="content-wrapper">
        <img
          :src="item.image + '?id=' + item.id"
          alt="img"
          class="item-image"
        />
        <div>
          <p>
            <strong>{{ item.type }}:</strong> {{ item.content }}
          </p>
          <div v-if="item.actions.length" class="actions">
            <a
              v-for="(action, idx) in item.actions"
              :key="idx"
              :href="action.link"
              class="btn-small blue lighten-1 action-button"
            >
              {{ action.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
.header-text {
  flex-grow: 1;
}

.subtitle {
  opacity: 0.7;
}

.content-wrapper {
  display: flex;
  gap: 10px;
}

.item-image {
  width: 100px;
  height: 60px;
  object-fit: cover;
}

.actions {
  margin-top: 10px;
}

.action-button {
  margin-right: 5px;
}
</style>
