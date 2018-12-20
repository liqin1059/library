<template>
  <header class="nav-top-header">
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
}
</style>

