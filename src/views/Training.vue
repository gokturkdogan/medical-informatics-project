<template>
    <div class="training">
        <Banner />
        <LastTraining />
    </div>
  </template>
  
  <script>
  import Banner from '../components/training/Banner.vue';
  import LastTraining from '../components/training/LastTraining.vue';
  export default {
    name: "Training",
    components: {
        Banner,
        LastTraining
    },
    created() {
        this.$store.dispatch('training/fetchTrainings')
    }
  };
  </script>