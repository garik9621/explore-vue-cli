<template>

  <div class="app">
    <router-view/>
  </div>

</template>

<script>
export default {
  name: "empty-layout",
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError)
    }
  }
}
</script>

<style scoped>

.app {
  display: flex;
  align-content: center;
  justify-content: center;
  background-image: linear-gradient(-45deg, #c3c2c2 0%, #000000 70%);
}

</style>