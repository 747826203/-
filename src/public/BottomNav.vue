<template>
  <div class="bottom-nav">
   <div class="flex">
    <div class="nav-item" v-for='item in navItem' :key='item.id'>
       <router-link :to="item.path" > 
          <img :src="item.src" alt="">
          <span>{{item.name}}</span>
       </router-link>
     </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      navItem: [
        {
          id: '1',
          name: '首页',
          path: '/',
          src: 'https://s2.mogucdn.com/p2/170315/40592144_6ii829464gk34ai4hkdf14cdea05d_44x44.png'
        },
        {
          id: '2',
          name: '分类',
          path: '/category',
          src: 'https://s2.mogucdn.com/p2/170315/40592144_0b8i11l822b0adfjaaifl11ig86f1_44x44.png'
        },
        {
          id: '3',
          name: '购物车',
          path: '/cart',
          src: 'https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png'
        },
        {
          id: '4',
          name: '我的',
          path: '/mine',
          src: 'https://s2.mogucdn.com/p2/170315/40592144_35ikl8db8a4lfa3f29k8k4b9k3ji2_44x44.png'
        }
      ]
    }
  }
  
}
</script>

<style>
.flex {
  display: flex;
}
.bottom-nav {
  z-index: 1;
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  font-size: .73rem;

  }
  .nav-item {
    width: 25%;
    height: 2.5rem;
    padding-left: 1.55rem;
    padding-top: .25rem;
  }
  .nav-item img {
    display: block;
    width: 1.1rem;
    padding-left: .18rem;
  }
</style>
