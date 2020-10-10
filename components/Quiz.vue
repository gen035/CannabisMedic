<template>
  <a class="quiz" :href="quiz.link.url" :target="quiz.link.target">
    <Media :image="getImage" class="quiz-image" />
    <h2>{{quiz.title}}</h2>
    <div v-html="$prismic.asHtml(quiz.description1)" />
    <div class="button">{{$t('quizzes.participate')}}</div>
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
      },
      image: {
        type: Object,
        require: true,
        default: () => ({})
      }
    },
    computed: {
      getImage() {
        if(this.quiz.image.url) {
          return this.quiz.image;
        }

        return this.image;
      }
    },
    components: {
      Media
    }
  }
</script>