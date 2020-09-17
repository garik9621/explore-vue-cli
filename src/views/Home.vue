<template>
  <div class="container">

    <div class="toggle-block">

      <button @click="toggleBlockShow = !toggleBlockShow">Открыть блок</button>

      <transition name="toggle">

        <div class="toggle-block" v-if="toggleBlockShow">
          <img src="https://i.pinimg.com/736x/91/29/f5/9129f5540f310fa167615f562b296a7e.jpg" alt="" class="responsive-img">
        </div>

      </transition>

    </div>

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
    news: [],
    toggleBlockShow: false
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

<style>

  .toggle-enter-active,
  .toggle-leave-active{
    transition: opacity 0.3s ease-out;
  }

  .toggle-enter,
  .toggle-leave-to {
    opacity: 0;
  }

</style>