<template>
  <div class="agegateWrapper">
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
      <Button type="button" :text="$t('agegate.enter')" :disabled="!oldEnough" />
      <div class="agegate-disclaimer">{{ agegate.disclaimer }}</div>
    </div>
  </div>
</template>
<script>
  import Button from '~/components/Button';
  import Media from '~/components/Media';
  export default {
    data() {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const maxDate = new Date(today);
      maxDate.setYear(maxDate.getYear() - 21);
      return {
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
        this.closed = true;
      },
      isOldEnough() {
        const { day, month, year } = this.date;
        if(day && month && year) {
          this.oldEnough = new Date(year + 21, month -1, day) <= new Date();
        }
      }
    },
    components: {
      Button,
      Media
    }
  }
</script>