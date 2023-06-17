<template>
  <div>
    <Header />
    <Content />
    <Notify />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Notify from "./components/base/Notify.vue";
export default {
  components: {
    Header,
    Content,
    Notify,
  },
};
</script>
