// pages/more/more.js

const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    recommend: '',
    comic_id: '',
    new_work: '',
    potential_work: ''
  },

  ShowDetail: function (e) {
    var data = e.currentTarget.dataset;
    var recommend_id = e.currentTarget.dataset.recommend_id;
    var recommend = e.currentTarget.dataset.recommend;
    wx.navigateTo({
      url: '../detail/detail?recommend_id=' + recommend_id + "&&recommend=" + recommend
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this;
    that.setData({
      comic_id: e.comic_id,
    });
    
    util.ask("type", function (data) {
      that.setData({
        recommend: data[0],
        new_work: data[1],
        potential_work: data[2]
      });
      wx.setNavigationBarTitle({ title: data[e.comic_id-1][0].type });
      console.log(data[0]); 
    });
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