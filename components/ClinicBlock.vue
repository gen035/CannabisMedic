<template>
  <div class="clinicBlock col-md-4" :class="'clinicBlock--' + block.name1">
    <i :class="block.icon" />
    <h2>{{ block.title }}</h2>
    <div v-html="$prismic.asHtml(block.text1)" />
  </div>
</template>
<script>
  export default {
    props: {
      block: {
        type: Object,
        require: true,
        default: () => ({})
      }
    }
  }
</script>
