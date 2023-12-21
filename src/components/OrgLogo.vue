<template>
  <div class="org-logo">
    <router-link class="logo-here hp30" to="/">
      <span class="text">
        <strong>Tobacco Control</strong> Toolkit
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'org-logo'
}
</script>

<style lang="scss">
.org-logo {
  height: 50px;
  
  > .logo-here {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 100%;

    font-family: 'Inconsolata', monospace;
    font-size: 22px;
    font-weight: 500;
    color: #000;

    &:hover { text-decoration: none; }

    &::before {
      position: absolute;
      bottom: 0;
      left: 30px;
      content: '';
      display: block;
      width: 78px;
      height: 3px;
      border-radius: 1px;
      background-color: #9dc2d0;
    }
  }
}
</style>
