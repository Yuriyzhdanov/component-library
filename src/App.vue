<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MDropdown from './components/MDropdown.vue'
import MLinks from './components/MLinks.vue'

export default {
  components: { MButton, MSwitch, MBreadcrumbs, MFAB, MDropdown, MLinks },

  data() {
    return {
      isAgeConfirmed: false,
      hasNewMessage: true,
      isLoggedIn: true,
      users: ['vasya', 'petya', 'fedya', 'masha'],
      selectedUser: 'masha',
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

  -->

    <!-- 
    <article>
      <MDropdown v-if="isLoggedIn" />
    </article>
    <article>
      <MButtonCloud />
    </article> -->

    <article>
      <MButton size="small" caption="Удалить" icon="remove" />
      <MButton caption="Добавить" icon="add" :isIconRight="true" />
      <MButton size="large" caption="Создать" icon="create" />
    </article>
    <article></article>
    <article>
      <MSwitch v-model="isLoggedIn" />
    </article>
    <article>
      <MFAB icon="home" v-model="hasNewMessage" :is-show="isLoggedIn" />
    </article>
    <article>
      <MLinks :list-available="users" v-model="selectedUser" />
    </article>
  </section>
</template>

<style>
article {
  margin: 25px;
}
</style>
