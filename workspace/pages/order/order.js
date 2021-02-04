// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,     
    currentTab:0,
    menu:[         //菜品
      {id:0,name:"蔬菜",goods:[{id:1,title:"菠菜", price:10, num:0},
                            {id:2, title:"油麦菜",  price:15, num:0},{id:3, title:"菠菜", price:10, num:0},{id:4, title:"菠菜", price:10,num:0},{id:5, title:"菠菜", price:10, num:0},{id:6, title:"菠菜", price:10, num:0},{id:7, title:"菠菜", price:10, num:0},{id:8, title:"菠菜", price:10, num:0}
                           ]},
      {id:1,name:"肉类",goods:[{id:9, title:"羊肉", price:10, selected:false,num:0},
                            {id:2, title:"肥牛",  price:15, selected:false,num:0}
                           ]}
  ],
  foodList:[],   //菜单
  cartList:[],   //购物车
  cart:[]        //购物车数组
  },

//右菜单变动
  switchNav: function (e) {
    var id = e.target.id;
    var menu=this.data.menu;
    var foodList=this.data.foodList;
      this.setData({
        foodList:menu[id].goods,
        currentTab: id,
        active: id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  //  //菜品选中事件
  //  selectList(e){
  //   const index=e.currentTarget.dataset.index;
  //   let goods=this.data.goods;
  //   const selected=goods[index].selected;
  //   goods[index].selected=!selected;
  //   this.setData({
  //     goods: goods
  //   });
  // },

  //菜品增加数量
  addCount(e){
    const index=e.target.dataset.index;
    var cart=this.data.cart;  //数组
    var flag=0;  
    this.data.foodList[index].num+=1;  
    if(cart.length>0){
      for (var i in cart){
        if(cart[i].title==this.data.foodList[index].title){
          flag=1;
          break;
        }  
      } 
      if(flag==0){
        cart.push(this.data.foodList[index]);
          }
    }else{
      cart.push(this.data.foodList[index]);
    }
    this.setData({
      foodList:this.data.foodList,
      cartList:cart
    });
    this.getTotalPrice();
  },

  // 绑定减数量事件
minusCount(e) {
  var cart=this.data.cart;
  const index=e.target.dataset.index;
  this.data.foodList[index].num-=1;
  for(let i in cart){
    if(cart[i].title==this.data.foodList[index].title){
    if(cart[i].num<=0){
      cart.splice(i, 1);
    }
    }
  }
  this.setData({
    foodList:this.data.foodList,
      cartList:cart
  });
  this.getTotalPrice();
},

// 计算总价
getTotalPrice() {
  let  cart= this.data.cart;  // 获取购物车列表
  let total = 0;      
  for (let i = 0; i < cart.length; i ++) {   // 循环列表得到每个数据
        total += cart[i].num * cart[i].price;   // 所有价格加起来
  }
  this.setData({                          // 最后赋值到data 中渲染到页面
    totalPrice: total.toFixed(2)
  });
},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})