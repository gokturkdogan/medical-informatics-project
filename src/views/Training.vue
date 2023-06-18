<template>
  <div class="training">
    <Banner />
    <LastTraining :trainings="trainings"/>
  </div>
</template>
  
  <script>
import Banner from "../components/training/Banner.vue";
import LastTraining from "../components/training/LastTraining.vue";
export default {
  name: "Training",
  components: {
    Banner,
    LastTraining,
  },
  created() {
    this.$store.dispatch("training/fetchTrainings");
  },
  computed: {
    trainings() {
      return this.$store.getters["training/getTrainingData"];
    },
  },
};
</script>