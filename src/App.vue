<template>
  <div>
    <app-header />

    <div id="content" :class="[routename]">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-4">
            <div class="logo-box text-center">
              <img src="./assets/img/FCTC_logo.png" alt="">
            </div>
          </div>

          <div class="col-xs-3">
            <div class="p30 footer-social">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-youtube-play"></i>
            </div>
          </div>

          <div class="col-xs-5">
            <div class="p30 footer-links">
              <ul class="list-inline">
                <li><router-link to="/about">{{ $t('app.footer.about.title') }}</router-link></li>
                <li><router-link to="/resources">{{ $t('app.footer.resources.title') }}</router-link></li>
                <li><router-link to="/contact">{{ $t('app.footer.contact.title') }}</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',

  components: {
    AppHeader,
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
