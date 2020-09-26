<template>
  <div class="calculator">
    <div class="calculator__text align-items-center">
      {{ $t('calculator.daily') }}
      <div class="calculator__input">
        <i v-on:click="counter('minus')" class="fas fa-minus"></i>
        <span>{{ grams }}</span>
        <i v-on:click="counter('plus')" class="fas fa-plus"></i>
      </div>
    </div>
    <b-form-input class="calculator__range" v-model="grams" type="range" min="0" max="100"></b-form-input>
    <div class="calculator__text">
      {{ $t('calculator.interior') }}
      <span>{{ interiorCount }}</span>
    </div>
    <div class="calculator__text">
      {{ $t('calculator.stock') }}
      <span>{{ stockCount }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        grams: 0
      }
    },
    computed: {
      interiorCount() {
        return this.grams * 5;
      },
      stockCount() {
        return this.grams * 225;
      }
    },
    methods: {
      counter(type) {
        let grams = parseInt(this.grams);

        if (type === 'minus' && grams > 0) {
          this.grams = grams -= 1;
        } else if (type === 'plus' && grams < 100) {
          this.grams = grams += 1;
        }
      }
    }
  }
</script>
