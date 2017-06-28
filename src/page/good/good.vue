<template>
  <div>
    <div class="good_wrapper white">
       <swiper>
          <swiper-slide v-for="(item,index) in goodList">
              <img :src="item.pic[1].src" class="Pic">
          </swiper-slide>
        </swiper>
        <img src="" alt="">
      <div class="info">
        <span class="title">{{goodList[index].title}}</span>
        <p class="price">￥<span class="bigprice">{{goodList[index].price}}</span>&nbsp
            <del>{{goodList[index].origin_price}}</del>
        </p>
        
        <p class="free">免邮费</p>
        <div>
          <ul>
            <li><img src="http://s11.mogucdn.com/p2/161121/upload_804deld49f8i13gb2gdji12k6h9h2_60x60.png_60x60.webp" alt=""><span>退货补运费</span></li>
            <li><img src="http://s3.mogucdn.com/p2/161121/upload_4c9fi653lcljc0ig512il61jh3ljl_60x60.png_60x60.webp" alt=""><span>全国包邮</span></li>
            <li><img src="http://s3.mogucdn.com/p2/161121/upload_4c9fi653lcljc0ig512il61jh3ljl_60x60.png_60x60.webp" alt=""><span>7天无理由退货</span></li>
            >
          </ul>
        </div>
      </div>
    </div>
    <div class="bottomBar">
        <div><img src="../../assets/images/talk.png" alt=""><span>客服</span></div>
        <div><img src="../../assets/images/star.png"><img src="../../assets/images/star_y.png" v-show="false"><span>收藏</span></div>
        <div><img src="../../assets/images/xiaodian.jpg" class="xiaodian"><span>小店</span></div>
        <span class="first" v-show="layer" @click.stop.prevent="showLayer">加入购物车</span>
        <span class="second" >立即购买</span>
    </div>

    <div class="layer">
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layer: false
    }
  },
  computed: {
    goodList() {
        return this.$store.state.goodList;
    },
    index() {
      return this.$store.state.which;
    }
  },
  methods: {
    showLayer() {
      data.layer = true;
    }

  },
  created () {

  }

}
</script>

<style scoped>
.Pic {
  width: 100%;
}
.swiper-slide {
  height: 23rem;
}
.white {
  background-color: #fff;
}
.info {
  width: 90%;
  padding-left: 5%;
  padding-top: .6rem; 
}
.title {
  font-size: .9rem;
}
.bigprice {
  font-size: 1.8rem;
}
.price {
  font-size: .7rem;
  color: #000;
  margin-bottom: .6rem;
}
p {
  font-size: .8rem;
  color: #666;
}
.free {
  padding-bottom: .4rem; 
  border-bottom: 1px solid #666;
}
ul {
  display: flex;
  font-size: .75rem;
  margin: .5rem 0;
  color: #666;
}
li {
    display: flex;
    margin-right: .5rem;
    align-items: center;
}
.bottomBar {
  position: fixed;
  bottom: 0;
  height: 2.6rem;
  display: flex;
  background: #fff;
  width: 100%;
  color: #666;
  font-size: .7rem;
}
.bottomBar img {
  width: 1rem;
}
.bottomBar > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  width: 17%;
}
.bottomBar > span {
  line-height: 2.6rem;
  font-size: .8rem;
  width: 24.5%;
  text-align: center;
}
.bottomBar .first {
  background: rgb(255,230,232);
  color: rgb(255,73,139);
}
.bottomBar .second {
  background: rgb(255,73,139);
  color: #fff;
}
.layer {
  
}
</style>
