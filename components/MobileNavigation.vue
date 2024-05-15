<template>
  <nav class="mobile-nav" :class="{'is-opened' : isOpened}">
    <div class="mobile-nav-close" v-on:click="closeNav">
      <i class="fas fa-times-circle"></i>
    </div>
    <ul class="mobile-nav-items">
      <li class="mobile-nav-item" v-for="(item, index) in navigation" :key="index">
        <Link
          :text="item.primary.text"
          :link="item.primary.item_link"
          :external="item.primary.item_link_external"
          @click.native="closeNav"
        />
        <ul class="mobile-subnav" v-if="item.items.length > 0">
          <li v-for="(subitem, index) in item.items" :key="index">
            <Link
              :text="subitem.text"
              :link="subitem.link"
              :external="subitem.item_link_external"
              @click.native="closeNav"
            />
          </li>
        </ul>
      </li>
    </ul>
    <div class="mobile-nav-social">
      <div class="mobile-nav-social--title">{{ $t('footer.follow') }}</div>
      <a class="mobile-nav-social--link" :href="getSettings.facebook.url" target="_blank">
        <i class="fab fa-facebook"></i>
        Facebook
      </a>
    </div>
    <div class="mobile-nav-lang">
      {{$t('lang.text')}}<Lang />
    </div>
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex';
  import Link from './Link';
  import Lang from './Lang';

  export default {
    props: {
      navigation: {
        type: Array,
        require: true
      },
      opened: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      opened: {
        handler() {
          this.isOpened = this.opened;
          if(this.opened) {
            document.body.classList.add('is-nav-opened');
          }
        }
      }
    },
    data() {
      return {
        isOpened: this.opened
      }
    },
    methods: {
      closeNav() {
        this.$emit('closed', false);
        document.body.classList.remove('is-nav-opened');
      }
    },
    components: {
      Link,
      Lang
    },
    computed: {
    ...mapGetters([
      'getSettings',
    ])
  },
  }
</script>