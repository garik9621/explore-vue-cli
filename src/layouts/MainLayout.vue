<template>

  <div class="app">
    <header>
      <nav>
        <div class="container">
          <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">Logo</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/registration">Registration</router-link></li>
              <li><router-link to="/auth">Login</router-link></li>
              <li><a href="#" @click.prevent="logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main>

      <router-view />

    </main>

    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "MainLayout",
  methods: {
    async logout() {
      await this.$store.dispatch('logout')

      this.$router.push('/auth')
    }
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
