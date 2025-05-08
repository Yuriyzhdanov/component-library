<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'

export default {
  components: { MButton, MSwitch, MBreadcrumbs },

  data() {
    return {
      users: [],
      isAgeConfirmed: false,
    }
  },

  computed: {
    isButtonDisabled() {
      return this.users.length >= 5
    },
  },
}
</script>

<template>
  <MBreadcrumbs />
  <div>
    <h1>Hello Vue</h1>
    {{ users }}
    {{ isButtonDisabled }}
  </div>
  <div>
    <MButton :is-disabled="isButtonDisabled" @click="users.push({})" />
    <MButton />
  </div>
  <div>
    <!-- <MSwitch v-model="isAgeConfirmed" /> -->
    <MSwitch
      :model-value="isAgeConfirmed"
      @update:model-value="isAgeConfirmed = $event"
    />
  </div>
  {{ isAgeConfirmed }}
</template>
