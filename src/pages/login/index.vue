<template>
  <section class="login">      
    <div class="total_box">
      <h1>书籍管理系统</h1>
      <div class="form_box">
        <div class="form_input">
          <p class="form_holder" :class="{'p-active': nameClick || LoginForm.loginName}" @click="check('name')">账号</p>
          <!-- <p class="form_holder p-active" @click="check('name')">账号</p> -->
          <input autocomplete="off" v-model="LoginForm.loginName" @click="check('name')" @blur="blur('name')" :class="{'input-active': usernameCheck}"/>
          <p v-if="usernameCheck" style="text-align:right;"><img src="@/assets/warn.png" class="warnImg" v-if="usernameCheck">账号不能为空</p>                  
        </div>
        <div class="form_input">
          <p class="form_holder" :class="{'p-active': pswClick || LoginForm.loginPsw}" @click="check('password')">密码</p>
          <!-- <p class="form_holder p-active" @click="check('password')">密码</p> -->
          <input autocomplete="off" v-model="LoginForm.loginPsw" @keyup.enter="submitLogin" :type="passwordType" @click="check('password')" @blur="blur('password')" :class="{'input-active': passwordCheck}"/>
          <p v-if="passwordCheck" style="text-align:right;"><img src="@/assets/warn.png" class="warnImg" v-if="passwordCheck">密码不能为空</p>
        </div>
        <el-button type="primary" class="login-button" @click.native="submitLogin" v-loading.lock="fullscreenLoading">确认登录</el-button>
        <!-- <div class="remember">
          <el-checkbox v-model="LoginForm.rememberMe" size="mini">记住密码</el-checkbox>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      fullscreenLoading: false,
      nameWarn: false,
      passwordWarn: false,
      passwordType: 'password',
      LoginForm: {
        loginName: '',
        loginPsw: '',
        rememberMe: false,
        vrifyCode: ''
      },
      usernameCheck: false,
      passwordCheck: false,
      nameClick: false,
      pswClick: false
    };
  },
  methods: {
    blur(value) {
      if (value === 'name') {
        this.nameClick = false;
      } else {
        this.pswClick = false;
      }
    },
    check(value) {
      if (value === 'name') {
        this.$data.usernameCheck = false;
        this.nameClick = true;
      } else {
        this.$data.passwordType = 'password';
        this.$data.passwordCheck = false;
        this.pswClick = true;
      }
    },
    async submitLogin() {
      if (!this.$data.LoginForm.loginName && !this.$data.LoginForm.loginPsw) {
        this.$data.usernameCheck = true;
        this.$data.passwordCheck = true;
      } else if (!this.$data.LoginForm.loginName) {
        this.$data.usernameCheck = true;
      } else if (!this.$data.LoginForm.loginPsw) {
        this.$data.passwordCheck = true;
      } else {
        this.$router.push('/home');
        // this.$data.fullscreenLoading = true;
        // let resp = await this.$http.post('/ajaxLogin', { data: this.$data.LoginForm }, false);
        // this.$data.fullscreenLoading = false;
        // if (resp.success) {
        //   // 设置token
        //   this.$userLogin.setLoginInfo(resp.data.loginRespVo);
        // }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-radio{
  margin: 10px;
}
.popover{
  position: relative;
  width: 100vw;
  height: 100vh;
}
.popover-bg{
  background: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.popover-content{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #FFF;
  min-width: 510px;
  z-index: 11;
  border-radius: 4px;
  .popover-content-header{
    color: #fff;
    font-size: 16px;
    padding: 10px;
    line-height: 32px;
    background: #666;
  }
  .popover-content-content{
    min-height: 300px;
    padding: 20px 20px 81px 20px;
    .el-tag{
      font-size: 16px;
      cursor: pointer;
    }
  }
  .popover-content-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid #dcdcdc;
  }
}
*{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px white inset
}
.p-active{
  font-size: 12px;
  transform: translate3d(0,-28px,0) scale(1);
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.input-active{
  border-bottom: 2px solid #FFCA5A!important;
}
h1{
  font-size: 20px;
  color: #0E1726;
  margin:40px 0 22px 0;
  line-height: 34px;
}
.login{
  background: #F4F7FD;
  // height: 100vh;
  // width: 100vw;
  overflow: auto;
  text-align: center;
  .form_box{
    width:280px;
    display:inline-block;
  }
  .form_input{
    position: relative;
    margin-bottom: 32px;
    font-size: 16px;
    img{
      width:18px;
      height:18px;
      vertical-align: middle;
    }
    .form_holder{
      position: absolute;
      top: 0;
      left: 0;
      line-height:46px;
      user-select: none;
      pointer-events: none;
      backface-visibility: hidden;
    }
    p{
      text-align: left;
      color:rgba(0, 0, 0, 0.38);
      z-index:1;
    }
  }
  .total_box{
    width: 510px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 4px;
    padding-bottom: 40px;
    box-shadow: 0 6px 20px 5px rgba(40, 120, 255, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.05);
  }
  .login_infor{
    padding: 20px 40px;
  }
  .login-button{
    width: 100%;
  }
  .el-input-group__prepend {
    background-color: #fff;
  }
  .el-input{   
    margin-bottom: 2px;
  }
  // .el-button{
  //   width: 450px;
  // }  
  input{
    border: none;
    border-bottom:1px solid #3e4957;
    background: #fff;
    width: 100%;
    line-height: 23px;
    padding: 28px 0 12px 0;
    border-radius: 0;
    color: #333;
    outline:none;
    height:32px;
    z-index:2;
  }
  input:hover{
    border: none;
    outline: none;
    border-bottom:1px solid #3e4957;
  }
  input:focus{
    border: none;
    outline: none;
    border-bottom:1px solid #3e4957;
  }
  .nameBG{
    background-image: url("../../assets/user.png");     
  }
  .passwordBG{
    background-image: url("../../assets/password.png");
  }
  .remember{
    text-align: right;
    margin-top: 16px;
    
  }
}
.el-checkbox__label{
  font-size: 12px;
}
</style>
