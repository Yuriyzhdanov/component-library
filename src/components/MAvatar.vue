<script>
export default {
  props: ['dogs'],
  emits: [''],
  data() {
    return {
      localDogs: this.dogs.map(dog => ({
        ...dog,
        isFavorite: false,
      })),
    }
  },
  methods: {
    toggleFavorite(index) {
      this.localDogs[index].isFavorite = !this.localDogs[index].isFavorite
    },
  },
}
</script>
<template>
  <ul class="collection">
    <li
      v-for="(dog, index) of dogs"
      :key="index"
      class="collection-item avatar"
    >
      <div class="circle">
        <img :src="dog.img" alt="" />
      </div>
      <span class="title">{{ dog.firstName }}</span>
      <p>
        {{ dog.secondName }} <br />
        {{ dog.jobTitle }}
      </p>
      <a href="#!" class="secondary-content" @click="toggleFavorite(index)"
        ><i class="material-icons"
          >{{ dog.isFavorite ? 'grade' : 'star_border' }}
        </i></a
      >
    </li>
  </ul>
</template>

<style scoped>
img {
  height: 100%;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
}
</style>
