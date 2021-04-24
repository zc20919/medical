// pages/index/index.js
function e(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
const app = getApp()
var http = e(require("../../utils/http"));
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist: [
      '365医学网',
      "学术资源",
      "学术会议",
      "地区子网",
      "会议主页",
      "热词推荐",
      "指南共识",
      "学术专题"
    ],
    selectnav: 0,
    typeindex: 0,
    otherindex: 0,
    typelist: [
      { icon: '/images/icon/ziy-icon.png', type: '资源', acticon: '/images/icon/ziy-icon-act.png' },
      { icon: '/images/icon/zhuanjia-icon.png', type: '专家', acticon: '/images/icon/zhuanjia-icon-act.png' },
      { icon: '/images/icon/yiyuan-icon.png', type: '医院', acticon: '/images/icon/yiyuan-icon-act.png' },
      { icon: '/images/icon/huiyi-icon.png', type: '会议', acticon: '/images/icon/huiyi-icon-act.png' }
    ],
    otherlist: [
      { name: '主题', type: '1' },
      { name: '推荐', type: '2' },
      { name: '疾病', type: '3' }
    ],
    othernet:[]
  },
  /*.*
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        currentTab: 1  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      })
    }
    this.getlist(1)

  },
  getlist(id) {
    http.default.getReq('/appletHome/getAppletHomeRecommendData/' + id,resdata => {
      console.log(resdata.data)
      // console.log(resdata.data.data.data)
      if(resdata.code==1){
        this.setData({
          othernet:resdata.data
        })
      }
    })
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

  },
  changeselect(e) {
    this.setData({
      selectnav: e.currentTarget.dataset.index
    })
  },
  changetype(e) {
    this.setData({
      typeindex: e.currentTarget.dataset.index
    })
  },
  changeother(e) {
    let index=e.currentTarget.dataset.index
    this.setData({
      otherindex: index
    })
    this.getlist(Number(index)+1)
  }
})