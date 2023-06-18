<template>
  <div class="training">
    <div class="training__content">
      <div v-for="data in trainings.slice(-1)"
        :key="data" class="training__image">
        <img
          v-if="data.type == 'Ağırlık'"
          class="training__photo"
          src="../../assets/images/trainings/weight-training.jpg"
          alt="Training"
        />
        <img
          v-if="data.type == 'Koşu'"
          class="training__photo"
          src="../../assets/images/trainings/running-training.png"
          alt="Training"
        />
        <img
          v-if="data.type == 'Yüzme'"
          class="training__photo"
          src="../../assets/images/trainings/swimming-training.jpg"
          alt="Training"
        />
      </div>
      <div class="training__details">
        <h4 class="training__title">Yüzme Antrenmanı</h4>
        <p class="training__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim.
        </p>
      </div>
    </div>
    <div class="training__side">
      <div
        v-for="data in trainings.slice(-1)"
        :key="data"
        class="training__sideBar"
      >
        <div class="training__sideBarHeader">Antrenman Bilgileri</div>
        <div class="training__sideBarBody">
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Antrenman Türü:</span>
            <span class="training__sideBarValue">{{ data.type }}</span>
          </div>
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Antrenman Yeri:</span>
            <span class="training__sideBarValue">{{ data.location }}</span>
          </div>
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Antrenman Tarih:</span>
            <span class="training__sideBarValue">{{ data.date }}</span>
          </div>
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Antrenman Saati:</span>
            <span class="training__sideBarValue">{{ data.time }}</span>
          </div>
        </div>
      </div>
      <div
        v-for="data in trainings.slice(-1)"
        :key="data"
        class="training__sideBar"
      >
        <div class="training__sideBarHeader">Antrenman İstatistikleri</div>
        <div class="training__sideBarBody">
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Yakılan Kalori:</span>
            <span class="training__sideBarValue">{{ data.calories }} Kcal</span>
          </div>
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Antrenman Süresi:</span>
            <span class="training__sideBarValue">{{ data.duration }} saat</span>
          </div>
          <div class="training__sideBarItem">
            <span class="training__sideBarLabel">Antrenman Statüsü:</span>
            <span class="training__sideBarValue">Isınma</span>
          </div>
        </div>
      </div>
      <button class="training__addBtn">Antrenman Ekle</button>
    </div>
  </div>
</template>
      
<script>
export default {
  name: "LastTraining",
  props: {
    trainings: {
      type: Array,
    },
  },
};
</script>
      
<style lang="scss" scoped>
.training {
  display: flex;
  justify-content: space-between;
  padding: 100px 200px;

  &__content {
    width: 65%;
    border-radius: 5px;
    background-color: #ededed;
    border: 1px solid #dbdbdb;
  }
  &__photo {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &__details {
    margin-top: 20px;
    padding: 20px;
  }
  &__title {
    color: #323232;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  &__description {
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.7;
    color: #888;
  }
  &__side {
    width: 25%;
  }
  &__sideBar {
    width: 100%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 20px 20px;
    height: fit-content;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
  &__sideBarHeader {
    font-size: 20px;
    letter-spacing: 0.3px;
    color: #666;
    font-weight: 600;
  }
  &__sideBarBody {
    margin-top: 20px;
  }
  &__sideBarItem {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 1px solid #e7e7ea;
    }
  }
  &__sideBarLabel {
    color: #7b6cd5;
    font-weight: 600;
  }
  &__sideBarValue {
    color: #888;
    font-size: 15px;
  }
  &__addBtn {
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    border: none;
    color: white;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.1px;
    text-align: center;
    padding: 15px 20px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 70%;
    }
  }
}
</style>