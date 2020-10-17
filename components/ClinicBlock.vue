<template>
  <div class="clinic-block col-md-4" :class="'clinic-block--' + block.name1">
    <i :class="block.icon" />
    <h3>{{ block.title }}</h3>
    <div v-html="$prismic.asHtml(block.text1)" />
    <Button v-if="block.document.url" :url="block.document.url" :newTab="true" :text="block.document_text_button" />
  </div>
</template>
<script>
import Button from './Button';
  export default {
    props: {
      block: {
        type: Object,
        require: true
      }
    },
    components: {
      Button
    }
  }
</script>
