<template>
  <div class="services">
    <div class="services__title">
      <span class="services__titleIcon">
        <font-awesome-icon
          class="services__icon"
          icon="fa-brands fa-servicestack"
        />
      </span>
      <span class="services__titleText">Hizmetler</span>
    </div>
    <div class="services__body">
      <router-link to="/" class="services__item">
        <div class="services__itemHeader">
          <font-awesome-icon
            class="services__itemHeaderIcon"
            icon="fa-solid fa-dumbbell"
          />
        </div>
        <div class="services__itemContent">
          <div class="services__itemTitle">Antrenman Programı</div>
          <div class="services__itemDescription">
            Kendinize özel antrenman programı düzenleyip takibini yapıp,
            antrenman istatistiklerinizi takip edebilirsiniz.
          </div>
        </div>
      </router-link>
      <router-link to="/health" class="services__item">
        <div class="services__itemHeader">
          <font-awesome-icon
            class="services__itemHeaderIcon"
            icon="fa-solid fa-heart"
          />
        </div>
        <div class="services__itemContent">
          <div class="services__itemTitle">Sağlık Takibi</div>
          <div class="services__itemDescription">
            Vücut istatistiklerinizi sisteme girerek takibini yapabilir
            kendinize hedefler oluşturabilirsiniz.
          </div>
        </div>
      </router-link>
      <router-link to="/" class="services__item">
        <div class="services__itemHeader">
          <font-awesome-icon
            class="services__itemHeaderIcon"
            icon="fa-solid fa-dumbbell"
          />
        </div>
        <div class="services__itemContent">
          <div class="services__itemTitle">Diyet Takibi</div>
          <div class="services__itemDescription">
            Hazırlamış olduğunuz diyet programına uyumunuzu ilgili ekranlar
            sayesinde takip edebilirsiniz.
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "Services",
};
</script>
  <style lang="scss" scoped>
.services {
  padding: 100px 200px;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__titleIcon {
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
  &__titleText {
    font-size: 28px;
    letter-spacing: 0.4px;
    line-height: 1.3;
    color: #323232;
    font-weight: 700;
  }
  &__icon {
    width: 50px;
    height: 50px;
  }
  &__body {
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
  }
  &__item {
    background: white;
    text-decoration: none;
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
    &:hover .services__itemDescription {
      color: white;
    }
    &:hover .services__itemTitle {
      color: white;
    }
    &:hover .services__itemHeaderIcon {
      background: none;
    }
  }
  &__itemHeaderIcon {
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    color: white;
    height: 25px;
    border-radius: 100%;
    padding: 15px 12px;
  }
  &__itemTitle {
    margin-top: 20px;
    text-align: center;
    color: #323232;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: 0.2px;
  }
  &__itemDescription {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    line-height: 1.7;
    color: #888;
  }
}
</style>