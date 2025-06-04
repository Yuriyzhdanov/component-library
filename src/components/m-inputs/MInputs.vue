<script>
import CryptoJS from 'crypto-js'

const makeId = () => ((Math.random() * 0xffffffff) >>> 0).toString(16)
const initContact = () => ({
  id: makeId(),
  firstName: '',
  lastName: '',
  password: '',
  email: '',
})

export default {
  emits: ['contact-submitted'],

  data() {
    return {
      contact: initContact(),
    }
  },

  methods: {
    submitContact() {
      const REQUIRED_FIELDS = ['firstName', 'lastName', 'password', 'email']
      const isVerified = REQUIRED_FIELDS.every(rf => this.contact[rf].trim())
      if (!isVerified) return

      const hashedPassword = CryptoJS.SHA256(this.contact.password).toString()

      this.$emit('contact-submitted', {
        ...this.contact,
        password: hashedPassword,
      })

      this.contact = initContact()
    },
  },
}
</script>

<template>
  <div class="row">
    <form @submit.prevent="submitContact" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            v-model="contact.firstName"
            id="first_name"
            type="text"
            class="validate"
          />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input
            v-model="contact.lastName"
            id="last_name"
            type="text"
            class="validate"
          />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input
            v-model="contact.password"
            id="password"
            type="password"
            class="validate"
          />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input
            v-model="contact.email"
            id="email"
            type="email"
            class="validate"
          />
          <label for="email">Email</label>
        </div>
      </div>
      <button type="submit" class="btn">Добавить</button>
    </form>
  </div>
</template>
