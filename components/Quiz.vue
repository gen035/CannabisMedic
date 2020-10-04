<template>
  <a class="quiz" :href="quiz.link.url" :target="quiz.link.target">
    <Media :image="quiz.image" class="quiz-image" />
    <h2>{{quiz.title}}</h2>
    <div v-html="$prismic.asHtml(quiz.description1)" />
    <div class="button">{{$t('quiz.participate')}}</div>
  </a>
</template>
<script>
  import Media from '~/components/Media';
  export default {
    props: {
      quiz: {
        type: Object,
        require: true,
        default: () => ({})
      }
    },
    components: {
      Media
    }
  }
</script>