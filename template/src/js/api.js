var cfsdk = require('careerforce-sdk');

var utils = require('./utils');

var config = {
    BASE_SERVER: "http://www.vstown.cc/api",
    PAY_SERVER: "https://pay.careerforce.cn/v2",

    API_ORDER_PAY: "/api/pay/sdk/{id}",

    API_EVENT_LIST: '/api/event/list',
    API_EVENT_DETAIL: '/api/event/detail',
    API_EVENT_ENROLL: '/api/event/enroll',

    API_MEMBER_JOIN: '/api/member/save',

    API_USER_INFO: '/api/user/info',
    API_USER_SAVE: '/api/user/update'
};


cfsdk.httpUtil.init({
    AUTHEN_CODE: "MTIzNTgzMTg0OjUwN2Q0ZTMzYWM3ZTEzMzE5YzQ2MTIyMDk0OTYzYTI2"
});

function fetch(url, params) {
    return new Promise((resolve, reject) => {
        cfsdk.httpUtil.fetch(url, params).then(res => {
            // console.log("===success===");
            // console.log(res);
            resolve(res);
        }).catch(err => {
            // console.log("===error===");
            // console.log(err);
            reject(err);
        });
    });
}


module.exports = {

    eventList: function(params) {
        return fetch(config.BASE_SERVER + config.API_EVENT_LIST, params);
    },

    eventDetail: function(id) {
        return fetch(config.BASE_SERVER + config.API_EVENT_DETAIL, { "id": id });
    },

    eventEnroll: function(eventId) {
        return fetch(config.BASE_SERVER + config.API_EVENT_ENROLL, { "eventId": eventId });
    },

    userInfo: function() {
        return fetch(config.BASE_SERVER + config.API_USER_INFO, {});
    },

    userUpdate: function(params) {
        return fetch(config.BASE_SERVER + config.API_USER_SAVE, params);
    },

    memberJoin: function(params) {
        var defUrl = config.BASE_SERVER + config.API_MEMBER_JOIN;
        var defParams = {
            "payMethod": "weixin",
            "payType": "JSAPI",
            "wxOpenId": utils.getOpenId()
        };
        defParams = Object.assign(defParams, params);
        return fetch(defUrl, defParams);
    },

    orderPay: function(params) {
        console.log(params);
        return fetch(config.PAY_SERVER + config.API_ORDER_PAY.replace("{id}", params.orderId), params);
    }

}