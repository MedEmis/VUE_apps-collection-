<template>
  <b-row class="tracked-item py-3 px-">
    <b-col class="col-4 tracked-item__image">
      <b-img :src="require('@/assets/linkedIn/' + $attrs.data.avatar)" />
    </b-col>
    <b-col class="col-8 px-3 font-weight-bold">
      <b-row class="tracked-item__info_name">
        {{ $attrs.data.name }}
      </b-row>
      <b-row>
        <small class="muted mx-4">{{ $attrs.data.employer }}</small>
      </b-row>
    </b-col>
    <b-icon
      v-if="$attrs.data.link"
      class="tracked-item__info_link"
      icon="chevron-right"
    />
  </b-row>
</template>

<script>
export default {
  name: "TrackedJobItem",
};
</script>

<style lang="scss" scoped>
.tracked-item {
  border: 1px solid rgb(241, 241, 241);
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__info {
    &_name {
      font-size: 14px;
      padding: 0 5px 0 20px;
    }
    &_link {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 40%;
    }
  }
}
</style>