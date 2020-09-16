<template>
  <div class="container">

    <template v-for="item in news">

      <NewsItem>

        {{item.title}}
        <span slot="itemDescription">{{item.description}}</span>
        <a slot="itemLink" :href="item.url">Источник</a>

      </NewsItem>

    </template>



  </div>
</template>

<script>

import NewsItem from "@/components/NewsItem";

export default {
  name: "Home",
  data: () => ({
    news: []
  }),
  async mounted() {

    const newsList = await this.$store.dispatch("getNewsList")

    this.news = newsList
  },
  components: {
    NewsItem
  }
}
</script>

<style scoped>

</style>