<template>
    <div class="event-list">
        <div class="empty-tip" v-if="pageLoading">
            <i class="icon-img icon-loading"></i>
        </div>

        <div v-if="!pageLoading">
            <div class="event-header"></div>

            <div class="event-item" v-for="item in eventList" v-bind:key="item.id">
                <router-link :to="'/event/detail/'+item.id"><img :src="item.picture" /></router-link>
                <div class="info">
                    <h3>{{ item.title }}</h3>
                    <div v-if="item.vip!=1" class="tag">
                        <label>普通通告</label>
                    </div>
                    <div v-if="item.vip==1" class="tag">
                        <span class="icon-img icon-star-active"></span>
                        <label class="active">VIP通告</label>
                    </div>
                </div>
            </div>

            <div class="empty-tip more-loading" v-if="moreLoading">
                <i class="icon-img icon-loading"></i>
            </div>

        </div>
        <div class="foot-padding"></div>
        <app-footer active="events"></app-footer>
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
      pageLoading: true,
      moreLoading: true,
      hasMore: true,
      eventList: [],
      pageNumber: 1
    };
  },

  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
  },

  created() {
    this.loadMore();
  },

  methods: {
    onScroll: function() {
      var _this = this;
      var scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      var bodyHeight = document.body.offsetHeight,
        screenHeight = window.innerHeight;
      if (
        bodyHeight > screenHeight &&
        scrolled + screenHeight > bodyHeight - 10 &&
        !_this.loading &&
        _this.hasMore
      ) {
        _this.pageNumber++;
        _this.moreLoading = true;
        _this.loadMore();
      }
    },

    loadMore() {
      var _this = this;
      api.eventList({ pageNumber: _this.pageNumber }).then(res => {
        // console.log(res);
        _this.pageLoading = false;
        _this.moreLoading = false;
        if (res.length == 0) _this.hasMore = false;
        for (var index in res) _this.eventList.push(res[index]);
      });
    }
  }
};
</script>
