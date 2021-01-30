<template>
  <b-row class="searches-item py-3 px-">
    <b-col class="col-10 px-2 font-weight-bold">
      <b-row class="searches-item__info_name">
        {{ $attrs.data.name }}
        <span v-if="$attrs.data.plus" class="text-success mx-2"
          >+{{ $attrs.data.plus }}</span
        >
      </b-row>
      <b-row>
        <small class="muted mx-4">{{ $attrs.data.location }}</small>
      </b-row>
    </b-col>
    <b-col class="col-2 searches-item__image p-0">
      <b-icon
        style="cursor: pointer"
        v-if="$attrs.data.bell"
        icon="bell"
        scale="1.5"
        variant="primary"
      />
      <b-icon
        style="cursor: pointer"
        v-if="!$attrs.data.bell"
        icon="bell"
        scale="1.5"
        variant="light"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "MySearchesItem",
};
</script>

<style lang="scss" scoped>
.searches-item {
  border: 1px solid rgb(241, 241, 241);
  background: #e9f0f8;
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