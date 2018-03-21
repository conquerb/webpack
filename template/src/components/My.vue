<template>
    <div class="my">
        <div class="empty-tip" v-if="!logged">请使用微信浏览器打开页面</div>
        <div class="empty-tip" v-if="pageLoading && logged">
            <i class="icon-img icon-loading"></i>
        </div>
        <div v-if="logged && !pageLoading">
            <div class="empty-tip">个人中心页面</div>
        </div>
        <app-footer active="my"></app-footer>
    </div>
</template>

<script>
var utils = require("../js/utils");
var api = require("../js/api");
var upload = require("../js/upload");
import Footer from "./Footer.vue";

export default {
  name: "My",
  components: {
    "app-footer": Footer
  },
  data() {
    return {
      pageLoading: true,
      logged: utils.getUser() != null,
      saving: false,
      wxUser: utils.getUser(),
      info: {}
    };
  },

  mounted() {
    if (!!this.logged && !!this.wxUser) {
      this.info.picture = this.wxUser.picture;
      this.info.name = this.wxUser.name;
    }
    if (!!this.logged) this.loadUserInfo();
  },

  watch: {},

  methods: {
    loadUserInfo() {}
  }
};
</script>
