<template>
  <div class="location">
    <h2>{{location.location_name}}</h2>
    <div class="location-address">
      <p v-html="$prismic.asHtml(location.address)" />
      <p v-if="location.city && location.postal_code">{{location.city}}, {{location.postal_code}}</p>
      <p v-if="location.suite">{{location.suite}}</p>
      <p v-if="location.phone">{{location.phone}}</p>
    </div>
    <div v-if="location.phone" class="location-phone">
      <a :href="`tel:${formatPhone(location.phone)}`"><i class="fas fa-phone"></i></a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      location: {
        type: Object,
        require: true,
        default: () => ({})
      }
    },
    methods: {
      formatPhone(phoneNumber) {
        return phoneNumber.replace(/\D/g, '');
      }
    }
  }
</script>