<template>
  <div class="trainings">
    <div class="trainings__item">
      <img
        src="../../assets//images//trainings/swimming-training.jpg"
        alt="Training"
        class="trainings__image"
      />
      <div class="trainings__content">
        <h3 class="trainings__title">Yüzme Antrenmanı</h3>
        <div class="trainings__header">
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span class="trainings__value">12:35</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span class="trainings__value">12/23/1998</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span class="trainings__value">Kapalı Ortam</span>
          </div>
        </div>
        <div class="trainings__exp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
      </div>
    </div>
    <div class="trainings__item">
      <img
        src="../../assets//images//trainings/swimming-training.jpg"
        alt="Training"
        class="trainings__image"
      />
      <div class="trainings__content">
        <h3 class="trainings__title">Yüzme Antrenmanı</h3>
        <div class="trainings__header">
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span class="trainings__value">12:35</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span class="trainings__value">12/23/1998</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span class="trainings__value">Kapalı Ortam</span>
          </div>
        </div>
        <div class="trainings__exp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
      </div>
    </div>
    <div class="trainings__item">
      <img
        src="../../assets//images//trainings/swimming-training.jpg"
        alt="Training"
        class="trainings__image"
      />
      <div class="trainings__content">
        <h3 class="trainings__title">Yüzme Antrenmanı</h3>
        <div class="trainings__header">
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span class="trainings__value">12:35</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span class="trainings__value">12/23/1998</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span class="trainings__value">Kapalı Ortam</span>
          </div>
        </div>
        <div class="trainings__exp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
      </div>
    </div>
    <div class="trainings__item">
      <img
        src="../../assets//images//trainings/swimming-training.jpg"
        alt="Training"
        class="trainings__image"
      />
      <div class="trainings__content">
        <h3 class="trainings__title">Yüzme Antrenmanı</h3>
        <div class="trainings__header">
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span class="trainings__value">12:35</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span class="trainings__value">12/23/1998</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span class="trainings__value">Kapalı Ortam</span>
          </div>
        </div>
        <div class="trainings__exp">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Trainings",
};
</script>
<style lang="scss" scoped>
.trainings {
  padding: 50px 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__item {
    width: fit-content;
    max-width: 30%;
    background-color: #f7f6f6;
    border: 1px solid #e8e5f5;
    border-radius: 5px;
    margin-top: 40px;
  }

  &__image {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__content {
    padding: 20px;
  }

  &__title {
    color: #323232;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 0.3px;
    text-transform: capitalize;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__value {
    margin-left: 5px;
  }

  &__exp {
    margin-top: 20px;
  }
}
</style>