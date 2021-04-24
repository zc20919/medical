Component({
  data: {
    selected: 0,
    "color": "#333333",
    "selectedColor": "#5FD0DD",
    "list": [
      {
        "pagePath": "/pages/moreResources/moreResources",
        "text": "更多资源",
        "iconPath": "/images/icon/btm-icon1.png",
        "selectedIconPath": "/images/icon/btm-icon1-act.png"
      },
      {
        "pagePath": "/pages/index/index",
        "text": "365推荐",
        "iconPath": "/images/icon/btm-icon2.png",
        "selectedIconPath": "/images/icon/btm-icon2-act.png"
      },
      {
        "pagePath": "/pages/Help/Help",
        "text": "帮助中心",
        "iconPath": "/images/icon/btm-icon3.png",
        "selectedIconPath": "/images/icon/btm-icon3-act.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "个人中心",
        "iconPath": "/images/icon/btm-icon4.png",
        "selectedIconPath": "/images/icon/btm-icon4-act.png"
      }
    ]
  },
  attached() {
    console.log(getCurrentPages())
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected: data.index
      })
      wx.switchTab({ url })
    }
  }
})