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
      <router-link v-for="(item, index) in menuData" :key="index" :to="item.url">
        <el-menu-item :index="index + ''">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'top-nav',
  data() {
    return {
      menuData: [
        {
          url: '/borrow',
          name: '查询书籍',
          icon: 'el-icon-search'
        },
        {
          url: '/return',
          name: '归还书籍',
          icon: 'el-icon-refresh'
        },
        {
          url: '/books',
          name: '书籍管理',
          icon: 'el-icon-tickets'
        }
      ]
    };
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
  // border-right: 1px solid #545c64;
}
</style>

