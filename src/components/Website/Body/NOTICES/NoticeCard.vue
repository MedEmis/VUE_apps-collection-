<template>
  <b-row class="notice-block bg-white mb-2 p-2">
    <b-col>
      <b-row class="notice-block px-2">
        <b-col
          class="notice-block__image p-2"
          xl="2"
          lg="12"
          md="12"
          sm="12"
          xs="12"
        >
          <div class="notice-block__list">
            <b-img
              v-for="(user, index) in $attrs.data.avatar"
              :key="index"
              class="notice-block__list_item"
              :src="require('@/assets/linkedIn/' + user)"
              alt="user"
            />
          </div>
        </b-col>
        <b-col
          xl="9"
          lg="12"
          md="12"
          sm="12"
          xs="12"
          class="notice-block__info px-4"
        >
          <b-row class="notice-block__position">{{ $attrs.data.title }}</b-row>
          <b-row class="notice-block__employment">
            <span class="notice-block__employment_location">{{
              $attrs.data.time
            }}</span>
          </b-row>
        </b-col>
        <b-col
          xl="1"
          lg="12"
          md="12"
          sm="12"
          xs="12"
          class="notice-block__button"
          ><b-icon scale="2" icon="three-dots"
        /></b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "NoticeCard",
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
  background: linear-gradient(to bottom, #ffffff42, #ffffff25, #ffffff);
}
.notice-block {
  position: relative;
  border-radius: 5px;
  min-height: 78px;
  font-size: 14px;

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__list {
    padding: 0;
    &_item {
      width: 45px;
      height: 45px;
      position: relative;
      &:not(:last-child) {
        margin-right: -25px;
      }
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 765px) {
      padding: 0 rem;
    }
  }
  &__position {
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__employment {
    margin-bottom: 5px;
    &_empoloyer {
      font-weight: 500;
      margin-right: 10px;
    }

    &_location {
      font-weight: 300;
      color: rgb(165, 165, 165);
    }
  }

  &__duration {
    margin-bottom: 5px;
    &_date {
      margin-right: 10px;
      color: rgb(156, 156, 156);
    }

    &_duration {
      color: #0275b1;
    }
  }

  &__description {
    word-wrap: wrap;
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 5px 25px;
      background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
    }
  }
}
</style>