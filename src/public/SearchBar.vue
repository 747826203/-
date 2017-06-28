<template>
  <div class="wrapper">
    <div class="SearchBar">
        <a href="#" class="im-talk"><i class="talk">&nbsp;&nbsp;</i></a>
        <mt-search v-model="value" cancel-text="取消" placeholder="    露肩短袖t恤">
        </mt-search>
        <router-link to="/cart"><i class="cart">&nbsp;&nbsp;</i></router-link>
      </div>
  </div>
</template>
 
<script>

export default {
  data() {
    return {

    }
  }
  
}
</script>

<style>
    @import "../assets/css/SearchBar.css";
</style>
