<script>
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'

export default {
  components: { MButton, MSwitch },

  data() {
    return {
      users: [],
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
  <div>
    <h1>Hello Vue</h1>
    {{ users }}
    {{ isButtonDisabled }}
  </div>
  <div>
    <MButton :disabled="isButtonDisabled" @click="users.push({})" />
    <MButton />
  </div>
  <div>
    <MSwitch />
  </div>
</template>
