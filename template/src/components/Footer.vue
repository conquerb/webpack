<template>
  <div class="foot-items">
    <div class="row">
        <div class="col-xs-6">
            <router-link :class="'item item-events '+(activeMod=='events'?'active':'')" to="/">
              <span class="icon icon-events"></span>
              <label>活动通告</label>
            </router-link>
        </div>
        <div class="col-xs-6">
            <router-link :class="'item item-my '+(activeMod=='my'?'active':'')" to="/my">
              <span class="icon icon-my"></span>
              <label>个人</label>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active"],

  data() {
    return {
      activeMod: "events"
    };
  },

  mounted: function() {
    if (this.active) this.activeMod = this.active;
  },

  methods: {}
};
</script>
