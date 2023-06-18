<template>
  <div class="home">
    <Banner />
    <Services />
  </div>
</template>

<script>
import Banner from '../components/home/Banner.vue';
import Services from '../components/home/Services.vue';
export default {
  name: "Home",
  components: {
    Banner,
    Services
  },
};
</script>