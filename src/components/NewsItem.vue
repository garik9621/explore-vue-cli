<template>

  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title"><slot></slot></span>
        <p>
          <slot name="itemDescription"></slot>
        </p>
      </div>
      <div class="card-action">
        <slot name="itemLink"></slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NewsItem"
}
</script>

<style scoped>

</style>