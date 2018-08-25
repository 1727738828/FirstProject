//index.js
//获取应用实例
const app = getApp()

const util = require('../../utils/util.js');

Page({
  data: {
    lunbotu:'',
    recommend:'',
    intervals:'',
    new_work: '',
    potential_work: '',
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
  ShowDetail: function(e) {
    var data = e.currentTarget.dataset;
    var recommend_id = e.currentTarget.dataset.recommend_id;
    var recommend = e.currentTarget.dataset.recommend;
    wx.navigateTo({
      url: '../detail/detail?recommend_id=' + recommend_id + "&&recommend=" + recommend
    })
  },

  ShowMore:function(e){
    var data = e.currentTarget.dataset;
    var comic_id = e.currentTarget.dataset.comic_id;
    wx.navigateTo({
      url: '../more/more?comic_id='+comic_id
    })
  },

  onLoad: function () {
    var that = this;
    util.ask('index', function (data) {
      console.log(data);
      that.setData({
        lunbotu:data[0],
        intervals:data[1]
      });
    });

    util.ask('type', function (data) {
      console.log(data);
      that.setData({
        recommend: data[0],
        new_work: data[1],
        potential_work: data[2]
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
