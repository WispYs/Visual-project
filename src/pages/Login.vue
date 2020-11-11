<template>
  <div class="login">
    <div class="login__top">
      <div class="login__top__box">
        <h4 @click="$router.push({
            name: 'index'
          })">XX车间智能运维平台</h4>
          <ul>
            <li @click="$router.push({
                name: 'index'
              })">
              <img src="~images/login_icon01.png" alt="">
              <span>首页</span>
            </li>
            <li>
              <img src="~images/login_icon02.png" alt="">
              <span>产品</span>
            </li>
            <li>
              <img src="~images/login_icon03.png" alt="">
              <span>服务</span>
            </li>
            <li>
              <img src="~images/login_icon04.png" alt="">
              <span>设备</span>
            </li>
          </ul>
      </div>
    </div>
    <div class="login__wrapper">
      <div class="layui-container regist">
        <div class="layui-row layui-col-space30">
          <div class="layui-col-sm6" data-key="User-login-ad" data-mode="ad">
            <div class="ad">
              <a href="#" target="_blank">
                <img src="~images/login.jpg" alt="">
              </a>
            </div>
          </div>
          <div class="layui-col-sm6">
            <div class="rightForm">
              <!-- 微信登录、注册 -->
              <div class="wxLogin" style="display: none;">
                <span>登录网</span>
                <div class="wxCode">
                  <!-- 此处应为动态二维码，直接扫码登陆 -->
                  <img src="https://www.evget.com/img/WeChat.jpg" alt="微信二维码">
                </div>
                <p><img src="/static/images/account/wx.jpg" alt="微信icon">微信扫码登录</p>
                <p>福利更多、资源更多</p>
              </div>
              <!-- 快速注册、登陆 -->
              <div class="account" style="width: 286px;">
                <ul>
                  <li @click="toggle('login')" :class="isLogin ? 'selected' : ''">账号登陆</li>
                  <li @click="toggle('register')" :class="isLogin ? '' : 'selected'">快速注册</li>
                </ul>
                <form v-if="isLogin" class="accPass">
                  <div class="form-group">
                    <input id="username" type="text" name="username" placeholder="手机号/邮箱">
                  </div>
                  <div class="form-group">
                    <input type="password" id="password" placeholder="密码">
                  </div>
                  
                  <button type="submit" class="submit" id="btnlogin">登陆</button>
                  <a href="/ucenter/uauth/findpwd">忘记密码？</a>
                    
                  <!-- 其他方式登陆 -->
                  <div class="otherLogin">
                    <p>
                      <!-- <a class="third" href="https://www.evget.com/ucenter/uauth/qq"><img src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"></a> -->

                      <!-- 
                      <a class="third" href="https://www.evget.com/ucenter/uauth/sina"><img src="http://www.sinaimg.cn/blog/developer/wiki/240.png"></a> -->
                    </p>
                  </div>
                </form>
                <form v-else class="freePass">
                  <div class="mq">
                    <div class="step step-one">
                      <div class="form-group">
                        <label>
                          <input type="number" name="Mobile" id="regmobel" placeholder="手机号">
                        </label>
                        <small data-old="请输入正确手机号"></small>
                      </div>
                      <div class="form-group">
                        <label>
                          <input type="password" id="regpass" placeholder="密码">
                          <i class="fa fa-eye-slash"></i>
                        </label>
                        <small>请输入至少6位数密码</small>
                      </div>
                      <div class="form-group">
                        <label><input type="text" name="nickname" id="regname" placeholder="用户名"></label>
                        <small data-old="用户名不能为空且不能包含特殊字符"></small>
                      </div>
                      <div class="form-group" style="overflow: hidden;">
                        <input type="text" class="form-control" placeholder="验证码" style="color:black;width:170px;float:left;margin:0px 0px;" id="code">
                        <img src="https://www.evget.com/captcha" onclick="this.src='https://www.evget.com/captcha'" id="codeImg" style="float:right;cursor: pointer;width:90px;height:35px;">
                      </div>
                      <small class="slidevali">请完成验证</small>
                        
                      <div class="form-group valigroup" style="display:none;">
                        <label>
                          <input type="text" name="yzm" id="regcode" class="inputYzm" placeholder="6位手机验证码">
                          <input type="button" class="getYzm" value="获取验证码">
                        </label>
                        <small>输入正确的验证码</small>
                      </div>
                      <button type="submit" class="submit" id="btnreg" disabled="disabled">注册</button>
                      <div class="agreement">点击“注册”表示同意网<a href="/regxieyi.html" target="_blank" style="color: #2f93de;font-size: .7rem;"> 隐私协议</a></div>
                    </div>
                    <div class="step step-two">
                      <p style="margin-bottom: 10px;">想接收到您所关注的产品最新资料和优惠吗？<i style="font-style: normal;font-size: .7rem;color: #999;">（如果留QQ邮箱可能会被归类为广告邮件）</i></p>
                      <input type="text" name="Email" placeholder="请输入你的邮箱 (选填)">
                      <small>请输入正确的邮箱地址</small>
                      <button type="button">下一步</button>
                    </div>  
                    <div class="step step-three">
                      <p style="line-height: 1.53;">关注公众号，您可以免费体验2999元VIP视频以及订单状态及时推送</p>
                      <img src="/imgs/2018/erwm_03.jpg">
                      <button type="button" class="complate" style="margin-right: 15px;">完成</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

	export default {
    data () {
      return {
        isLogin: true,
      }
    },
    mounted() {

    },
    methods: {
      toggle: function(str) {
        str == 'login' ? this.isLogin = true : this.isLogin =  false;
      }
    }
	}
</script>

<style lang="scss">
	@import '~styles/base/normalize';
  @import '~styles/base/global';
  @import '~styles/login';
  @import '~styles/mixins/clearfix';

  // @import '~styles/layui';
  .login {

  }
	.login__wrapper {
    @include clearfix;
    width: 1000px;
    background: #fff;
    margin-top: 100px;
    position: relative;
    margin: 0 auto;
  }
  .login__top {
    background-color: #155B9D;
    width: 100%;
    height: 88px;
    line-height: 88px;
    color: #fff;
    &__box {
      width: 970px;
      padding: 0 15px;
      margin: 0 auto;
      overflow: hidden;
      h4 {
        float: left;
        font-size: 28px;
        cursor: pointer;
      }
      ul {
        @include clearfix;
        float: right;
        li {
          @include clearfix;
          display: inline-block;
          margin: 0 20px;
          img {
            float: left;
            margin-top: 32px;
            margin-right: 15px;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
    
  }
</style>
