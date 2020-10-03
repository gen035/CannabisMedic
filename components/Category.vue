<template>
  <div class="category">
    <div class="row">
      <div class="col-md-12">
        <h2 class="block__title">{{category.title}}</h2>
        <div v-html="$prismic.asHtml(category.text1)" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3>{{ $t('category.appearance') }}</h3>
        <div class="category__specs" v-html="$prismic.asHtml(category.appearance)" />
      </div>
      <div class="col-md-6">
        <h3>{{ $t('category.benefits') }}</h3>
        <div class="category__specs" v-html="$prismic.asHtml(category.benefits)" />
      </div>
    </div>
  </div>
</template>
<script>
  import Media from './Media';
  export default {
    props: {
      category: {
        type: Object,
        require: true
      }
    }
  }
</script>
