<template>
  <b-col class="col-12 user-card-mid">
    <b-row>
      <b-img
        class="col-12 p-0 user-card-mid__bg"
        :src="require('../../../../assets/linkedIn/profileBG.jpg')"
      />
    </b-row>
    <b-row class="user-card-mid__info">
      <b-col class="col-12">
        <b-img
          class="user-card-mid__avatar-big"
          :src="require('../../../../assets/linkedIn/userBig.png')"
        />
      </b-col>
      <b-col class="pb-3 col-12">
        <b-row class="py-2">
          <b-col class="user-card-mid__info_name col-12"
            >Dmitry Kargaev
            <span>
              <b-img
                :src="
                  require('../../../../assets/linkedIn/linkedInSmallGold.png')
                "
              />
            </span>
          </b-col>
        </b-row>
        <b-row class="py-3 col-12 user-card-mid__info_text">
          Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS
          & android) and creative projects. Open to offers.
        </b-row>
      </b-col>
    </b-row>
  </b-col>
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