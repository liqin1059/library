<template>
  <div class="left-nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <router-link to="/borrow">
        <el-menu-item index="1">
          <i class="el-icon-search"></i>
          <span slot="title">查询书籍</span>
        </el-menu-item>
      </router-link>
      <router-link to="/return">
      <el-menu-item index="2">
        <i class="el-icon-refresh"></i>
        <span slot="title">归还书籍</span>
      </el-menu-item>
      </router-link>
      <router-link to="/books">
      <el-menu-item index="3">
        <i class="el-icon-tickets"></i>
        <span slot="title">书籍管理</span>
      </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'top-nav',
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.left-nav{
}
</style>

