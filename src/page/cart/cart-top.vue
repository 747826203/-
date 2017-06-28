<template>
     <div class="topbar">
        <div class="arrow_box" @click="back"><i class="arrow"></i></div>
        <span class="topbar tittle">购物车</span>
        <div class="topbar right">
          <span>编辑</span>
          <a href="#" class="im-talk">
             <i class="talk">&nbsp;&nbsp;</i>
          </a>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  method: {
    back : function(){
      window.history.back();
    }
  }
  
}
</script>
<style scoped>
@import "../../assets/css/topbar.css";

</style>
