<template>
  <div class="hero">
    <div class="container">
      <div class="row align-items-center" :class="{'flex-row-reverse' : isReversed}">
        <div class="col-md-6">
          <h1 class="hero__title">{{heroData.title}}</h1>
          <div v-html="$prismic.asHtml(heroData.text)" />
        </div>
        <div v-if="renderImage" class="col-md-6">
          <Media :image="heroData.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Media from './Media';
  export default {
    props: {
      heroData: {
        type: Object,
        require: true
      }
    },
    computed: {
      isReversed() {
        return this.heroData.text_align === 'Right';
      },
      renderImage() {
        return this.heroData.image;
      }
    },
    components: {
      Media
    }
  }
</script>
