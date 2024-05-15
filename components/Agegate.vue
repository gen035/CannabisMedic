<template>
  <client-only>
    <div class="agegateWrapper" v-if="showAgegate">
      <div class="agegate">
        <Media
          classes="agegate-logo"
          :image="this.$store.state.settings.logo"
        />
        <div class="agegate-date">
          <div class="agegate-date--label">{{ $t('agegate.placeholder') }}</div>
          <div class="agegate-date--input">
            <b-form-datepicker
              id="example-datepicker"
              v-model="date"
              :placeholder="$t('agegate.placeholder')"
              :locale="this.$store.state.i18n.locale"
              :show-decade-nav="true"
            >
            </b-form-datepicker>
          </div>
          <b-form-checkbox v-model="remember" size="lg" class="agegate-remember">
            <div class="agegate-remember--text">{{ $t('agegate.remember.text') }}</div>
            <div class="agegate-remember--disclaimer">{{ $t('agegate.remember.disclaimer') }}</div>
          </b-form-checkbox>
        </div>
        <Button class="agegate-button" type="button" :text="$t('agegate.enter')" :disabled="!oldEnough" v-on:click.native="enter" />
        <div class="agegate-disclaimer">{{ getAgegate.disclaimer }}</div>
      </div>
    </div>
  </client-only>
</template>
<script>
import {mapGetters} from "vuex";
import Button from '~/components/Button';
import Media from '~/components/Media';

export default {
  created () {
    const agegate = this.getAgegate;
    const hasCookie = this.$cookies.get(agegate.cookie_name);

    if (!agegate || hasCookie) {
      this.showAgegate = false;
    }
  },
  data () {
    return {
      showAgegate: true,
      agegate: this.getAgegate,
      logo: this.$store.state.settings.logo,
      date: null,
      oldEnough: false,
      remember: false,
      max: this.$moment(new Date).subtract(18, 'years').toDate()
    }
  },
  watch: {
    date: {
      handler () {
        this.isOldEnough()
      },
      deep: true
    }
  },
  methods: {
    close () {
      this.showAgegate = false;
    },
    isOldEnough () {
      const { date } = this;
      const diff_ms = Date.now() - new Date(date).getTime();
      const age_dt = new Date(diff_ms);
      this.oldEnough = Math.abs(age_dt.getUTCFullYear() - 1970) > 17;
    },
    enter () {
      if (this.remember) {
        // Set cookie
        const expires = this.getAgegate.cookie_duration;
        this.$cookies.set(
          this.getAgegate.cookie_name,
          true,
          {
            maxAge: expires * 24 * 60 * 60
          }
        );
        this.close();
      } else {
        this.close();
      }
    }
  },
  components: {
    Button,
    Media
  },
  computed: {
    ...mapGetters([
      'getAgegate',
    ])
  },
}
</script>
