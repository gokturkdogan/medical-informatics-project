<template>
  <div class="content">
    <div class="content__title">
      <span class="content__titleIcon">
        <font-awesome-icon
          class="content__titleIcon"
          icon="fa-solid fa-briefcase-medical"
        />
      </span>
      <span class="content__titleText">Verileriniz</span>
    </div>
    <div class="content__body">
      <div class="content__item">
        <div class="content__itemHeader">
          <font-awesome-icon
            class="content__itemHeaderIcon"
            icon="fa-solid fa-weight-scale"
          />
          <span class="content__itemTitle"> Ağırlığınız </span>
        </div>
        <div class="content__itemBody">
          <div class="content__itemDescription">
            Girmiş olduğunuz vücut ağırlığınız (Kullanıcı tarafından girilmesi
            ve güncellenmesi gerekmektedir.)
          </div>
          <div class="content__itemValue">91 kg</div>
        </div>
      </div>
      <div class="content__item">
        <div class="content__itemHeader">
          <font-awesome-icon
            class="content__itemHeaderIcon"
            icon="fa-solid fa-ruler-vertical"
          />
          <span class="content__itemTitle"> Boyunuz </span>
        </div>
        <div class="content__itemBody">
          <div class="content__itemDescription">
            Girmiş olduğunuz boy uzunluğunuz (Kullanıcı tarafından girilmesi ve
            güncellenmesi gerekmektedir.)
          </div>
          <div class="content__itemValue">185 cm</div>
        </div>
      </div>
      <div class="content__item">
        <div class="content__itemHeader">
          <font-awesome-icon
            class="content__itemHeaderIcon"
            icon="fa-solid fa-solid fa-percent"
          />
          <span class="content__itemTitle"> Yağ Oranınız </span>
        </div>
        <div class="content__itemBody">
          <div class="content__itemDescription">
            Girmiş olduğunuz yağ oranınız (Kullanıcı tarafından girilmesi ve
            güncellenmesi gerekmektedir.)
          </div>
          <div class="content__itemValue">15 %</div>
        </div>
      </div>
    </div>
    <div class="content__footer">
      <div class="content__item --footer">
        <div class="content__itemHeader">
          <font-awesome-icon
            class="content__itemHeaderIcon"
            icon="fa-solid fa-circle-plus"
          />
          <span class="content__itemTitle"> Vücut Kitle İndeksiniz </span>
        </div>
        <div class="content__itemBody">
          <div class="content__itemDescription">
            Girmiş olduğunuz veriler hesaplanarak bulunur.
          </div>
          <div class="content__itemValue">25</div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Content",
};
</script>
    
<style lang="scss" scoped>
.content {
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
  &__titleIcon {
    width: 50px;
    height: 50px;
  }
  &__body {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }
  &__item {
    border: 1px solid #cf11da;
    border-radius: 10px;
    width: 25%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    &:hover .content__itemHeaderIcon {
      color: white;
    }
    &:hover .content__itemTitle {
      color: white;
    }
    &:hover .content__itemDescription {
      color: white;
    }
  }
  &__itemHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__itemHeaderIcon {
    color: #cf11da;
    width: 30px;
    height: 30px;
  }
  &__itemTitle {
    color: #323232;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 500;
    margin: 15px 0;
    letter-spacing: 0.2px;
  }
  &__itemBody {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__itemDescription {
    text-align: center;
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
    color: #888;
  }
  &__itemValue {
    margin-top: 20px;
    text-align: center;
    font-size: 30px;
  }
  &__footer {
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }

  .--footer {
    width: 50%;
  }
}
</style>