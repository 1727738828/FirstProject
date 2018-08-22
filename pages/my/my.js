// pages/me/me.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面配置
    winWidth:0,
    winHeight:0,
    // tab切换
    currentTab:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: "个人中心"
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#fde23d'
    })
  },

  // 滑动切换tab
  bindChange:function(e){
    var that=this;
    that.setData({currentTab:e.detail.current});
  },

  // 点击tab切换
  swichNav:function(e){
    var that=this;
    if(this.data.currentTab===e.target.dataset.current){
      return false;
    }else{
      that.setData({
        currentTab:e.target.dataset.current
      })
    }
  }
})