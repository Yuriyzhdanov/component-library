<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'
import MFAB from './components/MFAB.vue'

export default {
  components: { MButton, MSwitch, MBreadcrumbs, MFAB },

  data() {
    return {
      users: [],
      isAgeConfirmed: false,
      hasNewMessage: true,
      isLoggedIn: true,
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
  <section>
    <article>
      <MBreadcrumbs />
    </article>

    <article>
      <MButton :is-disabled="isButtonDisabled" @click="users.push({})" />
      <MButton />
    </article>

    <article>
      <MSwitch v-model="hasNewMessage" />
      <MSwitch v-model="isLoggedIn" />
    </article>

    <article>
      <MFAB icon="home" v-model="hasNewMessage" :is-show="isLoggedIn" />
    </article>

    <article>
      {{ hasNewMessage }}
    </article>
  </section>
</template>

<style>
article {
  margin: 25px;
}
</style>
