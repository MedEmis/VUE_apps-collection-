<template>
  <keep-alive>
    <b-col class="col-12 user-card-mid">
      <b-overlay :show="$attrs.getWFetching" no-wrap></b-overlay>
      <b-row>
        <b-img
          class="col-12 p-0 user-card-mid__bg"
          :src="$attrs.user.imageBGurl"
        />
      </b-row>
      <b-row class="user-card-mid__info">
        <b-col class="col-12">
          <b-img
            class="user-card-mid__avatar-big"
            :src="$attrs.user.avatarUrl"
          />
        </b-col>
        <b-col class="pb-3 col-12">
          <b-row class="py-2">
            <b-col v-if="$attrs.user" class="user-card-mid__info_name col-12"
              >{{ $attrs.user.nickname }}
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
            {{ $attrs.user.description }}
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </keep-alive>
</template>

<script>
export default {
  name: "UserProfileCardMid",
};
</script>

<style lang="scss" scoped>
.user-card-mid {
  position: relative;
  border-radius: 5px;
  background: #fff;
  min-height: 300px;
  &__bg {
    border-radius: 5px;
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