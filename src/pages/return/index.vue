<template>
  <div class="borrow">
    <h1>归还书籍</h1>
    <!-- <el-card class="box-card operation-card">
      <el-button icon="el-icon-search" type="primary" size="mini">搜索书籍</el-button>
    </el-card> -->
      <el-card class="box-card table-card">
        <el-table :data="tableData" v-loading="loading" :border="true" :stripe="true" 
                  :header-cell-style="tableHeaderStyle" class="table-list" size="mini">
          <el-table-column prop="number" label="书籍编号"></el-table-column>
          <el-table-column prop="name" label="书籍名称"></el-table-column>
          <el-table-column prop="author" label="书籍作者"></el-table-column>
          <el-table-column prop="press" label="出版社"></el-table-column>
          <el-table-column prop="borrowDate" label="借书日期"></el-table-column>
          <el-table-column prop="fine" label="罚款"></el-table-column>
          <el-table-column label="操作" width="220px" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="returnConfirm(scope.$index, scope.row)" plain>归还</el-button>
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
        orgId: null
      },
      loading: false,
      tableHeaderStyle: {
        // textAlign: 'center',
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
    // 借出书籍
    returnConfirm(index, row) {
      this.$confirm(`此操作将确认归还书籍《${row.name}》, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: `已成功归还书籍《${row.name}》`
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: `已取消归还书籍《${row.name}》`
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


