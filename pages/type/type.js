// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: "",
    currentval: "",
    currentstate: "",
    showView: true
  },

  // 滑动切换tab
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  chooseshow:function(e){
    var that = this;
    that.setData({//把选中值放入判断值
      currentTab: e.currentTarget.dataset.current
    })
  },

  chooseState:function(e){
    var that = this;
    that.setData({//把选中值放入判断值
      currentstate: e.currentTarget.dataset.state
    })
    console.log(e.currentTarget.dataset.state);
  },

  choose: function (e) {
    var that = this;
    that.setData({//把选中值放入判断值
      currentval: e.currentTarget.dataset.selected
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    showView: (options.showView == "true" ? true : false)
  },

  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
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