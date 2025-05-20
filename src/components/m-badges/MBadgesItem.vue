<script>
export default {
  props: ['item'],
}
</script>

<template>
  <li>
    <div class="collapsible-header">
      <i class="material-icons">{{ item.icon }}</i>
      <div style="flex-grow: 1">
        <div>{{ item.title }}</div>
        <small style="opacity: 0.7">{{ item.subtitle }}</small>
      </div>
      <span v-if="item.badge" class="new badge blue">{{ item.badge }}</span>
    </div>

    <div class="collapsible-body">
      <div class="content-wrapper" style="display: flex; gap: 10px">
        <img
          :src="item.image + '?id=' + item.id"
          alt="img"
          style="width: 100px; height: 60px; object-fit: cover"
        />
        <div>
          <p>
            <strong>{{ item.type }}:</strong> {{ item.content }}
          </p>
          <div
            v-if="item.actions.length"
            class="actions"
            style="margin-top: 10px"
          >
            <a
              v-for="(action, idx) in item.actions"
              :key="idx"
              :href="action.link"
              class="btn-small blue lighten-1"
              style="margin-right: 5px"
            >
              {{ action.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
