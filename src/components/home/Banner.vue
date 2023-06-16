<template>
  <div class="banner">
    <div class="banner__info">
      <h3 class="banner__title">Medical Care Uygulamasına Hoşgeldiniz</h3>
      <h1 class="banner__subTitle">Sağlığınızı Takip Edin</h1>
      <h4 class="banner__description">
        Uygulamanın çeşitli fonksiyonları ile vücut sağlığınızı ve antrenman
        programınızı takip edin
      </h4>
      <div class="banner__buttons">
        <a class="banner__button" href="">Keşfet</a>
        <router-link class="banner__button --secondary" to="/"
          >İletişim</router-link
        >
      </div>
    </div>
    <img
      class="banner__photo"
      src="../../assets/images/banners/banner_1.png"
      alt="banner"
    />
  </div>
</template>
  
<script>
export default {
  name: "Banner",
};
</script>
<style lang="scss" scoped>
.banner {
  color: white;
  display: flex;
  background-color: #814aeb;
  padding: 100px 200px;
  &__info {
    margin-top: 100px;
  }
  &__title {
    font-size: 22px;
  }
  &__subTitle {
    font-size: 65px;
  }
  &__description {
    margin-top: 50px;
  }
  &__buttons {
    margin-top: 30px;
    display: flex;
  }
  &__button {
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
  &__photo {
    width: 600px;
  }
}
</style>