<template>
  <mailchimp-subscribe
    :url="getSettings.mailchimp_url"
    :user-id="this.$config.mailchimp_user_id"
    :list-id="this.$config.mailchimp_list_id"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <div class="newsletter">
        <h2 class="newsletter__title">{{ $t('mailchimp.title') }}</h2>
        <form @submit.prevent="subscribe">
          <input type="email" :placeholder="$t('mailchimp.placeholder')" @input="setEmail($event.target.value)" />
          <button type="submit">
            <i class="fas fa-angle-double-right"></i>
          </button>
          <div class="newsletter__message" v-if="error" v-html="error" />
          <div class="newsletter__message" v-if="success">{{ $t('mailchimp.success') }}</div>
          <div class="newsletter__message" v-if="loading">{{ $t('mailchimp.loading') }}</div>
        </form>
      </div>
    </template>
  </mailchimp-subscribe>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
    ...mapGetters([
      'getSettings'
    ])
  },
  }
</script>
