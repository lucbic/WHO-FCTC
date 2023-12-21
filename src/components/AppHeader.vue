<template>
  <header class="app-header">
    <div class="container">
      <div class="row">
        <org-logo v-if="!isArabic" :inverted="isArabic" class="col-sm-4 " />

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

        <org-logo v-if="isArabic" :inverted="isArabic" class="col-sm-4 " />
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';
import OrgLogo from './OrgLogo.vue';

export default {
  name: 'app-header',

  components: {
    OrgLogo,
    LanguageSelector
  },

  data: () => ({
    language: '',
  }),

  watch: {
    language(lang) {
      const { path } = this.$route;
      this.$i18n.locale = lang;
      this.$router.push({ path, query: { lang } });
      const htmlTag = document.querySelector('html');
      htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
      htmlTag.lang = lang;
    },

    '$route'(to) {
      if (to.query.lang)
        this.language = to.query.lang;
    }
  },

  methods: {
    isActive(item) {
      if (item.children)
        return item.children.some(child => child.to.name === this.$route.name);

      return this.$route.name === item.to.name;
    }
  },

  created() {
    const { lang } = this.$route.query

    if (lang) this.language = lang
  },

  computed: {
    isArabic() {
      return this.language === 'ar';
    },

    headerContent() {
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
@import "../assets/scss/style";

.app-header {
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;

  background-color: $dark-blue;

  .header-options {
    display: flex;
    justify-content: flex-end;
    height: 50px;
  }

  ul.main-menu {
    margin-bottom: 0;
    padding-inline-start: 0;
    padding-inline-end: 15px;

    li {
      display: block;
      position: relative;
      float: left;

      a {
        display: block;
        line-height: 50px;
        padding: 0 15px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;

        @media (max-width: 991px) {
          padding: 0 10px;
          font-size: 15px;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &.router-link-exact-active {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &.parent.router-link-active {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &.-active {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }

      &:hover {
        .dropdown {
          opacity: 1;
          pointer-events: auto;

          li {
            pointer-events: auto;
          }
        }
      }

      .dropdown {
        position: absolute;
        background-color: $dark-blue;
        padding: 0px;
        margin: 0px;
        top: 100%;
        opacity: 0;
        pointer-events: none;

        transition: opacity 0.3s ease-in-out;

        li {
          display: block;
          width: 280px;
          pointer-events: none;
          border-top: 1px solid lighten($dark-blue, 15%);

          a {
            font-size: 15px;
            letter-spacing: 0.1em;
            line-height: 19px;
            padding: 15px 25px;
          }

          a>span {
            font-weight: 300;
            display: block;
          }
        }
      }
    }
  }
}
</style>
