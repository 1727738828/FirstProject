//index.js
//获取应用实例
const app = getApp()

const util = require('../../utils/util.js');

Page({
  data: {
    lunbotu:'',
    recommend:'',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 15,
    nextMargin: 20,
    indicator_color: "rgba(255,255,255,0.3)",
    indicator_active_color: "#fde23d"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    util.ask('index', function (data) {
      console.log(data);
      that.setData({
        lunbotu:data[0],
        recommend:data[1]
      });
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
