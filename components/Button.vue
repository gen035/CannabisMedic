<template>
  <button
    v-if="type === 'button'"
    class="button"
    :class="{'is-disabled' : disabled}"
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
      disabled: {
        type: String,
        require: false,
        default: false
      },
      text: {
        type: String,
        require: true
      },
      type: {
        type: String,
        require: true
      },
      url: {
        type: String,
        require: true
      }
    }
  }
</script>