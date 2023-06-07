<template>
  <div class="home">
    <div class="home__banner">
      <div class="home__bannerInfo">
        <h3 class="home__bannerTitle">Medical Care Uygulamasına Hoşgeldiniz</h3>
        <h1 class="home__bannerSubTitle">Sağlığınızı Takip Edin</h1>
        <h4 class="home__bannerDescription">
          Uygulamanın çeşitli fonksiyonları ile vücut sağlığınızı ve antrenman
          programınızı takip edin
        </h4>
        <div class="home__bannerButtons">
          <a class="home__bannerButton" href="">Keşfet</a>
          <router-link class="home__bannerButton --secondary" to="/bar"
            >İletişim</router-link
          >
        </div>
      </div>
      <img
        class="home__bannerPhoto"
        src="../assets/images/banners/banner_1.png"
        alt="banner"
      />
    </div>
    <div class="home__services">
      <div class="home__servicesTitle">
        <span class="home__serviceTitleIcon"
          ><font-awesome-icon
            class="home__serviceIcon"
            icon="fa-brands fa-servicestack"
        /></span>
        <span class="home__servicesTitleText">Hizmetler</span>
      </div>
      <div class="home__serviceBody">
        <div class="home__serviceItem">
          <div class="home__serviceItemHeader">
            <font-awesome-icon
              class="home__itemHeaderIcon"
              icon="fa-solid fa-dumbbell"
            />
          </div>
          <div class="home__serviceItemContent">
            <div class="home__serviceItemTitle">Antrenman Programı</div>
            <div class="home__serviceItemDescription">
              Kendinize özel antrenman programı düzenleyip takibini yapıp,
              antrenman istatistiklerinizi takip edebilirsiniz.
            </div>
          </div>
        </div>
        <div class="home__serviceItem">
          <div class="home__serviceItemHeader">
            <font-awesome-icon
              class="home__itemHeaderIcon"
              icon="fa-solid fa-heart"
            />
          </div>
          <div class="home__serviceItemContent">
            <div class="home__serviceItemTitle">Sağlık Takibi</div>
            <div class="home__serviceItemDescription">
              Vücut istatistiklerinizi sisteme girerek takibini yapabilir kendinize hedefler oluşturabilirsiniz.
            </div>
          </div>
        </div>
        <div class="home__serviceItem">
          <div class="home__serviceItemHeader">
            <font-awesome-icon
              class="home__itemHeaderIcon"
              icon="fa-solid fa-dumbbell"
            />
          </div>
          <div class="home__serviceItemContent">
            <div class="home__serviceItemTitle">Antrenman Programı</div>
            <div class="home__serviceItemDescription">
              Kendinize özel antrenman programı düzenleyip takibini yapıp,
              antrenman istatistiklerinizi takip edebilirsiniz.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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