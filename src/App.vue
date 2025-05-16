<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MDropdown from './components/MDropdown.vue'
import MLinks from './components/MLinks.vue'
import MPagination from './components/MPagination.vue'
import MAvatar from './components/MAvatar.vue'

import dog1 from './assets/img/1.jpg'
import dog2 from './assets/img/2.jpg'
import dog3 from './assets/img/3.jpg'
import dog4 from './assets/img/4.jpg'

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
      dog1,
      users: ['vasya', 'petya', 'fedya', 'masha'],
      dogs: [
        {
          firstName: 'Барсик',
          secondName: 'Лапочкин',
          jobTitle: 'Поводырь',
          img: dog1,
          isFavorite: true,
        },
        {
          firstName: 'Рекс',
          secondName: 'Стальной',
          jobTitle: 'Спасатель',
          img: dog2,
          isFavorite: false,
        },
        {
          firstName: 'Бобик',
          secondName: 'Умняшка',
          jobTitle: 'Детектив',
          img: dog3,
          isFavorite: false,
        },
        {
          firstName: 'Шарик',
          secondName: 'Быстрый',
          jobTitle: 'Курьер',
          img: dog4,
          isFavorite: false,
        },
      ],
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
      <MAvatar :dogs="dogs" />
      {{ dog1 }}
    </article>
  </section>
</template>

<style>
article {
  margin: 25px;
}
</style>
