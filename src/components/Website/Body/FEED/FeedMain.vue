<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"><PostFormVue /></b-row>
        <b-row class="mb-4"><PostSortingVue /></b-row>
        <b-row class="mb-4">
          <b-col class="p-0">
            <UserPostVue v-for="post in $attrs.getPosts" :key="post.author" :data="post" :fetching="$attrs.getWFetching"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import PostFormVue from "./PostForm.vue";
import PostSortingVue from "./PostSorting.vue";
import UserPostVue from "./UserPost.vue";
export default {
  name: "FeedMain",
  components: {
    PostFormVue,
    PostSortingVue,
    UserPostVue,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>