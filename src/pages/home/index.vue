<template>
  <div>
    <header class="home-header">
      <nav-top></nav-top>
    </header>
    <aside class="home-aside">
      <nav-left></nav-left>
    </aside>
    <article class="home-article">
      <transition name="slide-fade">
        <router-view/>
      </transition>
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
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
// .slide-fade-leave-active {
//   transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
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

