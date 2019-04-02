<template>
<div class="register-box">
  <el-card class="register">
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item label="账号名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="账号密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <div>
        <el-button type="primary" @click="registerPost" size="mini">注册</el-button>
        <el-button @click="back" size="mini">返回</el-button>
      </div>
    </el-form>
  </el-card>
</div>
</template>
<script>
export default {
  name: 'login-register',
  data() {
    return {
      form: {
        name: null,
        password: null
      }
    };
  },
  methods: {
    back() {
      this.$router.push('./');
    },
    async registerPost() {
      let postData = {
        name: this.$data.form.name,
        password: this.$data.form.password
      };
      let resp = await this.$http.post('/user/create', postData);
      if (resp.success) {
        this.$message({
          message: '注册成功',
          type: 'success'
        });
        this.$router.push('./');
      }
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.register-box{
  text-align: center;
  .register{
    width: 400px;
    margin: 40px;
    display: inline-block;
  }
}
</style>
