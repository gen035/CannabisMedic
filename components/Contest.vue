<template>
  <a class="contest" :href="contest.link.url" :target="contest.link.target">
    <Media :image="contest.image" class="contest-image" />
    <h2>{{contest.title}}</h2>
    <div v-html="$prismic.asHtml(contest.description1)" />
    <div class="button">{{$t('contests.participate')}}</div>
  </a>
</template>
<script>
  import Media from '~/components/Media';
  export default {
    props: {
      contest: {
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