<template>
  <b-row class="user-card">
    <b-col class="col-3 user-card__image">
      <router-link to="profile">
        <img alt="Circle image" src="@/assets/linkedIn/user.png" />
      </router-link>
    </b-col>
    <b-col class="col-9 user-card__info">
      <b-row class="user-card__info_name">
        D. Kargaev<span class="user-card__info_name__sufix">YOU</span>
      </b-row>
      <b-row class="user-card__info_views">
        367 views today
        <span class="user-card__info_views__suffix"
          >+32 <b-icon icon="arrow-up-right" aria-hidden="true" />
        </span>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserCardSmall",
};
</script>

<style lang="scss" scoped>
.user-card {
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__info {
    &_name {
      font-weight: 700;
      text-transform: uppercase;
      &__sufix {
        margin-left: 10px;
        font-size: 14px;
        font-weight: normal;
        color: rgb(133, 124, 124);
      }
    }

    &_views {
      font-size: 14px;
      color: rgb(83, 74, 74);
      &__suffix {
        margin-left: 5px;
        font-weight: 700;
        color: rgb(17, 182, 39);
      }
    }
  }
}
</style>