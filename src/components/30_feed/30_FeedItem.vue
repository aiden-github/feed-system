<template>
  <article :class="['feed_item', applyEllipsis ? 'ellipsis' : '']">
    <header>
      <div class="category">{{ categoryName }}</div>
      <div class="content_id">{{ id }}번 글</div>
    </header>
    <div class="feed_container">
      <div>
        <span class="user_id">작성자 {{ user_id }}</span>
        <span class="created_at">{{ formattedDate }}</span>
      </div>
      <h2 class="title">{{ title }}</h2>
      <router-link :to="detailUrl">
        <span class="contents">{{ contents }}</span>
      </router-link>
    </div>
  </article>
</template>

<script>
  import { url } from '@/router'
  export default {
    name: 'FeedItem',
    props: {
      id: Number,
      category_id: Number,
      user_id: Number,
      created_at: String,
      title: String,
      contents: String
    },
    computed: {
      detailUrl(){
        return url.detail(this.id)
      },
      categoryName(){
        const { category } = this.$store.state
        const index = category.map(({ id }) => id).indexOf(this.category_id)
        return index !== -1 ? category[index].name : '카테고리명'
      },
      formattedDate(){
        return this.$formatDate(this.created_at)
      },
      applyEllipsis(){
        return this.$store.state.settings.contents_ellipsis
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import '@/styles/30_feed/30_FeedItem.scss';
</style>