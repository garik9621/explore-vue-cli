<template>

  <div class="app">

    <Header/>

    <transition name="app" mode="out-in">

      <main>

        <router-view />

      </main>

    </transition>

    <Footer/>

  </div>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "MainLayout",
  methods: {
    async logout() {
      await this.$store.dispatch('logout')

      this.$router.push('/auth')
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .app {
    display: flex!important;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }

</style>
