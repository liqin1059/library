<template>
  <div>
    <header class="home-header">
      <nav-top></nav-top>
    </header>
    <aside class="home-aside">
      <nav-left></nav-left>
    </aside>
    <article class="home-article">
      <router-view/>
    </article>
  </div>
</template>
<script>
import navLeft from '@/pages/common/left-nav';
import navTop from '@/pages/common/top-nav';

export default {
  name: 'home',
  components: {
    'nav-left': navLeft,
    'nav-top': navTop,
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.home-header{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height:52px;
  background: #409EFF;
}
.home-aside{
  position: absolute;
  top: 52px;
  bottom: 0;
  left: 0;
  width: 200px;
  overflow-x: hidden;
  background: rgb(84, 92, 100);
}
.home-article{
  position: absolute;
  top: 52px;
  right: 0;
  left: 200px;
  bottom: 0;
  overflow: auto;
  background: #f2f2f2;
  padding: 20px;
}
</style>

