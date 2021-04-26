
import http from './utils/http'
import base from './base_config'
//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        console.log(res)
        // wx.request({
        //   url: 'https://weighbridge.wxpaying.com/AppletOAuthcenter/Index',
        //   data:{code:res.code},
        //   success:function(res){
        //     console.log(res)
        //   }
        // })
      }   
    })
  },
  globalData: {
      weburl:'http://jsp.365heart.com/dictionary/topfive/',
      searchurl:'http://jsp.365heart.com/search'
  }
})