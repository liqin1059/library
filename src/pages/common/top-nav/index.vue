<template>
  <header class="nav-top-header">
    <h1>书籍管理系统</h1>
    <div class="user-name">用户名</div>
  </header>
</template>
<script>
export default {
  name: 'top-nav',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.nav-top-header{
  clear:both;
  line-height: 52px;
  color: #ffffff;
  .user-name{
    float: right;
    margin-right: 40px;
    cursor: pointer;
  }
  h1{
    margin: 0;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    width: 160px;
    padding-left: 40px;
    background: #1674d5;
  }
}
</style>

