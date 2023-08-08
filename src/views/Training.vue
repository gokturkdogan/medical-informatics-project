<template>
  <div class="training">
    <Banner />
    <LastTraining @open-modal="openModal"/>
    <List />
    <AddModal v-if="isModalOpen" @close-modal="closeModal"/>
  </div>
</template>
  
  <script>
import Banner from "../components/training/Banner.vue";
import LastTraining from "../components/training/LastTraining.vue";
import List from "../components/training/List.vue";
import AddModal from "../components/training/AddTrainings.vue";
export default {
  name: "Training",
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  },  
  components: {
    Banner,
    LastTraining,
    List,
    AddModal
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  },
  created() {
    this.$store.dispatch("training/fetchTrainings");
  },
};
</script>