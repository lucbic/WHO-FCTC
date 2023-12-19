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
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/scenario" class="parent">Scenarios</router-link>
                  <ul class="dropdown">
                    <li><router-link to="/scenario/1">Scenario 1: <span>Health Care Cost Recovery</span></router-link></li>
                    <li><router-link to="/scenario/2">Scenario 2: <span>Access to Jusice</span></router-link></li>
                    <li><router-link to="/scenario/3">Scenario 3: <span>Public Interest Litigation</span></router-link></li>
                  </ul>
              </li>
              <li><router-link to="/resources">Resources</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
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
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/resources">Resources</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
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
