<template>
  <div class="header">
    <div class="header-container">
      <div class="burger-bt">
        <div class="hamb-bar"></div>
        <div class="hamb-bar"></div>
        <div class="hamb-bar"></div>
      </div>
      <div class="logo-ore">
        <nuxt-link to="/">
          <span v-html="require(`~/assets/_svg/logo_White.svg?raw`)" />
        </nuxt-link>
      </div>
      <div class="header-right">
        <div class="bt-view-more">
          Voir plus
          <div class="view-more-ico"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';
.header {
  position: absolute;
  height: 100px;
  z-index: 10;
  width: 100%;
  .header-container {
    position: relative;
    width: 100%;
  }
  .burger-bt {
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: $primary-B-100;
    border-radius: 24px;
    left: 48px;
    top: 18px;
  }
  .hamb-bar {
    position: absolute;
    height: 2px;
    width: 18px;
    height: 2px;
    background-color: $white;
    left: 50%;
    margin-left: -9px;
    top: 18px;
    &:nth-child(2) {
      top: 24px;
    }
    &:nth-child(3) {
      top: 30px;
    }
  }
  .logo-ore {
    position: absolute;
    width: 56px;
    ::v-deep svg {
      width: 100%;
    }
    left: 110px;
    top: 10px;
    // margin-top: -40px;
  }
  .header-right {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .bt-view-more {
    font-size: 14px;
    color: $primary-B-100;
    text-transform: uppercase;
    text-decoration: underline;
    width: 118px;
    height: 32px;
    line-height: 32px;
    padding-right: 48px;
    &:before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      width: 32px;
      height: 32px;
      background-color: $white;
      border-radius: 16px;
    }
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      right: 11px;
      top: 14px;
      border-style: solid;
      border-width: 7px 5px 0 5px;
      border-color: $primary-B-100 transparent transparent transparent;
    }
  }
}
</style>
