<template>
    <div class="contact">
      <Banner />
      <Content />
    </div>
  </template>
  
  <script>
  import Banner from '../components/contact/Banner.vue';
  import Content from '../components/contact/Content.vue';
  export default {
    name: "Contact",
    components: {
        Banner,
        Content
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>