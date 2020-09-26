<template>
  <div class="row">
    <div class="col-md-3 dosage-table--content">{{ dosage.name1}} <span>{{ dosage.details[0].text }}</span></div>
    <div class="col-md-3 dosage-table--content">{{ dosage.start}}</div>
    <div class="col-md-3 dosage-table--content">{{ dosage.max }}</div>
    <div class="col-md-3 dosage-table--content">{{ dosage.duration }}</div>
  </div>
</template>
<script>
  export default {
    props: {
      dosage: {
        type: Object,
        require: true
      }
    }
  }
</script>
