// pages/login/login.js
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var util = require('../../utils/util.js');

Page({
  onGotUserInfo: function(e) {
    if (e.detail.signature) {
      qcloud.login({
        success(result) {
          wx.navigateTo({
            url: '/pages/entry/entry',
          });
          wx.setStorageSync('user_info_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A', e.detail.rawData);
        },
        fail(error) {
          util.showModel('登录失败', error);
        }
      });
    }
  }
})