<template>
<div class="borrow">
  <h1>书籍管理</h1>
  <el-card class="box-card operation-card">
    <el-button icon="el-icon-plus" type="primary" size="mini" @click="addBooks">新增书籍</el-button>
    <!-- <el-form ref="form" :model="form" :inline="true" label-width="100px" size="mini">
        <el-form-item label="新增书籍" prop="orgId">
          <el-select v-model="form.orgId" placeholder="新增书籍" :clearable="true">
            <el-option v-for="(item, index) in orgTree" :key="index" :label="item.shortName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-search" @click="getDataInit('search')">查询</el-button>
          <el-button size="mini" icon="el-icon-refresh" @click.native="resetForms('form')">重置</el-button>
        </el-form-item>
    </el-form> -->
  </el-card>
    <el-card class="box-card table-card">
      <el-table :data="tableData" v-loading="loading" :border="true" :stripe="true" 
                :header-cell-style="tableHeaderStyle" class="table-list" size="mini">
        <el-table-column prop="number" label="书籍编号"></el-table-column>
        <el-table-column prop="name" label="书籍名称"></el-table-column>
        <el-table-column prop="press" label="出版社"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column prop="borrowDate" label="借书日期"></el-table-column>
        <el-table-column label="操作" width="220px" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="editBooks(scope.$index, scope.row)" plain>编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteBooks(scope.$index, scope.row)" plain>删除</el-button>
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
  <book-edit :infor="infor" :title-value="titleValue" v-if="editShow" @okClick="editOkClick" @cancelClick="editShow = false"></book-edit>
</div>
</template>
<script>
import bookEdit from '@/pages/books/book-edit';

export default {
  name: 'borrow',
  components: {
    'book-edit': bookEdit
  },
  data() {
    return {
      titleValue: null,
      editShow: false,
      infor: {},
      tableData: [],
      form: {
        orgId: null
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
    resetForms() {

    },
    async getDataInit() {
      this.$data.loading = true;
      let resp = await this.$http.get('/books/list');
      this.$data.loading = false;
      if (resp.success) {
        this.$data.tableData = resp.data;
      }
    },
    addBooks() {
      this.$data.infor = {};
      this.$data.editShow = true;
      this.$data.titleValue = '新增';
    },
    editBooks(index, row) {
      this.$data.infor = row;
      this.$data.editShow = true;
      this.$data.titleValue = '编辑';
    },
    editOkClick(data) {
      this.$data.editShow = false;
      this.getDataInit();
    },
    deleteBooks(index, row) {
      this.$confirm(`此操作将将书籍《${row.name}》从书库中移除, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteBooksHttp(row);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: `已取消从书库中移除书籍《${row.name}》`
        });
      });
    },
    async deleteBooksHttp(row) {
      this.$data.loading = true;
      let resp = await this.$http.get('/books/delete', {id: row._id});
      this.$data.loading = false;
      if (resp.success) {
        this.getDataInit();
        this.$message({
          type: 'success',
          message: `已成功从书库中移除书籍《${row.name}》`
        });
      }
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


