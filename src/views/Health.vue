<template>
    <div class="health">
      <Banner />
      <Content />
    </div>
  </template>
  
  <script>
  import Banner from '../components/health/Banner.vue';
  import Content from '../components/health/Content.vue';
  export default {
    name: "Health",
    components: {
        Banner,
        Content
    },
  };
  </script>