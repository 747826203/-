<template>
  <div class="wrapper like">
    <div class="title">猜你喜欢</div>
        <ul infinite-scroll-distance="3">
            <li v-for="(data,index) in goodList" key="data.id">
              <div class="item"  @click.prevent="which(index)">
                <router-link  to="/good">
                  <img class="good" :src="data.src" alt="">
                    <div class="tags">
                      <span class="tag" v-for="tag in data.tags" key="tag.id">{{tag.name}}</span>
                    </div>
                 </router-link>
                    <div class="col-2">
                        <span class="price">￥{{data.price}}</span>
                        <div>
                            <span class="likes_num">{{data.likes_num}}</span>
                            <img class="star1" src="../../assets/images/star.png" v-show="!data.isLike" @click.stop.prevent="toggle(index)">
                            <img class="star0" src="../../assets/images/star_y.png" v-show="data.isLike" @click.stop.prevent="toggle(index)">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        items: [
            {
                id: '1',
                src: 'http://s3.mogucdn.com/p2/161217/10715149_4d716kh1ag04bfjk1fbibhj61e084_640x960.jpg_640x854.v1cAC.70.webp',
                price: '¥18.8',
                likes_num: '22062',
                isLike: false,
                tags:[ 
                    {id: '1', name: '反光太阳镜'}, 
                    {id: '2', name: '圆脸'},
                    {id: '3', name: '大框'},
                    {id: '4', name: '瘦脸'},
                    {id: '5',name: '潮流'},
                    {id: '6',name: '百搭'}
                ]
            },
            {
                id: '2',
                src: 'http://s3.mogucdn.com/p2/170226/93103041_34b7aa1labh04fff6k4ik3798a1hg_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥19.9',
                likes_num: '1112',
                isLike: false,
                tags:[ 
                    {id: '1', name: '三折雨伞'}, 
                    {id: '2', name: '新创意'},
                    {id: '3', name: '透明'},
                    {id: '4', name: '可爱'},
                    {id: '5',name: '加厚'},
                    {id: '6',name: '塑料'}
                ]
            },
            {
                id: '3',
                src: 'http://s3.mogucdn.com/mlcdn/c45406/170606_7flld2gdkbf5c7kgjh6b11g1f08b1_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥59',
                likes_num: '3958',
                isLike: false,
                tags:[ 
                    {id: '1', name: '打底背心'}, 
                    {id: '2', name: '百搭'},
                    {id: '3', name: '字母'},
                    {id: '4', name: '印花'},
                    {id: '5',name: '圆领中长款'},
                    {id: '6',name: '时尚'},
                    {id: '7',name: '宽松显瘦'}
                ]
            },
            {
                id: '4',
                src: 'http://s3.mogucdn.com/mlcdn/c45406/170404_34b54abd10g8kei4cdj3akaf2fcl4_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥68',
                likes_num: '12311',
                isLike: false,
                tags:[ 
                    {id: '1', name: '短袖雪纺衫'}, 
                    {id: '2', name: '阔腿'},
                    {id: '3', name: '木耳边'},
                    {id: '4', name: '收腰'},
                    {id: '5',name: '宽松'}
                ]
            },
            {
                id: '5',
                src: 'http://s3.mogucdn.com/mlcdn/c45406/170327_76hjdakdfd1jag4h2k7i3c02k8cf6_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥11.6',
                likes_num: '2017',
                isLike: false,
                tags:[ 
                    {id: '1', name: '拯救饰界'}, 
                    {id: '2', name: '长款耳环'},
                    {id: '3', name: '防过敏'},
                    {id: '4', name: '气质'},
                    {id: '5',name: '个性'},
                    {id: '6',name: '简约'}
                ]
            },
            {
                id: '6',
                src: 'http://s3.mogucdn.com/mlcdn/c45406/170330_56khefahbic9lbkik02l6jah7433l_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥48',
                likes_num: '2113',
                isLike: false,
                tags:[ 
                    {id: '1', name: '防晒衣'}, 
                    {id: '2', name: '连帽'},
                    {id: '3', name: '短款'},
                    {id: '4', name: '宽松'},
                    {id: '5',name: '长袖'},
                    {id: '6',name: '薄款'},
                    {id: '7',name: '百搭'},
                    {id: '8',name: '白色'}
                ]
            },
            {
                id: '7',
                src: 'http://s3.mogucdn.com/p1/160401/104855702_ifrginbrgfqtcolbg4zdambqmeyde_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥38.5',
                likes_num: '51651',
                isLike: false,
                tags:[ 
                    {id: '1', name: '时尚套装'}, 
                    {id: '2', name: '哈伦'},
                    {id: '3', name: '韩版'}
                ]
            },
            {
                id: '8',
                src: 'http://s3.mogucdn.com/mlcdn/c45406/170604_6d26h54c0a3cgc5dabibkf03lgce2_640x960.jpg_360x480.v1cAC.70.webp',
                price: '¥69.19',
                likes_num: '6456',
                isLike: false,
                tags:[ 
                    {id: '1', name: '无袖背心裙'}, 
                    {id: '2', name: '收腰'},
                    {id: '3', name: '立领'},
                    {id: '4', name: '系带'},
                    {id: '5',name: '套头'},
                    {id: '6',name: '韩版'}
                ]
            },
           
        ]
    }
  },
  created(){
    this.axios.get('api/index').then(data => {
        if(data.status){
            this.$store.commit('obtain', data.data.items)
        }
    })
  },
    computed: {
    goodList() {
        return this.$store.state.goodList;
    }
  },
  methods: {
    toggle(index) {
            this.goodList[index].isLike = !this.goodList[index].isLike 
            if(this.goodList[index].isLike === true){
                this.goodList[index].likes_num++;
            } else{
                this.goodList[index].likes_num--;
            }
    },
    which(index) {
        this.$store.commit('which', index);
    }
  
}}
</script>
<style scoped>
    .title {
       font-size: .75rem;
       font-weight: normal;
       margin: 1.1rem 0;
       vertical-align: center;
       text-align: center;
    }
    .star {
        width: 1rem !important;
        position: relative;
    }
    .like ul {
        display: flex;
        flex-wrap: wrap;
    }
    .like li {
        width: 46%;
        background-color: #fff;
        margin-left: 2.6%;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: .4rem;
    }
    .tag {
        color: rgb(90,111,122);
        font-size: .8rem;
        margin: .1rem;
        padding: .1rem;
        background: rgb(239,243,246);   
    }
    .tags {
        margin: .2rem;
    }
    .col-2 {
        margin: .3rem .3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .col-2 >div {
        display:flex;
        align-items: center;
    }
    .price {
        font-size: .8rem;
        font-weight: bold;
    }
    .likes_num {
        font-size: .65rem;
        padding: .4rem;
        color: #777;
    }
    .good {
        width: 9rem;
        height: 12rem;
    }
</style>
