<template>
  <main>
    <b-row class="profile-main-wrapper px-1 m-0">
      <b-col>
        <b-row class="mb-4"
          ><PostFormVue :createPostRequest="$attrs.createPostRequest"
        /></b-row>
        <b-row class="mb-4"><PostSortingVue /></b-row>
        <b-row v-if="$attrs.getPosts.data" class="mb-4">
          <b-col class="p-0">
            <UserPostVue
              v-for="(post, index) in $attrs.getPosts.data.slice().reverse()"
              :key="index"
              :data="post"
              :fetching="$attrs.getWFetching"
            />
          </b-col>
        </b-row>
      </b-col>
      <b-overlay :show="$attrs.getWFetching" no-wrap />
    </b-row>
  </main>
</template>

<script>
export default {
  name: "FeedMain",
  components: {
    PostFormVue: () => import("./PostForm.vue"),
    PostSortingVue: () => import("./PostSorting.vue"),
    UserPostVue: () => import("./UserPost.vue"),
  },
};
</script>

<style lang="scss">
</style>