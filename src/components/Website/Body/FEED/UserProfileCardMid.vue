<template>
  <keep-alive>
    <b-col class="col-12 user-card-mid">
      <b-overlay :show="$attrs.getWFetching" no-wrap></b-overlay>
      <b-row>
        <b-img class="col-12 p-0 user-card-mid__bg" :src="imageBG" />
      </b-row>
      <b-row class="user-card-mid__info">
        <b-col class="col-12">
          <b-img class="user-card-mid__avatar-big" :src="avatar" />
        </b-col>
        <b-col class="pb-3 col-12">
          <b-row class="py-2">
            <b-col v-if="$attrs.user" class="user-card-mid__info_name col-12"
              >{{ $attrs.user.nickname[0] }}
              <span>
                <b-img
                  :src="require('@/assets/linkedIn/linkedInSmallGold.png')"
                />
              </span>
            </b-col>
          </b-row>
          <b-row
            v-if="$attrs.user"
            class="py-3 col-12 user-card-mid__info_text"
          >
            {{ $attrs.user.description[0] }}
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </keep-alive>
</template>

<script>
import { wordpressAPI } from "@/API/axiosAPI";

export default {
  name: "UserProfileCardMid",
  data() {
    return {
      avatar: null,
      imageBG: null,
    };
  },
  methods: {
    async getImage(id) {
      if (id) {
        const response = await wordpressAPI.getMedia(id);
        console.log(response.data.source_url);
        this.avatar = response.data.source_url;
      }
    },
    async getBGimage(id) {
      if (id) {
        const response = await wordpressAPI.getMedia(id);
        console.log(response.data.source_url);
        this.imageBG = response.data.source_url;
      }
    },
  },
  mounted() {
    this.getImage(this.$attrs.user.avatar);
    this.getBGimage(this.$attrs.user.imagebg);
  },
};
</script>

<style lang="scss" scoped>
.user-card-mid {
  position: relative;
  border-radius: 5px;
  background: #fff;
  min-height: 300px;
  &__bg {
    height: 150px;
    margin-bottom: 90px;
  }

  &__info {
    text-align: center;
    &_name {
      font-weight: 700;
    }

    &_text {
      padding: 0 2rem;
      @media (max-width: 400px) {
        padding: 0 1rem;
      }
    }
  }

  &__avatar-big {
    position: absolute;
    left: calc(50% - 90px);
    top: -180px;
  }
}
</style>