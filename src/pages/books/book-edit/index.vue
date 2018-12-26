<template>
  <el-dialog :title="`${titleValue}书籍信息`" :visible.sync="dialogFormVisible" center width="500px" @close="cancelClick">
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
          <td><el-input size="mini" v-model="form.athour" placeholder="请输入作者"></el-input></td>
        </tr>
        <tr>
          <td class="table-header">借书日期：</td>
          <td>
            <el-date-picker size="mini" v-model="form.borrowDate" type="date" placeholder="选择日期" style="width:260px;">
          </el-date-picker>
          </td>
        </tr>
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
      formLabelWidth: '120px',
      dialogFormVisible: true,
      form: {
        number: null,
        name: null,
        athour: null,
        press: null,
        borrowDate: null
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
    okClick() {
      if (this.$data.form.number && this.$data.form.name && this.$data.form.athour && this.$data.form.press && this.$data.form.borrowDate) {
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
    }
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


