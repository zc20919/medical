// pages/webnet/webnet.js
let app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    weburl:app.globalData.weburl,
    searchurl:'',
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options.url){
      this.setData({
        url:app.globalData.weburl+options.url
      })
    }
    console.log(app.globalData.weburl+options.url)
     if(options.keyword){
      this.setData({
        url:`${app.globalData.searchurl}?keyword=${options.url}&&queryType=${options.queryType}`
      })
      console.log(`${app.globalData.searchurl}?keyword=${options.keyword}&&queryType=${options.queryType}`)
    }
    if(options.otherurl){
      this.setData({
        url:options.otherurl
      })
    }
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