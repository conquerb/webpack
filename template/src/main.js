import Vue from 'vue'
import App from './App.vue'
import router from './router'

var cfsdk = require('careerforce-sdk');
var utils = require("./js/utils");
var api = require("./js/api");

var config = require("./config");

function initVue() {
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: {
            App
        }
    });
}

if (!utils.auth()) {
    var wxLogin = new cfsdk.WXLOGIN();
    try {
        wxLogin.init(cfsdk, { wxid: config.wxid }).then(function(res) {
            // console.log("auth success");
            // console.log(res);
            utils.setLogData(res);
            document.location.href = document.location.protocol + "//" + document.location.host + document.location.pathname;
        }, function(err) {
            console.log(err);
            initVue();
        });
    } catch (e) {}
} else
    initVue();