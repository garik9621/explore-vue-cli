<template>

  <header>
    <nav>
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">Logo</router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/registration">Registration</router-link></li>
            <li><router-link to="/employes">Employes</router-link></li>
            <li><router-link to="/auth">Login</router-link></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

</style>