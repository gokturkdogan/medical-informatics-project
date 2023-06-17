<template>
  <div v-if="notify.isShow" class="notify">
    <div class="notify__content">
      <font-awesome-icon class="notify__icon" icon="fa-solid fa-circle-check" />
      <div class="notify__detail">
        <h4 class="notify__title">Başarılı</h4>
        <p class="notify__message">{{ notify.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notify",
  computed: {
    notify() {
      return this.$store.getters["global/getNotify"];
    },
  },
};
</script>

<style lang="scss" scoped>
.notify {
  padding: 10px;
  max-width: 400px;
  background: #f3f3f3;
  position: fixed;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  top: 0;
  right: 0;

  &__content {
    display: flex;
    padding: 20px;
  }

  &__icon {
    height: 40px;
    width: 40px;
    color: rgb(0, 200, 0);
  }

  &__detail {
    margin-left: 20px;
  }

  &__message {
    margin-top: 10px;
  }
}
</style>

