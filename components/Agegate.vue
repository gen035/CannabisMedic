<template>
  <div class="agegateWrapper" v-if="showAgegate">
    <div class="agegate">
      <div class="agegate-close" v-on:click="close">
        <i class="fas fa-times-circle"></i>
      </div>
      <Media
        classes="agegate-logo"
        :image="this.$store.state.settings.logo"
      />
      <div class="agegate-date">
        <div class="agegate-date--label">{{ $t('agegate.date') }}</div>
        <div class="agegate-date--input">
          <input type="text" min="1" max="31" v-model.number="date.day" :placeholder="$t('agegate.day')"/>
          <input type="text" min="1" max="12" v-model.number="date.month" :placeholder="$t('agegate.month')"/>
          <input type="text" min="0" v-model.number="date.year" :placeholder="$t('agegate.year')"/>
        </div>
        <b-form-checkbox v-model="remember" size="lg" class="agegate-remember">
          <div class="agegate-remember--text">{{ $t('agegate.remember.text') }}</div>
          <div class="agegate-remember--disclaimer">{{ $t('agegate.remember.disclaimer') }}</div>
        </b-form-checkbox>
      </div>
      <Button type="button" :text="$t('agegate.enter')" :disabled="!oldEnough" v-on:click.native="enter" />
      <div class="agegate-disclaimer">{{ agegate.disclaimer }}</div>
    </div>
  </div>
</template>
<script>
  import Button from '~/components/Button';
  import Media from '~/components/Media';
  export default {
    created() {
      const agegate = this.$store.state.agegate;
      const hasCookie = this.$cookies.get(agegate.cookie_name);

      if(!agegate || hasCookie) {
        this.showAgegate = false;
      }
    },
    data() {
      return {
        showAgegate: true,
        agegate: this.$store.state.agegate,
        logo: this.$store.state.settings.logo,
        date: {
          year: null,
          month: null,
          day: null,
        },
        oldEnough: false,
        remember: false
      }
    },
    watch: {
      date: {
        handler() {
          this.isOldEnough()
        },
        deep: true
      }
    },
    methods: {
      close() {
        this.showAgegate = false;
      },
      isOldEnough() {
        const { day, month, year } = this.date;
        if((day && day !== '') && (month && month !== '') && (year && year > 1900 && year !== '')) {
          this.oldEnough = new Date(year + 21, month -1, day) <= new Date();
        }
      },
      enter() {
        if(this.remember) {
          // Set cookie
          const expires = this.agegate.cookie_duration;
          this.$cookies.set(
            this.agegate.cookie_name,
            true,
            {
              maxAge: expires * 24 * 60 * 60
            }
          );
          this.close();
        }else{
          this.close();
        }
      }
    },
    components: {
      Button,
      Media
    }
  }
</script>