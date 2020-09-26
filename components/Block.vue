<template>
  <div class="block">
    <div class="container">
      <div class="row align-items-center" :class="{'flex-row-reverse' : isOdd}">
        <div class="col-md-6">
          <h2 class="block__title">{{block.title}}</h2>
          <div v-html="$prismic.asHtml(block.text)" />
        </div>
        <div v-if="renderImage" class="col-md-6">
          <Media :image="block.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Media from './Media';
  export default {
    props: {
      block: {
        type: Object,
        require: true
      },
      index: {
        type: Number,
        require: true
      }
    },
    computed: {
      isReversed() {
        return false
      },
      isOdd() {
        return this.index % 2 === 1;
      },
      renderImage() {
        return this.block.image;
      }
    },
    components: {
      Media
    }
  }
</script>
