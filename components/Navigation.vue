<template>
  <nav class="nav">
    <ul class="nav-items">
      <li class="nav-item" v-for="(item, index) in navigation.filter(item => !item.primary.hide)" :key="index">
        <Link
          :text="item.primary.text"
          :link="item.primary.item_link"
          :external="item.primary.item_link_external"
        />
        <ul class="sub-nav" v-if="item.items.length > 0">
          <li v-for="(subitem, index) in item.items.filter(subitem => !subitem.hide)" :key="index">
            <Link
              :text="subitem.text"
              :link="subitem.link"
              :external="subitem.item_link_external"
            />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
  import Link from './Link';
  import Lang from './Lang';
  export default {
    props: {
      navigation: {
        type: Array,
        require: true
      }
    },
    components: {
      Link,
      Lang
    }
  }
</script>