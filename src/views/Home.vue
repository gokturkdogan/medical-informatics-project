<template>
  <div class="home">
    <Banner />
    <Services />
  </div>
</template>

<script>
import Banner from '../components/home/Banner.vue';
import Services from '../components/home/Services.vue';
export default {
  name: "Home",
  components: {
    Banner,
    Services
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__banner {
    color: white;
    display: flex;
    background-color: #814aeb;
    padding: 100px 200px;
  }
  &__bannerInfo {
    margin-top: 100px;
  }
  &__bannerTitle {
    font-size: 22px;
  }
  &__bannerSubTitle {
    font-size: 65px;
  }
  &__bannerDescription {
    margin-top: 50px;
  }
  &__bannerButtons {
    margin-top: 30px;
    display: flex;
  }
  &__bannerButton {
    text-decoration: none;
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    box-shadow: 0 2px 4px rgba(4, 6, 6, 0.15);
    color: white;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    letter-spacing: 1.1px;
  }
  .--secondary {
    background: white;
    color: #cf11da;
    margin-left: 20px;
    transition: 0.5s;
    &:hover {
      color: white;
      background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    }
  }
  &__bannerPhoto {
    width: 600px;
  }
  &__services {
    padding: 100px 200px;
  }
  &__servicesTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__serviceTitleIcon {
    color: #cf11da;
    position: relative;
    &::before {
      content: "";
      left: 70px;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      height: 3px;
      width: 50px;
      background: #7b6cd5;
    }
    &::after {
      content: "";
      right: 70px;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      height: 3px;
      width: 50px;
      background: #7b6cd5;
    }
  }
  &__servicesTitleText {
    font-size: 28px;
    letter-spacing: 0.4px;
    line-height: 1.3;
    color: #323232;
    font-weight: 700;
  }
  &__serviceIcon {
    width: 50px;
    height: 50px;
  }
  &__serviceBody {
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
  }
  &__serviceItem {
    background: white;
    padding: 50px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #cf11da;
    &:hover {
      background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    }
    &:hover .home__serviceItemDescription {
      color: white;
    }
    &:hover .home__serviceItemTitle {
      color: white;
    }
    &:hover .home__itemHeaderIcon {
      background: none;
    }
  }
  &__serviceItemHeader {
  }
  &__itemHeaderIcon {
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    color: white;
    height: 25px;
    border-radius: 100%;
    padding: 15px 12px;
  }
  &__serviceItemContent {
  }
  &__serviceItemTitle {
    margin-top: 20px;
    text-align: center;
    color: #323232;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: 0.2px;
  }
  &__serviceItemDescription {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    line-height: 1.7;
    color: #888;
  }
}
</style>