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
    MAvatarList,
    MBadgesList,
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

      // dogs: [
      //   {
      //     id: 1,
      //     firstName: 'Барсик',
      //     secondName: 'Лапочкин',
      //     jobTitle: 'Поводырь',
      //     img: dog1,
      //     isFavorite: true,
      //   },
      //   {
      //     id: 2,
      //     firstName: 'Рекс',
      //     secondName: 'Стальной',
      //     jobTitle: 'Спасатель',
      //     img: dog2,
      //     isFavorite: false,
      //   },
      //   {
      //     id: 3,
      //     firstName: 'Бобик',
      //     secondName: 'Умняшка',
      //     jobTitle: 'Детектив',
      //     img: dog3,
      //     isFavorite: false,
      //   },
      //   {
      //     id: 4,
      //     firstName: 'Шарик',
      //     secondName: 'Быстрый',
      //     jobTitle: 'Курьер',
      //     img: dog4,
      //     isFavorite: false,
      //   },
      // ],
      items: [
        {
          id: 1,
          icon: 'filter_drama',
          title: 'Погода',
          subtitle: 'Облачность и осадки',
          type: 'Информация',
          badge: 4,
          content: 'Сегодня пасмурно, возможен дождь. Температура около 12°C.',
          image: 'https://picsum.photos/150/80',
          actions: [
            { label: 'Подробнее', link: '#' },
            { label: 'Удалить', link: '#' },
          ],
        },
        {
          id: 2,
          icon: 'place',
          title: 'Локация',
          subtitle: 'Текущее местоположение',
          type: 'Система',
          badge: 1,
          content: 'Ты находишься в Киеве, Украина.',
          image: 'https://picsum.photos/120/80',
          actions: [{ label: 'Открыть карту', link: '#' }],
        },
        {
          id: 3,
          icon: 'whatshot',
          title: 'Популярное',
          subtitle: 'Темы недели',
          type: 'Тренды',
          badge: null,
          content: 'Новые технологии, стартапы и крипта снова в топе.',
          image: 'https://picsum.photos/160/80',
          actions: [],
        },
        {
          id: 4,
          icon: 'event',
          title: 'Событие',
          subtitle: 'Конференция Vue.js',
          type: 'Календарь',
          badge: 2,
          content: 'VueConf состоится в Берлине 25–27 июля. Онлайн и офлайн.',
          image: 'https://picsum.photos/160/70',
          actions: [{ label: 'Регистрация', link: '#' }],
        },
        {
          id: 5,
          icon: 'shopping_cart',
          title: 'Корзина',
          subtitle: '3 товара на сумму 4500₴',
          type: 'Магазин',
          badge: 3,
          content:
            'Ваша корзина содержит товары, которые скоро закончатся в наличии.',
          image: 'https://picsum.photos/130/70',
          actions: [
            { label: 'Перейти к оплате', link: '#' },
            { label: 'Очистить корзину', link: '#' },
          ],
        },
        {
          id: 6,
          icon: 'notifications',
          title: 'Уведомления',
          subtitle: '3 новых',
          type: 'Система',
          badge: 3,
          content: 'Новые обновления системы и сообщений.',
          image: 'https://picsum.photos/110/90',
          actions: [
            { label: 'Прочитать', link: '#' },
            { label: 'Настройки', link: '#' },
          ],
        },
        {
          id: 7,
          icon: 'account_circle',
          title: 'Профиль',
          subtitle: 'Настройки и безопасность',
          type: 'Пользователь',
          badge: null,
          content: 'Обновите пароль и просмотрите историю активности.',
          image: 'https://picsum.photos/100/210',
          actions: [{ label: 'Открыть профиль', link: '#' }],
        },
      ],
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
    <article>
      <MBadgesList :items="items" />
    </article>
    <!-- {{ dogs }} -->
    <!-- <article>
      <MAvatarList :model-value="dogs" @update:model-value="dogs = $event" />
    </article>
    <article>
      <MAvatarList v-model="dogs" />
    </article> -->
    <article></article>

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
