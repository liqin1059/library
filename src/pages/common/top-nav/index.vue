<template>
  <header class="nav-top-header">
    <h1>书籍管理系统</h1>
    <div class="user-name">
        <el-button size="mini" type="primary" slot="reference">{{ userInfor.name }}</el-button>
        <el-button size="mini" type="primary" slot="reference" @click="loginOut">退出登录</el-button>
    </div>
  </header>
</template>
<script>
export default {
  name: 'top-nav',
  data() {
    return {
      userInfor: {
        name: ''
      }
    };
  },
  methods: {
    async loginOut() {
      let resp = await this.$http.get('/user/logout');
      if (resp.success) {
        // 清除登录信息
        this.$userLogin.removeLoginInfo();
        this.$router.push('/');
      }
    },
    getUserInfor() {
      this.$data.userInfor = this.$userLogin.getLoginInfo();
    }
  },
  mounted() {
    this.getUserInfor();
  }
};
</script>
<style lang="scss" scoped>
.nav-top-header{
  clear:both;
  line-height: 52px;
  color: #ffffff;
  .user-name{
    float: right;
    margin-right: 40px;
    cursor: pointer;
  }
  h1{
    margin: 0;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    width: 160px;
    padding-left: 40px;
    background: #1674d5;
  }
}
</style>

