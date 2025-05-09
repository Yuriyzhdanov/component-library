<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MDropdown from './components/MDropdown.vue'
import MButtonCloud from './components/MButtonCloud.vue'
export default {
  components: { MButton, MSwitch, MBreadcrumbs, MFAB, MDropdown, MButtonCloud },

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
    <!-- <article>
      <MBreadcrumbs />
    </article>

    <article>
      <MButton :is-disabled="isButtonDisabled" @click="users.push({})" />
      <MButton />
    </article>

    <article>
      <MSwitch v-model="hasNewMessage" />
      
    </article>

    <article>
      <MFAB icon="home" v-model="hasNewMessage" :is-show="isLoggedIn" />
    </article> -->

    <MSwitch v-model="isLoggedIn" />
    <article>
      <MDropdown v-if="isLoggedIn" />
    </article>
    <article>
      <MButtonCloud />
    </article>
  </section>
</template>

<style>
article {
  margin: 25px;
}
</style>
