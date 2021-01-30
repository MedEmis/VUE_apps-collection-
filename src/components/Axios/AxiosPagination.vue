<template>
  <div class="col-12 p-0">
    <div class="pagination-wraper">
      <div>
        <div v-if="$attrs.paginatedPost" class="pagination-wraper__list">
          <div v-for="(body, id) in $attrs.paginatedPost" :key="id">
            <PostCardVue :body="body" />
          </div>
        </div>
      </div>
      <LoaderVue v-if="$attrs.fetching" />
    </div>
    <div class="overflow-auto fluid pagination-block">
      <div class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" align="fill" />
      </div>
    </div>
  </div>
</template>

<script>
import PostCardVue from "./PostCard.vue";
import LoaderVue from "../Loader.vue";
export default {
  name: "AxiosPagination",
  components: { PostCardVue, LoaderVue },
  data() {
    return {
      rows: 500,
      currentPage: 3,
    };
  },
  watch: {
    currentPage() {
      this.$attrs.getPaginatedPosts([this.currentPage, 6]);
    },
  },
  mounted() {
    //this.$attrs.loadPosts();
    if (!this.$attrs.paginatedPost.lenght) {
      this.$attrs.getPaginatedPosts([this.currentPage, 6]);
    }
  },
};
</script>
<style lang="scss" scoped>
.pagination-wraper {
  text-align: center;

  height: 80vh;
  overflow: auto;
  &__list {
    height: auto;
  }
}
</style>