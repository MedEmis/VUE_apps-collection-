<template>
  <b-row class="mb-2">
    <b-col>
      <b-card class="card">
        <b-row>
          <b-col xl="1" lg="1" md="1" sm="2" xs="6" class="file">
            <b-img
              :src="require('../../../../assets/linkedIn/network/file.png')"
              alt="file"
            />
          </b-col>
          <b-col xl="10" lg="10" md="10" sm="8" xs="12" class="description">
            <b-row class="description__name">{{ $attrs.data.filename }}</b-row>
            <b-row class="description__file"> {{  $attrs.data.type }} file {{$attrs.data.filesize}} kb</b-row>
          </b-col>
          <b-col xl="1" lg="1" md="1" sm="2" xs="6" class="file"
            ><b-button href="#" variant="outline"
              ><b-icon
                icon="cloud-download"
                scale="2"
                variant="primary" /></b-button
          ></b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "fileHolder",
};
</script>


<style lang="scss" scoped>
.card {
  background: #e9f0f8;
}
.file {
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  padding: 15px;
  &__name {
    font-weight: 700;
    margin-bottom: 5px;
  }
  &__file {
    font-size: 12px;
  }
}
</style>