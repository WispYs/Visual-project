<template>
  <div class="header">
    <div class="header__top">
      <!-- <img class="header__logo ld_left" src="~images/logo.jpg" alt=""> -->
      <h1 class="ld_left">XX车间智能运维平台</h1>
      <div class="header__right ld_right">
        <div class="header__search ld_left">
          <el-input
            suffix-icon="el-icon-search"
            style="border: 0!important;"
            placeholder="请输入关键词"
            v-model="search">
          </el-input>
        </div>
        <div 
          class="header__login ld_right" 
          @click="$router.push({
            name: 'login'
          })">
          登录
        </div>
        <div class="header__phone ld_right">
          全国服务热线：
          <span>+86 13333333333</span>
        </div>
      </div>
      <div 
        :class="isToggle ? 'header__menu open ld_right' : 'header__menu ld_right'"
        @click="toggleNav()">
        <img src="~images/menu.png" alt="">
      </div>
    </div>
    <div class="header__nav">
      <ul class="header__nav__list">
        <li>
          <a href="#">首页</a>
        </li>
        <li
          @click="$router.push({
            name: 'equipment'
          })">
          <a href="javascript:;">设备运行</a>
        </li>
        <li
          @click="$router.push({
            name: 'management'
          })">
          <a href="javascript:;">设备管理</a>
        </li>
        <li>
          <a href="javascript:;">能源监控</a>
        </li>
        <li>
          <a href="javascript:;">视频监控</a>
        </li>
        <li style="width: 100px;">
          <a href="javascript:;">生产管理</a>
        </li>
        <li style="width: 100px;">
          <a href="javascript:;">系统维护</a>
        </li>
        <!-- <li>
          <a href="#">营销网络</a>
        </li>
        <li>
          <a href="#">联系我们</a>
        </li> -->
        <li>
          <a href="javascript:;">关于我们</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import EventHub from '@/services/event-hub';
  export default {
    data() {
      return {
        search: '',
        userId: '',
        isToggle: false
      }
    },
    methods: {
      toggleNav() {
        this.isToggle = !this.isToggle;
        EventHub.$emit('isToggle', this.isToggle);
      }
    }
   
  };
</script>

<style lang="scss" scoped>
  @import '~styles/base/variable';
  @import '~styles/mixins/clearfix';
  .header {
    @include clearfix;
    background: $blue-dark;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    overflow: hidden;
    transition: all .5s;
    z-index: 9999;
    &__top {
      @include clearfix;
      width: 1000px;
      height: 88px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      h1 {
        line-height: 88px;
        color: #fff;
      }
    }
    &__right {
      @include clearfix;
    }
    &__menu {
      display: none;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      cursor: pointer;
      transition: all .5s;
      img {
        width: 100%;
        height: 100%;
      }
      &.open {
        width: 40px;
        height: 30px;
        right: 30px;
      }
    }
    &__search {
      position: relative;
      margin-top: 24px;
      padding-right: 24px;
    }
    &__login {
      color: #fff;
      line-height: 106px;
      margin-left: 25px;
      cursor: pointer;
    }
    &__phone {
      color: #ffffff;
      font-size: 14px;
      line-height: 20px;
      margin-top: 20px;
      span {
        display: block;
        color: #ffffff;
        font-size: 24px;
        line-height: 28px;
        font-family: impact;
      }
    }
    &__nav {
      position: relative;
      width: 100%;
      height: 43px;
      margin: 0 auto;
      background: url(~images/navbg_1.jpg) center top no-repeat;
      &__list {
        position: relative;
        width: 880px;
        height: 43px;
        margin: 0 auto;
        li {
          position: relative;
          float: left;
          text-align: left;
          width: 110px;
          height: 43px;
          display: block;
          a {
            width: 110px;
            height: 43px;
            display: block;
            color: #002e5c;
            font-size: 16px;
            line-height: 43px;
            text-align: center;
          }
        }
      }
    }
  }
  @import '~styles/adaptive';

</style>
