<template>
  <div class="row">
    <div class="col-md-3 dosage-table--content">
      <div class="dosage-table--header--mobile d-md-none">{{ $t('dosage.mode') }}</div>
      {{ dosage.name1}} <span>{{ dosage.details[0].text }}</span>
    </div>
    <div class="col-md-3 dosage-table--content">
      <div class="dosage-table--header--mobile d-md-none">{{ $t('dosage.start') }}</div>
      {{ dosage.start}}
    </div>
    <div class="col-md-3 dosage-table--content">
      <div class="dosage-table--header--mobile d-md-none">{{ $t('dosage.max') }}</div>
      {{ dosage.max }}
    </div>
    <div class="col-md-3 dosage-table--content">
      <div class="dosage-table--header--mobile d-md-none">{{ $t('dosage.duration') }}</div>
      {{ dosage.duration }}
    </div>
  </div>
</template>s
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
