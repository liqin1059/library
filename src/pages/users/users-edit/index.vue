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
        <el-button @click="back" size="mini">返回</el-button>
        <el-button type="primary" @click="userUpdate" size="mini">确认</el-button>
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
      this.$router.push('/users');
    },
    async userUpdate() {
      let postData = {
        name: this.$data.form.name,
        password: this.$data.form.password,
        id: this.$route.query.id
      };
      let resp = await this.$http.post('/user/update', postData);
      if (resp.success) {
        this.$message({
          message: resp.desc,
          type: 'success'
        });
        this.$router.push('/users');
      }
    },
    async userInit() {
      let getData = {
        id: this.$route.query.id
      };
      let resp = await this.$http.get('/user/search', getData);
      if (resp.success) {
        this.$data.form = resp.data;
      }
    }
  },
  mounted() {
    this.userInit();
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
