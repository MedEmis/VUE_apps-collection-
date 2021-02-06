<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4">
          <UserProfileCardMidVue
            :user="$attrs.currentUser"
            :getWFetching="$attrs.currentUserFetching"
          />
        </b-row>
        <b-row class="mb-4">
          <NewArticleButtonVue text="write new article " />
        </b-row>
        <b-row class="mb-4"> <MyGroupsVue /> </b-row>
        <b-row class="mb-4"> <HashTagsVue /> </b-row>
        <b-row v-if="$attrs.getArticles.data" class="mb-4">
          <GaleryVue
            :data="$attrs.getArticles.data.slice(0, 3)"
            title="Trending articles"
          />
        </b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
export default {
  name: "FeedSideBar",
  components: {
    UserProfileCardMidVue: () => import("./UserProfileCardMid.vue"),
    NewArticleButtonVue: () => import("./NewArticleButton.vue"),
    MyGroupsVue: () => import("./MyGroups.vue"),
    HashTagsVue: () => import("./HashTags.vue"),
    GaleryVue: () => import("../Profile/Galery.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>