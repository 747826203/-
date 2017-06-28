var app = new Vue({
  data: {},
  el: '#app',
  render: h => h(App),
  router,
  store,
  created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      //cookie操作方法在源码里有或者参考网上的即可
      if(!this.getCookie('session')){
        //如果没有登录状态则跳转到登录页
        this.$router.push('/login');
      }else{
        //否则跳转到登录后的页面
        this.$router.push('/user_info');
      }
    }
  }
})