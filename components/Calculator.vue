<template>
  <div class="calculator">
    <div class="calculator__locations">
      <div class="calculator__location">
        <label class="pill">
          <input v-model="interior" type="checkbox">
          <span class="pill-slider"></span>
        </label>
        {{ $t('calculator.interior') }}
      </div>
      <div class="calculator__location">
        <label class="pill">
          <input v-model="exterior" type="checkbox">
          <span class="pill-slider"></span>
        </label>
        {{ $t('calculator.exterior') }}
      </div>
    </div>
    <div class="calculator__text align-items-center">
      {{ $t('calculator.daily') }}
      <div class="calculator__input">
        <i v-on:click="gramsCounter('minus')" class="fas fa-minus"></i>
        <span>{{ grams }}</span>
        <i v-on:click="gramsCounter('plus')" class="fas fa-plus"></i>
      </div>
    </div>
    <b-form-input class="calculator__range" v-model="grams" type="range" min="5" max="120"></b-form-input>
    <div class="calculator__text">
      {{ $t('calculator.plantInterior') }}
      <span>&nbsp;{{ interiorCount }}</span>
    </div>
    <div class="calculator__text">
      {{ $t('calculator.plantExterior') }}
      <span>&nbsp;{{ exteriorCount }}</span>
    </div>
    <div class="calculator__text">
      {{ $t('calculator.stock') }}
      <span>&nbsp;{{ stockCount }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        interior: true,
        exterior: false,
        interiorCount: 0, 
        exteriorCount: 0,
        grams: 5
      }
    },
    created() {
      let self = this;
      this.counter();
    },
    watch: {
      'grams'(newVal) {
        this.counter();
      },
      'interior'(newVal) {
        this.counter();
      },
      'exterior'(newVal) {
        this.counter();
      }
    },
    computed: {
      stockCount() {
        if(this.interior && this.exterior || this.exterior) {
          return this.exteriorCount * 375;
        }else if(this.interior) {
          return this.interiorCount * 45;
        } else {
          return 0;
        }
      }
    },
    methods: {
      gramsCounter(type) {
        if (type === 'minus' && this.grams > 5) {
          this.grams = this.grams -= 1;
        } else if (type === 'plus' && this.grams < 120) {
          this.grams = this.grams += 1;
        }
      },
      counter() {
        if(this.interior && this.exterior) {
          this.interiorCount = Math.ceil(3.65 * this.grams)
          this.exteriorCount = Math.ceil(0.949 * this.grams);
        } else if(this.interior) {
          this.interiorCount = Math.ceil((43.8 * this.grams)/9);
          this.exteriorCount = 0;
        } else if(this.exterior) {
          this.exteriorCount = Math.ceil(1.898 * this.grams);
          this.interiorCount = 0;
        } else {
          this.exteriorCount = 0;
          this.interiorCount = 0;
        }
      }
    }
  }
</script>
