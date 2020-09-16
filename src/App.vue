<template>
  <component :is="layout">
    <router-view />
  </component>

</template>

<script>

import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
  name: 'App',
  computed: {
    layout() {

      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>

<style>
@import '~materialize-css/dist/css/materialize.min.css';
</style>
