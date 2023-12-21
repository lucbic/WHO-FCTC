<<template>
  <div class="language-selector" :class="{ '-inverted': isArabic }">
    <img class="icon" src="../assets/img/icons/translation.svg" />

    <span class="selected">{{ selected }}</span>

    <select
      class="select"
      v-model="computedValue"
      name="language-selector"
    >

      <option
        v-for="({ label, ...lang }) in $options.languages"
        class="option"
        v-bind="lang"
      >
        {{ label }}
      </option>
    </select>

    <img class="chevron" src="../assets/img/icons/chevron-down.svg" />
  </div>
</template>

<script>
export default {
  name: 'language-selector',

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  languages: [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'ar',
      label: 'العربية',
    },
    {
      value: 'zhCN',
      label: '中文',
    },
    {
      value: 'fr',
      label: 'Français',
    },
    {
      value: 'ru',
      label: 'Русский',
    },
    {
      value: 'es',
      label: 'Español',
    }
  ],

  computed: {
    computedValue: {
      get () {
        return this.value;
      },
      set (value) {
        this.$emit('input', value);
      }
    },

    selected () {
      const lang = this.$options.languages.find(lang => lang.value === this.value);

      return lang ? lang.label : 'Language';
    },

    isArabic () {
      return this.value === 'ar';
    }
  }
}
</script>

<style lang="scss">
.language-selector {
  position: relative;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #2b4656;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }

  > .icon {
    filter: brightness(0) invert(1);
    height: 20px;
    margin-right: 10px;
    justify-self: flex-start;
  }

  &.-inverted > .icon {
    margin-right: 0;
    margin-left: 10px;
  }

  > .selected {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }

  > .select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0px solid transparent;
    outline: 0px solid transparent;
    appearance: none;
    background-color: transparent;
    color: transparent;
    cursor: pointer;
    padding: 5px 24px 5px 8px;

    > .option {
      background-color: #2b4656;
      color: #fff;
      font-size: 16px;
      font-size-adjust: 0.3;
    }
  }

  > .chevron {
    filter: brightness(0) invert(1);
    margin-left: 5px;
  }

  &.-inverted > .chevron {
    margin-left: 0;
    margin-right: 5px;
  }
}
</style>
