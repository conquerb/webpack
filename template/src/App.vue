<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
::-webkit-clear-button {
  visibility: hidden;
}
* {
  outline: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h2 {
  margin-top: 30px;
  text-align: center;
  color: #a27f71;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 30px;
}
img {
  border: none;
}
.empty-tip {
  color: #999;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding: 50px 20px;
  i {
    width: 30px;
    height: 30px;
    margin: 0 auto;
  }
}
.more-loading {
  padding: 20px 0;
  i {
    width: 20px;
    height: 20px;
  }
}

.btn-block {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  margin-top: 30px;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border-radius: 0;
  background: #a27f71;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.btn-block.focus,
.btn-block:focus,
.btn-block:hover {
  color: #fff;
}
.message-tip {
  color: #9a9fa4;
}

/**
 * =======================
 * 底部菜单 
 * =======================
 */
.foot-padding {
  height: 70px;
}
.foot-items {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-top: 1px solid #d0d0d0;
  background: rgba(245, 246, 248, 0.95);
}
.foot-items .row {
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
}
.foot-items .item {
  display: block;
  text-align: center;
  height: 50px;
}
.foot-items .item .icon {
  display: block;
  width: 20px;
  height: 20px;
  background: center center no-repeat;
  background-size: contain;
  margin: 5px auto 3px auto;
}
.foot-items .item label {
  font-size: 13px;
  font-weight: 300;
  color: #505050;
}
.foot-items .active label {
  font-weight: 400;
  color: #a27f71;
}
.foot-items .item .icon-events {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAABrklEQVRYhe3Yv2tTURyG8U+sdLIYh9JN29K9Q8HFwaVDQXAIiCBZOuqi1KWrewOFDs6CFP+FuutSHUsHdRbNUqkU6hKH8w014ebHMZAs54FLbk7Oed+H5N4DuVzRwAdcojPl4zK6G12Z6/HaQhOv8AS/TJebeIDXuIeXJMsfWJ6yTBXLkksDPuLZLG36eCo5+YM7s3Xp4bbkpIP6bF16qKNzbdYWgyhiuRSxXIpYLkUslyKWSxHLpYjlUsRyKWK5FLFcilgu44jt4gyfsTpB12pknEXmSIb94X2OtvSg4wBfsfgfUoux9iCy2pFdRT2cBoo9xjnuxvsaDvEJCxlSC7HmMDJE5nl0ZIlt4je2+sbncYT3cT6K+Zh7VDF/Kzo2xxXbkJ6PNQeU3cAx3rn6BqqoxZzjWFNFM7o2Romt4Sd2hhSSrpkv2B8yZz/mjLomd6JzrUrsFpbwDXsjgrqs4LvqO2w3PlsZM2svupfCpQOneIsTvDH85+lnXbr9t/8Z246x9YycWnSfhMspaX9p4QXmMsK63McFHsVxEWO5zIVDy2T7ZQ8Ppb2pHecT8xdfPnQz4iyLlwAAAABJRU5ErkJggg==");
}
.foot-items .active .icon-events {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAYAAABDClKtAAABmElEQVRYhe2Yv0sCYRyHHw+3+g+itTXoH2gTQdyEV3QXQcqg2c6XcAx8DVqCxuimhv6CoiahoXBpi8ClQRASQfQa7hX00PM1IQveZ7p73+99vs+992N4Y77v47nlDaAC5IBtfp8P4Bo4FVJ9xW5ODjeBe2BvDTJhnoF9h2CF/oIQBB4VB8iv2yRE3gG21m0RYstZt8EsrJQpVsoUK2WKlTLFSplipUyxUqZYKVOslClWyhQrZcq/lPKBErALNFfs1dQ5JZ07l/iCoCMh1QWA55ZTwCOw8wOhNyAlpPoEXjy3HAfUvOKolaoJqRrjEx2YANpLCrWBhL5+nNUAastKXRHsxkwhpHoHkkDXUKgLJPV1YSq6j5HUHVAQUs187kKqVyAN9BcI9YG0rp+V4wMF3S9S6gnICqmGUd2EVA8Eu36jOSUjIKfronKGQFb3nZIa6OMWwZ31ooImAm+B4pzpop43yekRrHxLDw0cIAPUCV7GjknQROAlUA0NV/X4Mjkdgo+oDmRivh/5yzDCc8tnwAFwLqQ6XjXvG04Jc/zHu0myAAAAAElFTkSuQmCC");
}
.foot-items .item .icon-my {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAACTElEQVRYhe3YwUtUURQG8N9MzCo3gkWgJJKgi0JdKS1sL4Rt/A+k/oNcu6yNmwiKCFsIthCCCITatKlWltZOEJIQzTZFCEE5Le4xSp18M+85s/GDy2XuO9/5vjvvvXPPDI2hH7exhB+oxrwU6/0N5q0LbbiH3TCwise4G/NqrO9GXNtxGenC+xB7hqEacUNxvRrxXUUbOY1l/MJkRs5kxC8HvzDckXaa1cjfhqrBLwQ9+InFBvmLwe8pwsy0tLvhBvnDwZ8uwsxrrOfM8THy/BflDIn6pPqRB28jT24z7djOaWY78uQ28zVLoiPQjm9FmFnFYE4zg5Ent5kXuICBBo0MBP95g/x/0C+dNQsN8heCX9jhOSvViok6eRPBmy3KCOkBXMMOxjNyxiN+Tf4X4AB6peJVxUN014jrjuvViO/NKlCq09BZqU+5FmJvpIK2jTNS+zASeZ/gBj7XqVE3RqTnYCNM7Y2NWB85bgO10IbzCujqstymNnTkFcIXfG+EOIpHDt6GvGMj8o4eJrr/mzmH+7ga5Fd4F7vKiw7pWLgcuk9xHZuHBffhk1QtH6CzAAOHoTPy74begdaiQ2qgdjB2TCb2Yyz01u17Juel25K1uhaF8dCd31sYiIW5JhvZw1zoD8BMfDiyLTwm9IX+TAkrUl9zsUVm4AN2y1KfsdJCI6Sfwf1lVDThMDsCW6hkaTubhhMztXBiphbK++ZW4Y/+plRnKi0yUgn9zRJu4pZUeF5Kf301C6dwBZcwRWp0pqTCU2RXl3VshX7pN3+9s0x4Ty+CAAAAAElFTkSuQmCC");
}
.foot-items .active .icon-my {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAYAAACh1knUAAAB7UlEQVRYhe3Wv2vUYBwH4OdOK9WCcxHHDjoIWiiCgziIDhbFQbOVIjgIxYxdpCHVfyBLHaTOBofij0mchB64FMFBNxcRlyKIaLGUOlxOytmS5JKaDv2Meb/5vM9dwktam5ubyiSNwhau4QbOYzRb+oo3eIpnQZyUKm6VgaRROI5HGM8ZXcHtIE5WaoekUXhF99ceLtj9CzeDOHlZGySNwlN4WwKxFXM2iJP3eYPtAogWFgdAyO5ZzDqqQXABEwMgepnIOipDrldAFO4oAjlTAyS3owhkNH+kekcRyLcaILkdRSCfaoDkdhSBFDqQqnYUgSxhtQJiNeuoBgni5AdmK0Bms45qkAyziIUBEAvZvbkpBMkyg3lsFJjdyGZnipaX+gyANApPYg5XcaRv+SeeYz6Ikw9lektDtoCGcRrHs0uf8S6Ik7VB+gaG1J0y78iu5uBOC2kUHtX9649huOI+a/ii++i+bzfwz6NJo/Ac7uEihioC+rOO13gQxElnW0gahYfwELdq3nynPMadIE5+/4WkUTiEF7j8nxC9vMJkECfrvZf1fgMIuJTtrfVk7u4YPuJAAxC6p/CJNqYbRMj2nm5jskFEL5NtjDWtwFgbI00rMLJnjvh9SH/2If3ZU5BO7tTup9PGFJYbRCxj6g98s4eLFQKYTQAAAABJRU5ErkJggg==");
}

/**
 * =======================
 * 图标样式： 通用 
 * =======================
 */
.icon-img {
  display: inline-block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  vertical-align: middle;
  padding: 0;
  margin: 0;
}
.icon-star-active {
  width: 11px;
  height: 10px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAABa0lEQVQ4ja3Uv2pUQRTH8c8uQUF8ABsFJeIf1EYkIc1uFXwAZV5BG28vkuuA2E9nk94LPoTWYpVCJYmNbJfCIgQswrWZJMvuJN7c7A8OM5w753t+Fw5n0LatLmrq6jOEmMZd3g87Qp9ihFG+LwaMt6fc+4ObuhpjZSq1knMXAys7LOW6g7OzUeHT6H+uB9NT0dTVZdzCMm7jRT5L2saHfO7gV4jp7zH448arjexqGdcxOMvJGWrxOzf5soSXuNYTNq0BbuS4P8Q69hYAPtIe1ochpi2sYbIA6ARrIaatIYSYtjG+IHyCcWadjFuIaQer2O0B3cVqZmBm3KCpq7v4fk7wvRDTj+lE111xbpXAD3tw5mpK4Ac9wHM1JfCjU4oPc5Q0V9PF8SE2cTPHZqHBnOPZJXQF+072xSe8CTH9nC5q6uoO3uFZTrW4GmI6OHqzNNPoEv7gK16HmL4V/khu9Lypq8d4jye59hj8D+r+Z5v4qDNBAAAAAElFTkSuQmCC");
}
.icon-star {
  width: 11px;
  height: 10px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAABbElEQVQ4ja3UsWpUQRTG8d8uQUF8ABsFJRIVtRFJSLNbBR9Am6mmGvQVRMRCfAa9ELyNt/IhtBarFCpJbGS7FClEsAjXZpIsu5N4c7MfHGY4d87/fBcOZ9C2rS6q6uYTpBjGXd4PO0IfYYRRvi8GjFcn3PuDq7oZY3UqtZpz5wMrOyzluoOzs1Hh0+h/rgfTU1HVzUXcwDJu4mk+S9rG23zu4GeK4e8R+N37Dy+zq2VcxeA0J6eoxa/c5PMSnuFKT9i0BriW484QG9hbAPhQe9gYphi2sI7JAqATrKcYtoaQYtjG+JzwCcaZdTxuKYYdrGG3B3QXa5mBmXGDqm5u4dsZwbdTDN+nE113xZlVAt/rwZmrKYHv9gDP1ZTA908oPshR0lxNF8cH2MT1HJuFBnOOZ5fQJfx2vC8+4kWK4cd0UVU3K3iNxznV4nKK4c/hm6WZRhewjy94nmL4WvgjudGTqm4e4A0e5toj8D8vaGeb/ZL3wgAAAABJRU5ErkJggg==");
}

.icon-loading {
  width: 30px;
  height: 30px;
  background-image: url("data:image/gif;base64,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");
}
.icon-close {
  width: 18px;
  height: 18px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABxklEQVRYhc2YsVIbMRCGP1KohM6UhNDmEWLo4QHOdmVeg0n8KskLqOAsBlpokzIPABXMhMZ4NJOMndkUJwU433GSfT7fP7OVtNpvdNo9rbaIUwc4Bo6Aj8B7YNuNPQG3wE/gGrgCHiLXr1QXGAMzQAJt7ny6dQB8AExE8DIzbq2l1AcmNUB4mwCDWIhRjQB5G4VCnK0RwtvnKoh+AxDe+mUQ+2Qp2BTIk4u5oDqyI9ZMHuLTBiC8vaozaZVDr9cTa61orUUpVTpPKSVaa7HWSpIkISDnHqJDQMW01opXmqaFMEopSdP0/zxrbQjIzDEwDNlCrbW8VB4mDyEiorUO/TxDgK8hk4sCeZi3xgJBvgF8Dz1YRQGNMWKMWQVCHAO/IhwKYVaEEOAR4HekkyilFnbB784SEAL8eQds0RI90pJP04bD+gOy1GlF+g5DJq+5oJ0C7LL5Er/rD+y4yiFJknX99Ma8UDfiYNVtC+3GJi5GF3kIyPqOpq+Kpb3OoEGQyh7nSwMQwb1NKxosrwEwrRFgyhItp9cB9WTThVtrZR2SFZ55RPC/zucwJEDsXaQDnPD8ULMH7LixCXBH9lBzA1wC96EL/wOFY4H6X0iGlQAAAABJRU5ErkJggg==");
}

/**
 * =======================
 * 轮播图 
 * =======================
 */
.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet {
  background: rgb(175, 175, 175);
}
swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff;
}

/**
 * =======================
 * 活动样式 
 * =======================
 */
.event-header {
  height: 60px;
  margin-top: 15px;
  background: url(assets/event_header.png) center center no-repeat;
  background-size: 213px 31px;
}
.event-item {
  margin: 15px;
  margin-bottom: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
  img {
    width: 100%;
    min-height: 150px;
  }
  .info {
    margin: 0;
  }
  h3 {
    font-size: 16px;
    font-weight: normal;
    color: #000;
  }
  .tag {
    font-size: 12px;
    color: #999fa5;
    .icon-img {
      margin-right: 5px;
    }
    label {
      vertical-align: middle;
      margin: 0;
      font-weight: normal;
    }
    label.active {
      color: #a27f71;
    }
  }
  .memo {
    color: #9a9fa4;
    font-size: 13px;
  }
}
.event-item-detail {
  margin: 0;
  border-bottom: none;
  .info {
    margin: 20px;
  }
}
.my {
  background: #f1f3f5;
  .module {
    background: #fff;
    margin-bottom: 12px;
    border-top: 1px solid #e4e4e4;
  }
  .info-basic {
    position: relative;
    height: 124px;
    .img {
      position: absolute;
      right: 20px;
      top: 30px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    .name {
      margin: 40px 0 0 20px;
      font-size: 20px;
      font-weight: 500;
    }
    .name-mt {
      margin-top: 20px;
    }
    .tag {
      margin: 3px 0 0 20px;
      .icon-img {
        margin-right: 5px;
      }
      label {
        vertical-align: middle;
        margin: 0;
        font-size: 12px;
        color: #999fa5;
        font-weight: normal;
      }
      .active {
        color: #a27f71;
      }
      .btn-block {
        height: 28px;
        line-height: 25px;
        width: 110px;
        margin: 5px 0 0 0;
        border-radius: 2px;
        position: static;
        font-size: 12px;
      }
    }
  }
  .btn-block {
    position: static;
  }
}
/**
 * =======================
 * 表单样式： 通用 
 * =======================
 */
.form-item {
  height: 55px;
  line-height: 55px;
  margin: 0 20px;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 70px;
  padding-right: 22px;
  position: relative;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAbCAYAAABxwd+fAAACJ0lEQVQ4jaWUz4oTQRDGv0wmEdmDEEZycMGTNwUPHvUqrJfF43p2QQTRi+CfiyCICApeFH0Hn8CDD+BR8OriVmZN98xssplJZjLd/Xkwsxtd183EgqLpovtHUfVVNUi2ARgADv9hHoDp7Dwxi50CcGYZEGYZndZal0qpgbX2O4DNZUAAsALAL8sSWmvPGPMOwO2FSST33Vr7XPUVRYRhGLLIC0fy7vybo/xQwDn3OIoiigh7vR7zSU6S92uDZn4vSRJXwbIsI8mHy4BAcnOwOzAiQhFhOkpJ8skyIJDcGI1GZQUbDock+WwZEEiuZ1lWiAhlW5jECUm+WAYEklcnk0nW6/UoIox0ROfca5KNuiCQvFIUxTAMQ4oIlVK01r6pYHVAIHlpOp3GO+EORYT9fp/GmPckvV+0enbBWvsxiqKuMQa+76Pb7Z71jv93yAKSK9Wl0WgAgO/XhKyVZfkhjuOT1lq0Wi0EQfAKwLc69bme53lRdU5rTWfdo7pduzEej8sKEsexdc7dqqujm2maGtnepogwSZKC5EZdQd7ZG+65uRHJSF6rOyIPBoMBq9FI03SX5OWj3v816Jx7Gsfx/k4aj8c/SF78V/Z/BhrOuZda64PFludbJM8dV8vfINbat0odrNppMf1KcnWRzs6PyHml1JeyLNFsNhEEwWff99cAxIsodV7Ze57nod1uo9PpfGo2m+sARotKfj4jH8AqgOEMYBaFAMBPfwYgyfheWagAAAAASUVORK5CYII=")
    right center no-repeat;
  background-size: 9px 14px;
  .h {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
  .ipt {
    padding: 0;
    margin: 0;
    border: none;
    -webkit-appearance: none;
    float: right;
    text-align: right;
    width: 100%;
    font-weight: 400;
    color: #000;
    font-size: 14px;
    background: transparent;
    .district {
      width: 31%;
      margin: 0;
      border: 1px solid #f2f2f2;
      background: transparent;
    }
    select {
      direction: rtl;
    }
  }
  select.ipt {
    direction: rtl;
    height: 55px;
  }
  input[type="date"].ipt {
    direction: rtl;
    margin-right: -15px;
    height: 55px;
  }
}
.form-item.no-arrow {
  background: none;
  padding-right: 0;
  border-bottom: none;
  .tip {
    color: #9a9fa4;
    float: right;
  }
}
.form-item:last-child {
  border-bottom: none;
}
.form-submit {
  border-top: 1px solid #e4e4e4;
  padding-left: 0;
  margin-top: 5px;
  padding-top: 25px;
  padding-bottom: 65px;
  height: auto;
  .btn-block {
    margin: 0 auto;
    width: 215px;
    height: 46px;
    line-height: 46px;
    font-size: 18px;
    border-radius: 4px;
  }
}
.photos {
  clear: both;
  padding: 0 20px 10px 20px;
  margin-right: -5px;
  margin-left: -5px;
  .col-xs-4 {
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 10px;
  }
  .item {
    height: 106px;
    line-height: 106px;
    text-align: center;
    position: relative;
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .icon-close {
      position: absolute;
      right: -9px;
      top: -9px;
    }
    .progress {
      position: absolute;
      margin: 0;
      bottom: 0;
      left: 0;
      width: 1%;
      height: 3px;
      background: #07b148;
    }
  }
  .item-add {
    background: #eeeeee
      url("data:image/png;base64,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")
      center center no-repeat;
    background-size: 51px 69px;
    input {
      width: 100%;
      height: 100%;
      opacity: 0.01;
    }
  }
}
.member-form {
  margin: 0;
  padding: 0;
  img {
    margin: 0;
    width: 100%;
  }
  .btn-block {
    position: static;
    margin-top: 0;
  }
}

.carousel-indicators {
  bottom: 0;
}
</style>
