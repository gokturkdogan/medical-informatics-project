<template>
  <div class="trainings">
    <div v-for="data in trainings" :key="data" class="trainings__item">
      <img
        v-if="data.type == 'Koşu'"
        src="../../assets/images/trainings/running-training.png"
        alt="Training"
        class="trainings__image"
      />
      <img
        v-if="data.type == 'Yüzme'"
        src="../../assets/images/trainings/swimming-training.jpg"
        alt="Training"
        class="trainings__image"
      />
      <img
        v-if="data.type == 'Ağırlık'"
        src="../../assets/images/trainings/weight-training.jpg"
        alt="Training"
        class="trainings__image"
      />
      <div class="trainings__content">
        <h3 class="trainings__title">{{ getTrainingTitles(data) }}</h3>
        <div class="trainings__header">
          <div class="trainings__desc">
            <font-awesome-icon
              class="trainings__icon"
              icon="fa-solid fa-clock"
            />
            <span class="trainings__value">{{ data.time }}</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon
              class="trainings__icon"
              icon="fa-solid fa-calendar"
            />
            <span class="trainings__value">{{
              data.date.split("-").reverse().join("-")
            }}</span>
          </div>
          <div class="trainings__desc">
            <font-awesome-icon
              class="trainings__icon"
              icon="fa-solid fa-location-dot"
            />
            <span class="trainings__value">{{
              getTrainingLocations(data)
            }}</span>
          </div>
        </div>
        <div class="trainings__exp" v-html="getTrainingsTexts(data)"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Trainings",
  computed: {
    trainings() {
      return this.$store.getters["training/getTrainingData"];
    },
    selectedLocale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    getTrainingTitles(data) {
      if (data.type == "Ağırlık") {
        return this.$t("trainings.types.weight");
      } else if (data.type == "Yüzme") {
        return this.$t("trainings.types.swimming");
      } else {
        return this.$t("trainings.types.running");
      }
    },
    getTrainingLocations(data) {
      if (data.location == "Kapalı Ortam") {
        return this.$t("trainings.locations.inDoor");
      } else {
        return this.$t("trainings.locations.outDoor");
      }
    },
    getTrainingsTypes(data) {
      if (data.calories <= 200) {
        return this.$t("trainings.kinds.warmUp");
      } else {
        return this.$t("trainings.kinds.fatBurning");
      }
    },
    getTrainingsTexts(data) {
      if (this.selectedLocale == "tr") {
        return `Girilen verilere göre <span style="color: red; font-weight: 600">${
          data.calories
        } kCal</span> yakılmıştır ve bu bir <span style="color: red; font-weight: 600">${this.getTrainingsTypes(
          data
        )}</span> antrenmanıdır.`;
      } else {
        return `According to the entered data <span style="color: red; font-weight: 600">${
          data.calories
        } kCal</span> was burned and this is a <span style="color: red; font-weight: 600">${this.getTrainingsTypes(
          data
        )}</span> workout.`;
      }
    },
  },
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
    height: 200px;
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

  &__icon {
    color: #7b6cd5;
  }

  &__value {
    margin-left: 5px;
    font-size: 14px;
    color: #888;
    letter-spacing: 0.4px;
  }

  &__exp {
    margin-top: 20px;
    font-size: 15px;
    line-height: 1.7;
    color: #888;
  }
}
</style>