<template>
<div class="borrow">
  <h1>查询书籍</h1>
  <el-card class="box-card operation-card">
    <el-form ref="form" :model="form" :inline="true" label-width="100px" size="mini">
        <el-form-item label="书籍名称">
          <el-input v-model="form.name" placehoder="请输入书籍名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-search" @click="searchBooks()">搜索</el-button>
        </el-form-item>
    </el-form>
  </el-card>
    <el-card class="box-card table-card">
      <el-table :data="tableData" v-loading="loading" :border="true" :stripe="true" 
                :header-cell-style="tableHeaderStyle" class="table-list" size="mini">
        <el-table-column prop="number" label="书籍编号"></el-table-column>
        <el-table-column prop="name" label="书籍名称"></el-table-column>
        <el-table-column prop="author" label="书籍作者"></el-table-column>
        <el-table-column prop="press" label="出版社"></el-table-column>
        <el-table-column prop="borrowDate" label="借书日期"></el-table-column>
        <el-table-column label="操作" width="220px" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="borrowConfirm(scope.$index, scope.row)" plain>借出</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      @size-change="getDataInit"
      @current-change="getDataInit"
      :current-page.sync="currentPage"
      :page-sizes="[10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPages"
       class="pages-number">
    </el-pagination>
  </el-card>
</div>
</template>
<script>
export default {
  name: 'borrow',
  data() {
    return {
      tableData: [],
      form: {
        name: null
      },
      loading: false,
      tableHeaderStyle: {
        fontWeight: 'bold',
        color: '#9BA4AE'
      },
      currentPage: 1,
      pageSize: 10,
      totalPages: 0
    };
  },
  methods: {
    async getDataInit() {
      this.$data.loading = true;
      let resp = await this.$http.get('/books/list');
      this.$data.loading = false;
      if (resp.success) {
        this.$data.tableData = resp.data;
      }
    },
    async searchBooks() {
      this.$data.loading = true;
      let resp = await this.$http.get('/books/search',{keyword: this.$data.form.name});
      this.$data.loading = false;
      if (resp.success) {
        this.$data.tableData = resp.data;
      }
    },
    // 借出书籍
    borrowConfirm(index, row) {
      this.$confirm(`此操作将确认借出书籍《${row.name}》, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: `已成功借出书籍《${row.name}》`
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: `已取消借出书籍《${row.name}》`
        });
      });
    }
  },
  mounted() {
    this.getDataInit();
  }
};
</script>
<style lang="scss" scoped>
h1{
  font-size: 16px;
  line-height: 18px;
  color: #5c5959;
  padding: 0 12px;
  font-weight: 400;
  border-left: 4px solid #409EFF;
}
</style>


