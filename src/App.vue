<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <router-link to="/"><div class="logo-here"></div></router-link>
          </div>
          <div class="col-sm-9">
            <ul class="main-menu">
              <li><router-link to="/">{{ $t('app.header.home.title') }}</router-link></li>
              <li><router-link to="/about">{{ $t('app.header.about.title') }}</router-link></li>
              <li><router-link to="/scenario" class="parent">{{ $t('app.header.scenarios.title') }}</router-link>
                  <ul class="dropdown">
                    <li>
                      <router-link to="/scenario/1">
                        {{ $t('app.header.scenarios.scenario.one.title') }} 
                        <span>{{ $t('app.header.scenarios.scenario.one.description') }} </span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/scenario/2">
                        {{ $t('app.header.scenarios.scenario.two.title') }} 
                        <span>{{ $t('app.header.scenarios.scenario.two.description') }} </span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/scenario/3">
                        {{ $t('app.header.scenarios.scenario.three.title') }} 
                        <span>{{ $t('app.header.scenarios.scenario.three.description') }} </span>
                      </router-link>
                    </li>
                  </ul>
              </li>
              <li><router-link to="/resources">{{ $t('app.header.resources.title') }}</router-link></li>
              <li><router-link to="/contact">{{ $t('app.header.contactUs.title') }}</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
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
export default {
  name: 'app',
  data () {
    return {
      routeid: "ddd"
    }
  },
  methods: {
    scrollTo: function() {
        var self = this;
        var thisindex = "#content"
        var cancelScroll

        var options = {
          container: "body",
          duration: 500,
          easing: "ease-in-out",
          offset:-80,
          cancelable: true,
          onCancel: false,
          x: false,
          y: true
        }
        setTimeout(function() {
          cancelScroll = self.$scrollTo(thisindex, 500, options)
        }, 300);
    },
  },
  created: function() {
    this.$on('scrollup', function(value){
      this.scrollTo()
    });
  },
  computed: {
    routename: function() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>
