<template>
  <nav class="nav">
    <ul class="nav__items">
      <li class="nav__item" v-for="(item, index) in navigation" :key="index">
        <Link
          :text="item.primary.text"
          :link="item.primary.item_link"
          :external="item.primary.item_link_external"
        />
      </li>
    </ul>
  </nav>
</template>
<script>
  import Link from './Link';
  export default {
    props: {
      navigation: {
        type: Array,
        require: true
      }
    },
    components: {
      Link
    }
  }
</script>