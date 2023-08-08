<template>
  <div class="trainings">
    <Banner />
    <List />
  </div>
</template>

<script>
import Banner from "../components/training/Banner.vue";
import List from "../components/training/Trainings.vue";
export default {
  name: "Trainings",
  components: {
    Banner,
    List
  },
  created() {
    this.$store.dispatch("training/fetchTrainings");
  },
};
</script>