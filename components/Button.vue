<template>
  <button
    v-if="type === 'button'"
    class="button"
    type="button"
  >
    {{ text }}
  </button>
  <a :href="url" v-else class="button button--link">
    {{ text }}
  </a>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        require: true,
        default: () => ("Text")
      },
      type: {
        type: String,
        require: true,
        default: () => ("button")
      },
      url: {
        type: String,
        require: true,
        default: () => ("")
      }
    }
  }
</script>