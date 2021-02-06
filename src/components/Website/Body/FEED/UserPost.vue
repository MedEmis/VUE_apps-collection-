<template>
  <b-col class="user-post p-0 mb-4">
    <b-row class="p-2 px-4">
      <b-col class="user-post__title" xl="11" lg="11" md="11" sm="12" xs="11">
        <span class="user-post__title_names">Ted Bell, Annette Nguyen</span> and
        <span class="user-post__title_names">Cody Hawkins</span> liked this
      </b-col>
      <b-col xl="1" lg="1" md="1" sm="12" xs="1"> </b-col>
    </b-row>
    <hr class="m-0 mb-3" />
    <b-row class="px-3">
      <b-col>
        <b-row>
          <b-col class="px-4" lg="6" md="8" sm="10" xs="12">
            <b-row>
              <b-col class="col-2 m-2">
                <b-img :src="$attrs.data.avatar" />
              </b-col>
              <b-col class="col-9 m-2">
                <b-row
                  ><strong>{{ $attrs.data.author }}</strong></b-row
                >
                <b-row
                  ><small>{{ $attrs.data.position }}</small></b-row
                >
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="px-5 position-relative"
            >{{ $attrs.data.text }}
            <span v-if="$attrs.data.text.length > 300" class="text-overlay" />
          </b-col>
        </b-row>
        <b-row class="px-5 py-3"
          ><b-button
            variant="white"
            v-if="$attrs.data.text.length > 300"
            class="link-block"
            >READ MORE</b-button
          ></b-row
        >
        <b-row>
          <b-col class="px-5">
            <b-img
              v-if="$attrs.data.image"
              :src="$attrs.data.image"
              fluid-grow
              alt="$attrs.data.image"
            ></b-img>
          </b-col>
        </b-row>
        <b-row v-if="$attrs.data.attachment">
          <b-col class="px-5">
            <FileHolderVue :data="$attrs.data.attachment" />
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col lg="2" md="2" sm="2" xs="2" class="user-post__bottom-item"
            ><b-icon icon="hand-thumbs-up" scale="1" />{{
              $attrs.data.likes
            }}</b-col
          >
          <b-col lg="2" md="2" sm="2" xs="2" class="user-post__bottom-item"
            ><b-icon icon="chat-fill" scale="1" />{{
              $attrs.data.comments
            }}</b-col
          >
          <b-col lg="6" md="6" sm="6" class="user-post__bottom-item"></b-col>
          <b-col lg="2" md="2" sm="2" xs="2" class="user-post__bottom-item"
            ><b-icon icon="share-fill" scale="1" />SHARE</b-col
          >
        </b-row>
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.fetching" no-wrap />
  </b-col>
</template>

          
          
<script>
import FileHolderVue from "./FileHolder.vue";
export default {
  name: "UserPost",
  components: {
    FileHolderVue,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: linear-gradient(to bottom, #ffffff42, #ffffff9c, #ffffff);
  &__link {
    color: rgb(52, 139, 238);
    font-weight: 700;
  }
}
.user-post {
  background: #fff;
  border-radius: 5px;
  min-height: 200px;
  &__title {
    font-size: 16px;
    line-height: 35px;
    word-wrap: break-word;
    @media (max-width: 700px) {
      line-height: 20px;
      padding: 0 40px !important;
      text-align: center;
    }
    &_names {
      color: rgb(51, 124, 219);
    }
  }
  &__bottom-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid rgb(247, 247, 247);
    svg {
      margin-right: 10px;
      color: rgb(48, 88, 223);
    }
  }
}
</style>