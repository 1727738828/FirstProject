// pages/detail/detail.js

const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面配置
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    author: [
      '唐家三少',
      '天蚕土豆',
      '辰东',
      '风凌天下'
    ],
    interval: 2000,
    duration: 500,
    recommend_id: '',
    recommend: '',
    recommend_detail: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    var that = this;
    that.setData({
      recommend_id: e.recommend_id,
      recommend: e.recommend,
    });
    util.ask("type", function(data) {
      if (e.recommend == "recom"){
        var length = data[0].length;
        for(var i=0;i<length;i++){
          if (data[0][i].id == e.recommend_id){
            that.setData({
              recommend_detail: data[0][i]
            });
            console.log(data[0][i]);
          }
        }
      }
      
      // wx.setNavigationBarTitle({
      //   title: data[e.comic_id - 1][0].type
      // });
    });
  },

  // 滑动切换tab
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  // 点击tab切换
  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})