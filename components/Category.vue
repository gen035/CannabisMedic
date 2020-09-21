<template>
  <div class="category">
    <div class="row">
      <div class="col-md-8">
        <h1 class="block__title">{{category.title}}</h1>
        <div v-html="$prismic.asHtml(category.text)" />
      </div>
      <div class="col-md-4 category__specs" v-html="$prismic.asHtml(category.specs)" />
    </div>
  </div>
</template>
<script>
  import Media from './Media';
  export default {
    props: {
      category: {
        type: Object,
        require: true,
        default: () => ({})
      }
    }
  }
</script>
