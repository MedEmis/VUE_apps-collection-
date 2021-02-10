<template>
  <b-col class="col-12 dashboard">
    <b-row class="dashboard-title"
      ><span class="dashboard-title_text">your dashboard</span>
      <a class="link-block" href="#">go to stats</a></b-row
    >
    <b-row class="dashboard-vievs">
      <b-col>
        <b-row class="dashboard-vievs__number">367</b-row>
        <b-row class="dashboard-vievs__text">views today</b-row>
      </b-col>
    </b-row>
    <b-row class="dashboard-vievs">
      <b-col>
        <b-row class="dashboard-vievs__number">15</b-row>
        <b-row class="dashboard-vievs__text">post views</b-row>
      </b-col>
    </b-row>
    <b-row class="dashboard-vievs">
      <b-col>
        <b-row class="dashboard-vievs__number">9</b-row>
        <b-row class="dashboard-vievs__text">search appereances</b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "DashBoard",
};
</script>

<style lang="scss">
.dashboard {
  background: #fff;
  padding-bottom: 3rem;
}
.dashboard-title {
  padding: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  &_text {
    font-weight: 700;
  }

  &_link {
  }
}
.dashboard-vievs {
  padding: 0 2rem;
  &__number {
    color: #0275b1;
    font-size: 52px;
    font-weight: 700;
  }

  &__text {
  }
}
</style>