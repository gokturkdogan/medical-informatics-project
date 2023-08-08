<template>
  <div class="training">
    <Banner />
    <LastTraining/>
    <List />
    <AddModal />
  </div>
</template>
  
  <script>
import Banner from "../components/training/Banner.vue";
import LastTraining from "../components/training/LastTraining.vue";
import List from "../components/training/List.vue";
import AddModal from "../components/training/AddTrainings.vue";
export default {
  name: "Training",
  components: {
    Banner,
    LastTraining,
    List,
    AddModal
  },
  created() {
    this.$store.dispatch("training/fetchTrainings");
  },
};
</script>