<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MDropdown from './components/MDropdown.vue'
import MLinks from './components/MLinks.vue'
import MPagination from './components/MPagination.vue'
import MAvatar from './components/MAvatar.vue'

export default {
  components: {
    MButton,
    MSwitch,
    MBreadcrumbs,
    MFAB,
    MDropdown,
    MLinks,
    MPagination,
    MAvatar,
  },

  data() {
    return {
      // isAgeConfirmed: false,
      // hasNewMessage: true,
      // isLoggedIn: true,
      users: ['vasya', 'petya', 'fedya', 'masha'],
      selectedUser: 'masha',
      totalPages: 15,
      currentPage: 7,
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
      <MLinks :list-available="users" v-model="selectedUser" />
    </article>
    <article>
      <h1>{{ selectedUser }}</h1>
    </article>
    <article>
      <MPagination :total-pages="totalPages" v-model="currentPage" />
    </article>
    <!-- <article>
      <h1>{{ totalPages }}</h1>
      <h1>{{ currentPage }}</h1>
    </article> -->
    <article>
      <MAvatar />
    </article>
  </section>
</template>

<style>
article {
  margin: 25px;
}
</style>
