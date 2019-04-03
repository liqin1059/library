<template>
<div>
  <h1 class="title-h1">用户管理</h1>
  <el-card class="box-card table-card">
      <!-- <el-button @click="addUser()" type="primary" plain size="mini">新增用户</el-button> -->
      <el-table :data="tableData" :border="true" :stripe="true" 
                :header-cell-style="tableHeaderStyle" class="table-list" size="mini">
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="time" label="注册日期"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="userEdit(scope.row)" type="primary" plain size="mini">编辑</el-button>
          <el-button @click="userDelete(scope.row)" type="warning" plain size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>
<script>
export default {
  name: 'users',
  data() {
    return {
      loading: false,
      tableData: [],
      tableHeaderStyle: {
        fontWeight: 'bold',
        color: '#9BA4AE'
      }
    };
  },
  methods: {
    async tableDataInit() {
      this.$data.loading = true;
      let resp = await this.$http.get('/user/list');
      this.$data.loading = false;
      if (resp.success) {
        this.$data.tableData = resp.data.dataList;
      }
    },
    async userEdit(row) {
      this.$router.push({
        path: '/users-edit',
        query: {
          id: row._id
        }
      })
    },
    async userDelete(row) {
      this.$data.loading = true;
      let resp = await this.$http.get('/user/delete', {id: row._id});
      this.$data.loading = false;
      if (resp.success) {
        this.$message({
          message: '删除用户成功',
          type: 'success'
        });
        this.tableDataInit();
      }
    },
  },
  mounted() {
    this.tableDataInit();
  }
}
</script>
<style lang="scss" scoped>

</style>

