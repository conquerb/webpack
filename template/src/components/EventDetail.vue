<template>
    <div>
        <div class="empty-tip" v-if="eventLoading">
            <i class="icon-img icon-loading"></i>
        </div>

        <div class="event-item event-item-detail" v-if="!eventLoading">
            <img :src="eventInfo.picture" />
            <div class="info">
                <h3>{{ eventInfo.title }}</h3>
                <div v-if="eventInfo.vip!=1" class="tag">
                    <label>普通通告</label>
                </div>
                <div v-if="eventInfo.vip==1" class="tag">
                    <span class="icon-img icon-star-active"></span>
                    <label class="active">VIP通告</label>
                </div>
                <div class="memo" v-html="eventInfo.memo"></div>
            </div>
        </div>

        <div class="foot-padding"></div>

        <button v-if="!eventLoading && eventEnroll==null" @click="enrollAction" type="button" class="btn btn-block">报名参加</button>
        <router-link v-if="!eventLoading && eventEnroll!=null" to="/" type="button" class="btn btn-block">已报名，查看更多通告</router-link>

    </div>
</template>

<script>
var utils = require("../js/utils");
var api = require("../js/api");
import Footer from "./Footer.vue";

export default {
  name: "EnrollList",
  components: {
    "app-footer": Footer
  },
  data() {
    return {
      eventLoading: true,
      id: this.$route.params.id,
      eventInfo: {},
      eventEnroll: {}
    };
  },

  created() {
    this.loadEventInfo();
  },

  methods: {
    loadEventInfo() {
      api.eventDetail(this.id).then(res => {
        // console.log(res);
        this.eventInfo = res.event;
        this.eventEnroll = res.enroll;
        this.eventLoading = false;
      });
    },
    enrollAction() {
      var _this = this;
      api
        .eventEnroll(this.id)
        .then(function(res) {
          console.log(res);
          _this.$router.push("/enroll/success");
          // console.info(JSON.stringify(res));
        })
        .catch(function(res) {
          console.log(res);
          // 未加入会员，进入加入会员页面
          if (res.result == 21 || (res.result == 3 && res.data.status == 21))
            _this.$router.push({ path: "/enroll/member" });
          else if (res.result == 3) alert("你已经报名了，无需重复报名！");
          else if (res.result == 5)
            _this.$router.push({ path: "/enroll/member" });
          else if (res.result == 8)
            _this.$router.push({ path: "/member/profile" });
          else alert(res.message);
          // alert("请通过微信公众号访问！");
        });
    }
  }
};
</script>
