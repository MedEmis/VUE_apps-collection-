<template>
  <div class="infinity-list-wrapper">
    <div v-if="$attrs.infinitePosts" class="post-list">
      <div v-for="(body, id) in $attrs.infinitePosts" :key="id">
        <PostCardVue :body="body" />
      </div>
      <div
        v-if="$attrs.infinitePosts"
        class="visibilityChanged"
        v-observe-visibility="visibilityChanged"
      />
    </div>
    <LoaderVue v-if="$attrs.fetching" />
  </div>
</template>

<script>
import LoaderVue from "../Loader.vue";
import PostCardVue from "./PostCard.vue";

export default {
  name: "AxiosLazy",
  components: { PostCardVue, LoaderVue },
  data() {
    return {
      page: 1,
      initial: 6,
      next: 3,
    };
  },

  mounted() {
    if (!this.$attrs.infinitePosts.length) {
      this.$attrs.getInfinitePost([this.page, this.initial]);
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      //visibility of bottom of the list
      if (!isVisible) return;
      if (isVisible && this.$attrs.infinitePosts?.length) {
        this.page++;
        this.$attrs.getInfinitePost([this.page, this.next]);
      }
    },
  },
};
</script>

<style scoped>
.infinity-list-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.post-list {
  padding-bottom: 30px;
  height: auto;
}
.post-num {
  left: 20vw;
  top: 7vh;
  z-index: 15;
  font-size: 20px;
  color: #fff;
}
</style>