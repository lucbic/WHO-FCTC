<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <org-logo v-if="!isArabic" class="col-sm-4 " />

          <div class="col-sm-8 header-options">
            <ul class="main-menu">
              <li v-for="(item) in headerContent">
                <router-link :to="item.to" :class="{ '-active': isActive(item) }">
                  {{ item.label }}
                </router-link>

                <ul v-if="item.children" class="dropdown">
                  <li v-for="child in item.children">
                    <router-link :to="child.to">
                      {{ child.label }}
                      <span>{{ child.description }}</span>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>

            <language-selector v-model="language" />
          </div>

          <org-logo v-if="isArabic" class="col-sm-4 " />
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
import LanguageSelector from './components/LanguageSelector.vue';
import OrgLogo from './components/OrgLogo.vue';

export default {
  name: 'app',

  components: {
    OrgLogo,
    LanguageSelector
  },

  data: () => ({
    routeid: "ddd",
    language: '',
  }),

  watch: {
    language (lang) {
      const { path } = this.$route;
      this.$i18n.locale = lang;
      this.$router.push({ path, query: { lang } });
      const htmlTag = document.querySelector('html');
      htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
      htmlTag.lang = lang;
    },

    '$route' (to) {
      if (to.query.lang)
        this.language = to.query.lang;
    }
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
    },

    isActive (item) {
      if (item.children)
        return item.children.some(child => child.to.name === this.$route.name);

      return this.$route.name === item.to.name;
    }
  },

  created () {
    const { lang } = this.$route.query

    if (lang) this.language = lang,

    this.$on('scrollup', function (value) {
      this.scrollTo();
    });
  },

  computed: {
    routename () {
      return this.$route.name;
    },

    isArabic () {
      return this.language === 'ar';
    },

    headerContent () {
      const items = [
        {
          label: this.$t('app.header.home.title'),
          to: { name: 'home' }
        },
        {
          label: this.$t('app.header.about.title'),
          to: { name: 'about' }
        },
        {
          label: this.$t('app.header.scenarios.title'),
          to: { name: 'scenario' },
          children: [
            {
              label: this.$t('app.header.scenarios.scenario.one.title'),
              to: { name: 'scenarios', params: { id: 1 } },
              description: this.$t('app.header.scenarios.scenario.one.description')
            },
            {
              label: this.$t('app.header.scenarios.scenario.two.title'),
              to: { name: 'scenarios', params: { id: 2 } },
              description: this.$t('app.header.scenarios.scenario.two.description')
            },
            {
              label: this.$t('app.header.scenarios.scenario.three.title'),
              to: { name: 'scenarios', params: { id: 3 } },
              description: this.$t('app.header.scenarios.scenario.three.description')
            }
          ]
        },
        {
          label: this.$t('app.header.resources.title'),
          to: { name: 'resources' }
        },
        {
          label: this.$t('app.header.contactUs.title'),
          to: { name: 'contact' }
        }
      ];

      return this.isArabic ? items.reverse() : items;
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>
