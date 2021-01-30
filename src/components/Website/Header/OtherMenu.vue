<template>
  <div class="other-menu">
    <b-collapse id="collapse-1" class="other-menu__body">
      <b-button class="other-menu__close" v-b-toggle.collapse-1 size="sm"
        ><b-icon icon="x" scale="2" class="m-1" />CLOSE</b-button
      >
      <b-col class="p-0">
        <b-row>
          <b-col class="col-9 other-menu__body_title px-5"
            >More from LinkedIn</b-col
          >
          <b-col class="col-3 p-3 text-center">
            <b-icon icon="question-circle" scale="1.5" variant="info" />
            <div>HELP</div></b-col
          >
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="other-menu__body_block">
              <b-row class="learning">
                <b-col class="learning__img col-2 p-2">
                  <b-icon icon="book" scale="2" />
                </b-col>
                <b-col class="col10 p-2">
                  <div class="learning__title">Learning with LinkedIn</div>
                  <small class="light">Courses, lectures, workshops</small>
                </b-col>
              </b-row>
              <b-row class="buttons-group">
                <b-col class="buttons-group__item">
                  <b-img
                    :src="require('@/assets/linkedIn/insights.png')"
                  />Insights</b-col
                >
                <b-col class="buttons-group__item">
                  <b-img
                    :src="require('@/assets/linkedIn/advertise.png')"
                  />advertise</b-col
                >
                <b-col class="buttons-group__item">
                  <b-img
                    :src="require('@/assets/linkedIn/groups.png')"
                  />groups</b-col
                >
                <b-col class="buttons-group__item">
                  <b-img
                    :src="require('@/assets/linkedIn/profinders.png')"
                  />profinders</b-col
                >
                <b-col class="buttons-group__item">
                  <b-img
                    :src="require('@/assets/linkedIn/salary.png')"
                  />salary</b-col
                >
                <b-col class="buttons-group__item">
                  <b-img
                    :src="require('@/assets/linkedIn/slideshare.png')"
                  />slideshare</b-col
                >
              </b-row>
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="other-menu__body_block servises">
              <div class="other-menu__body_block servises__title">
                Business services
              </div>
              <b-row>
                <b-col class="other-menu__body_block servises__item"
                  ><div>Talent Solutions</div>
                  <small>Find, attract and recruit talent</small></b-col
                >
              </b-row>
              <b-row>
                <b-col class="other-menu__body_block servises__item"
                  ><div>Sales Solutions</div>
                  <small>Unlock sales opportunities</small></b-col
                >
              </b-row>
              <b-row>
                <b-col class="other-menu__body_block servises__item"
                  ><div>Post a job</div>
                  <small
                    >Get your job in front of quality candidates</small
                  ></b-col
                >
              </b-row>
              <b-row>
                <b-col class="other-menu__body_block servises__item"
                  ><div>Marketing Solutions</div>
                  <small>Acquire customers and grow your buisness</small></b-col
                >
              </b-row>
              <b-row>
                <b-col class="other-menu__body_block servises__item"
                  ><div>Learning Solutions</div>
                  <small>Develop talent across your organisation</small></b-col
                >
              </b-row>
            </div>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <div class="other-menu__body_block">
              <b-row>
                <b-col class="col10 p-2">
                  <b-button block class="golden">
                    <div class="learning__title">Learning with LinkedIn</div>
                    <small class="light">Courses, lectures, workshops</small>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-collapse>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.other-menu {
  position: absolute;
  height: auto;
  top: -20px;
  right: 0px;
  z-index: 20;
  color: #000;
  background: rgb(250, 250, 250);
  &__close {
    color: #000;
    font-weight: 700;
    background: rgb(255, 255, 255);
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 30;
    width: 90px;
    height: 75px;
    right: 368px;
    @media (max-width: 450px) {
      right: 60px;
    }
  }
  &__body {
    hr {
      margin: 0;
    }
    width: 370px;
    height: 900px;
    margin-top: 20px;
    display: block;
    @media (max-width: 372px) {
      width: 100vw;
    }
    &_title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: 700;
      padding: 25px;
    }
    &_block {
      width: 314px;
      height: auto;
      margin: 10px auto 10px auto;
      @media (max-width: 372px) {
        padding: 1rem;
      }
      &.servises {
        text-transform: uppercase;
        font-size: 14px;
        &__title {
          font-weight: 700;
        }
        &__item {
          cursor: pointer;
          font-size: 12px;
          border: 1px solid rgb(228, 228, 228);
          border-radius: 5px;
          padding: 15px 20px;
          margin: 5px;
        }
      }
    }
  }
}
.learning {
  color: #fff;
  background: #0275b1;
  border-radius: 5px;
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.buttons-group {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  padding: 10px;
  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
  &__item {
    border-radius: 5px;
    border: 1px solid rgb(228, 228, 228);
    padding: 10px;
    margin: 5px;
    display: flex;
    cursor: pointer;
  }
}
.golden {
  text-align-last: left;
  cursor: pointer;
  border-radius: 5px;
  border:none;
  padding: 10px;
  background: linear-gradient(180deg, #d8c281 0%, #ac9b69 100%);
}
</style>