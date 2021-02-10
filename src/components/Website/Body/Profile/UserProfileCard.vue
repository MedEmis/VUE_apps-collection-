<template>
  <b-col class="user-profile-card">
    <b-row class="user-profile-card__upper-tools">
      <b-button variant="light"
        ><b-icon icon="download" variant="secondary"
      /></b-button>
      <div>
        <b-button
          variant="light"
          class="user-profile-card__upper-tools_profile-button"
        >
          <b-icon block icon="pencil-square" variant="secondary" />Edit
          profile</b-button
        >
        <b-button variant="light"
          ><b-icon icon="three-dots-vertical" variant="secondary"
        /></b-button>
      </div>
    </b-row>
    <b-row>
      <b-img
        class="col-12 p-0 user-profile-card__bg"
        :src="$attrs.data.imageBGurl"
      />
    </b-row>
    <b-row class="user-profile-card__info">
      <b-col class="position-relative" xl="3" lg="4" md="4" sm="12" xs="8">
        <b-img
          class="user-profile-card__avatar-big"
          :src="$attrs.data.avatarUrl"
        />
      </b-col>
      <b-col xl="9" lg="8" md="8" sm="12" xs="8" class="px-3">
        <b-row class="py-2">
          <b-col xl="5" lg="6" md="12" class="user-profile-card__info_name">
            {{ $attrs.data.nickname }}
            <span>
              <b-img
                :src="
                  require('../../../../assets/linkedIn/linkedInSmallGold.png')
                "
              />
            </span>
          </b-col>
          <b-col xl="7" lg="6" md="12" class="user-profile-card__info_adress"
            ><span>
              <b-img
                class="p-1"
                :src="
                  require('../../../../assets/linkedIn/navigationArrow.png')
                "
            /></span>
            {{ $attrs.data.address }}</b-col
          >
        </b-row>
        <b-row class="py-3 user-profile-card__info_text">
          {{ $attrs.data.description }}
        </b-row>
        <b-row class="pb-4">
          <b-col xl="4" lg="4" md="5" sm="5" xs="10" class="p-0 mx-2 my-1">
            <b-button block variant="outline-primary">Contact info</b-button>
          </b-col>
          <b-col xl="6" lg="6" md="5" sm="5" xs="10" class="p-0 mx-2 my-1">
            <b-button block variant="outline-primary"
              >{{ $attrs.data.connections }} connections</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
export default {
  name: "UserProfileCard",
};
</script>

<style lang="scss">
.user-profile-card {
  background: rgb(255, 255, 255);
  position: relative;
  border-radius: 5px;
  &__upper-tools {
    position: absolute;
    width: 95%;
    top: 5%;
    left: 4%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_profile-button {
      margin-right: 20px;
    }
    @media (max-width: 700px) {
      width: 90%;
      left: 10%;
    }
    @media (max-width: 315px) {
      width: 100%;
      left: 5%;
    }
  }
  &__bg {
    background: #fff;
    min-height: 100px;
    @media (max-width: 574px) {
      height: 100px;
    }
  }
  &__avatar-big {
    position: absolute;
    top: -2rem;
    width: calc(50px + 8vw);
  }
  &__info {
    background: rgb(255, 255, 255);
    font-size: 18px;
    padding: 0 15px 15px 15px;
    &_name {
      text-align: left;
      padding: 0;
      font-weight: 900;
      @media (max-width: 765px) {
        text-align: right;
      }
      @media (max-width: 574px) {
        padding-top: 20px;
      }
      @media (max-width: 435px) {
        padding-top: 40px;
      }
    }

    &_adress {
      padding: 0;
      text-align: right;
    }

    &_text {
    }
  }
}
</style>