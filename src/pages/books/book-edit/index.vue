<template>
  <el-dialog :title="`${titleValue}书籍信息`" :visible.sync="dialogFormVisible" center width="40%" @close="cancelClick">
    <table class="table-content">
      <tbody>
        <tr>
          <td class="table-header">书籍编号：</td>
          <td><el-input size="mini" v-model="form.number" placeholder="请输入书籍编号"></el-input></td>
        </tr>
        <tr>
          <td class="table-header">书籍名称：</td>
          <td><el-input size="mini" v-model="form.name" placeholder="请输入书籍名称"></el-input></td>
        </tr>
        <tr>
          <td class="table-header">出版社：</td>
          <td><el-input size="mini" v-model="form.press" placeholder="请输入出版社"></el-input></td>
        </tr>
        <tr>
          <td class="table-header">作者：</td>
          <td><el-input size="mini" v-model="form.author" placeholder="请输入作者"></el-input></td>
        </tr>
        <tr>
          <td class="table-header">图片：</td>
          <td style="text-align:left;">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="mini" type="primary" plain>点击上传</el-button>
            </el-upload>
          </td>
        </tr>
        <!-- <tr>
          <td class="table-header">借书日期：</td>
          <td>
            <el-date-picker size="mini" v-model="form.borrowDate" type="date" placeholder="选择日期" style="width:260px;">
          </el-date-picker>
          </td>
        </tr> -->
      </tbody>
    </table>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" size="mini" @click="okClick">确定</el-button>
      <el-button size="mini" @click="cancelClick">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'book-edit',
  data() {
    return {
      fileList: [],
      formLabelWidth: '120px',
      dialogFormVisible: true,
      form: {
        number: null,
        name: null,
        author: null,
        press: null
        // borrowDate: null
      }
    };
  },
  props:{
    infor: {
      type: Object,
      default: {}
    },
    titleValue: {
      type: String,
      default: null
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    okClick() {
      if (this.$data.form.number && this.$data.form.name && this.$data.form.author && this.$data.form.press) {
        this.addBooksOk(this.$data.form);
        this.$emit('okClick', this.$data.form);
      } else {
        this.$message({
          type: 'error',
          message: '请填写完整书籍信息'
        });
      }
    },
    cancelClick() {
      this.$emit('cancelClick');
    },
    // 新增，修改书籍
    async addBooksOk(data) {
      let msg;
      let resp = this.$http.post(this.titleValue === '新增' ? '/books/create' : '/books/update', data);
      if (resp.success) {
        this.$message({
          type: 'success',
          message: this.$data.titleValue === '编辑' ? `更新书籍《${data.name}》信息成功` : `新增书籍《${data.name}》成功`
        });
      }
    },
  },
  mounted() {
    if (this.titleValue === '编辑') {
      this.form = this.infor;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>


