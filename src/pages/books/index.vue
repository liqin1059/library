<template>
<div class="borrow">
  <h1>书籍管理</h1>
  <el-card class="box-card operation-card">
    <el-button icon="el-icon-plus" type="primary" size="mini">新增书籍</el-button>
    <!-- <el-form ref="form" :model="form" :inline="true" label-width="100px" size="mini">
        <el-form-item label="结算机构简称" prop="orgId">
          <el-select v-model="form.orgId" placeholder="请选择结算机构简称" :clearable="true">
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
      <el-table :data="productList" v-loading="dataLoading" :border="true" :stripe="true" 
                :header-cell-style="tableHeaderStyle" class="table-list" size="mini">
        <el-table-column prop="number" label="书籍编号"></el-table-column>
        <el-table-column prop="name" label="书籍名称"></el-table-column>
        <el-table-column prop="athour" label="书籍作者"></el-table-column>
        <el-table-column prop="borrowDate" label="借书日期"></el-table-column>
        <el-table-column label="操作" width="220px" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="deleteBooks(scope.$index, scope.row)" plain>编辑</el-button>
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
</div>
</template>
<script>
export default {
  name: 'borrow',
  data() {
    return {
      productList: [
        {
          number: 1245,
          name: '书11',
          athour: '书籍作者',
          borrowDate: '2018-02-02'
        },
        {
          number: 1245,
          name: '书11',
          athour: '书籍作者',
          borrowDate: '2018-02-02'
        },
        {
          number: 1245,
          name: '书11',
          athour: '书籍作者',
          borrowDate: '2018-02-02'
        }
      ],
      form: {
        orgId: null
      },
      dataLoading: false,
      tableHeaderStyle: {
        textAlign: 'center',
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
    getDataInit() {},
    deleteBooks() {

    }
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


