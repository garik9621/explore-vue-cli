<template>

  <div class="container">

    <div class="row">
      <form @submit.prevent="submitHandler" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="email" id="email" type="text" :class="{invalid: $v.email.$dirty && (!$v.email.required || !$v.email.email)}">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="password" id="password" type="password" :class="{invalid: $v.password.$dirty && (!$v.password.required || !$v.password.minLength)}">
            <label for="password">Password</label>
          </div>
        </div>
        <button type="submit" class="waves-effect waves-light btn">Войти</button>
        <br>
        <router-link to="/registration" class="yellow-text text-lighten-1">Регистрация</router-link>
      </form>
    </div>

  </div>

</template>

<script>

import {required, minLength, email} from 'vuelidate/lib/validators'

export default {
  name: "Auth",
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    async submitHandler() {

      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        })

        this.$router.push('/')

      }catch (e) {}
    }
  }
}
</script>

<style scoped>

input {
  color: #fff;
}

</style>