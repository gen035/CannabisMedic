<template>
  <mailchimp-subscribe
    :url="this.$store.state.settings.mailchimp_url"
    :user-id="this.$store.state.settings.mailchimp_user_id"
    :list-id="this.$store.state.settings.mailchimp_list_id"
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
  export default {
  }
</script>
