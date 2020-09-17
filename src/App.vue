<template>
  <transition name="app" mode="out-in">
    <component :is="layout">
      <router-view />
    </component>
  </transition>
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
.app-enter-active,
.app-leave-active {
  transition: opacity 3s ease;
}

.app-enter,
.app-leave-to {
  opacity: 0;
}

</style>
