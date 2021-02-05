<template>
  <b-row class="user-card">
    <b-col class="col-4 user-card__image">
      <b-img :src="$attrs.data.image" />
    </b-col>
    <b-col class="col-8 user-card__info">
      <b-row class="user-card__info_name">
        {{ $attrs.data.title }}
      </b-row>
      <b-row class="user-card__info_views">
        {{ $attrs.data.views }} viewers
      </b-row>
    </b-col>
    <b-icon
      v-if="$attrs.data.link"
      class="user-card__info_link"
      icon="chevron-right"
    />
  </b-row>
</template>

<script>
export default {
  name: "GaleryItem",
};
</script>

<style lang="scss" scoped>
.user-card {
  position: relative;
  margin-bottom: 10px;
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__info {
    line-height: 20px;
    padding: 0 10px 0 30px;
    &_name {
      font-weight: 700;
      font-size: 12px;
      padding: 0 10px 0 0;
      text-transform: uppercase;
      word-wrap: wrap;
    }
    &_link {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 40%;
    }
    &_views {
      font-size: 10px;
      color: rgb(83, 74, 74);
    }
  }
}
</style>