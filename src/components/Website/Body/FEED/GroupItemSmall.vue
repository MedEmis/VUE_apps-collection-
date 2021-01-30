<template>
  <b-row class="group-item py-3 px-">
    <b-col class="col-4 group-item__image">
      <b-img
        :src="require('@/assets/linkedIn/network/' + $attrs.data.avatar)"
      />
    </b-col>
    <b-col class="col-8 px-2 font-weight-bold">
      <b-row class="group-item__info_name">
        {{ $attrs.data.name }}
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "GroupItemSmall",
};
</script>

<style lang="scss" scoped>
.group-item {
  border: 1px solid rgb(241, 241, 241);
  border-radius: 5px;
  margin-bottom: 20px;
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
  }
}
</style>