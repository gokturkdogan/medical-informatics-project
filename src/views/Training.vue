<template>
  <div class="training">
    <Banner />
    <LastTraining/>
    <List />
  </div>
</template>
  
  <script>
import Banner from "../components/training/Banner.vue";
import LastTraining from "../components/training/LastTraining.vue";
import List from "../components/training/List.vue";
export default {
  name: "Training",
  components: {
    Banner,
    LastTraining,
    List
  },
  created() {
    this.$store.dispatch("training/fetchTrainings");
  },
};
</script>