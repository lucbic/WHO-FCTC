<template>
  <div>
    <app-header />

    <div id="content" :class="[routename]">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',

  components: {
    AppHeader,
    AppFooter
  },

  methods: {
    scrollTo () {
      var thisindex = "#content";
      var options = {
          container: "body",
          duration: 500,
          easing: "ease-in-out",
          offset: -80,
          cancelable: true,
          onCancel: false,
          x: false,
          y: true
      };
      setTimeout(() => {
        this.$scrollTo(thisindex, 500, options);
      }, 300);
    }
  },

  created () {
    this.$on('scrollup', function (value) {
      this.scrollTo();
    });
  }
}
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
