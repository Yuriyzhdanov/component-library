<script>
import MBreadcrumbs from '@/components/MBreadcrumbs.vue'
import MButton from '@/components/MButton.vue'
import MSwitch from '@/components/MSwitch.vue'
import MFAB from './components/MFAB.vue'
import MDropdown from './components/MDropdown.vue'
import MLinks from './components/MLinks.vue'
import MPagination from './components/MPagination.vue'
import MAvatarList from './components/m-avatar/MAvatarList.vue'
import MBadgesList from './components/m-badges/MBadgesList.vue'
import MChips from './components/MChips.vue'
import MInputs from './components/m-inputs/MInputs.vue'
import MRadio from './components/MRadio.vue'

import dog1 from './assets/img/1.jpg'
import dog2 from './assets/img/2.jpg'
import dog3 from './assets/img/3.jpg'
import dog4 from './assets/img/4.jpg'
import dogs from './assets/json/dogs.json'
import items from './assets/json/items.json'

import MCarousel from './components/MCarousel.vue'

export default {
  components: {
    MButton,
    MSwitch,
    MBreadcrumbs,
    MFAB,
    MDropdown,
    MLinks,
    MPagination,
    MAvatarList,
    MBadgesList,
    MCarousel,
    MChips,
    MInputs,
    MRadio,
  },

  data() {
    return {
      // isAgeConfirmed: false,
      // hasNewMessage: true,
      // isLoggedIn: true,
      // dog1,
      // users: ['vasya', 'petya', 'fedya', 'masha'],
      // selectedUser: 'masha',
      // totalPages: 15,
      // currentPage: 7,

      dogs: dogs,

      items: items,

      words: ['Foo', 'Bar', 'Baz', 'QQQ', 'RRR', 'SSS', 'TTT', 'TTT'],
      contacts: [],
      selectedColor: 'Red',
    }
  },

  // computed: {
  //   isButtonDisabled() {
  //     return this.users.length >= 5
  //   },
  // },
}
</script>

<template>
  <section>
    <!-- <article>
      <MBadgesList :items="items" />
    </article> -->

    <!-- <article>
      <MCarousel />
    </article> -->

    <article>
      <MChips :model-value="words" @update:model-value="words = $event" />
    </article>

    <article>
      <MChips :model-value="words" @update:model-value="words = $event" />
    </article>

    <button @click="words.push('yo!')">yo!</button>
    <button @click="words.sort(() => Math.random() - 0.5)">shuffle</button>

    <article>
      <h3>{{ words }}</h3>
    </article>
    <!-- <article>
      <ul>
        <li v-for="c of contacts" :key="c.id">
          <p>id: {{ c.id }}</p>
          <p>firstName: {{ c.firstName }}</p>
          <p>lastName: {{ c.lastName }}</p>
          <p>password: {{ c.password }}</p>
          <p>email: {{ c.email }}</p>
        </li>
      </ul>
    </article>
    <article>
      <MInputs @contact-submitted="contacts.push($event)" />
    </article>
    <article>
      <MRadio
        :model-value="selectedColor"
        @update:modelValue="selectedColor = $event"
      />
    </article>
    <article>
      <p>
        Вы выбрали: <strong>{{ selectedColor }}</strong>
      </p>
    </article> -->
    <!-- <MBadgesList :items="items" /> -->
    <!-- {{ dogs }} -->
    <!-- <article>
      <MAvatarList :model-value="dogs" @update:model-value="dogs = $event" />
    </article>
    <article>
      <MAvatarList v-model="dogs" />
    </article> -->

    <!-- <article>
      <MLinks :list-available="users" v-model="selectedUser" />
    </article>
    <article>
      <h1>{{ selectedUser }}</h1>
    </article>
    <article>
      <MPagination :total-pages="totalPages" v-model="currentPage" />
    </article> -->
    <!-- <article>
      <h1>{{ totalPages }}</h1>
      <h1>{{ currentPage }}</h1>
    </article> -->
  </section>
</template>

<style scoped>
article {
  margin: 25px;
}
</style>
