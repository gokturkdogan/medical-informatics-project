<template>
  <div class="content">
    <a
      class="content__item"
      target="_blank"
      href="https://www.linkedin.com/in/gokturk-dogan/"
    >
      <div class="content__header">
        <font-awesome-icon class="content__icon" icon="fa-brands fa-linkedin" />
      </div>
      <div class="content__body">
        <div class="content__link">Linkedln</div>
      </div>
    </a>
    <a class="content__item" href="mailto:gokturk.dogan@beymen.com">
      <div class="content__header">
        <font-awesome-icon class="content__icon" icon="fa-solid fa-envelope" />
      </div>
      <div class="content__body">
        <div class="content__link">Email Adresi</div>
      </div>
    </a>
    <a
      class="content__item"
      target="_blank"
      href="https://github.com/gokturkdogan"
    >
      <div class="content__header">
        <font-awesome-icon class="content__icon" icon="fa-brands fa-github" />
      </div>
      <div class="content__body">
        <div class="content__link">Github</div>
      </div>
    </a>
  </div>
</template>
    
<script>
export default {
  name: "Content",
};
</script>
    
<style lang="scss" scoped>
.content {
  padding: 100px 200px;
  display: flex;
  justify-content: space-between;

  &__item {
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    &:hover .content__icon {
      color: #ffc400;
    }
    &:hover .content__link {
      color: #ffc400;
    }
  }
  &__icon {
    width: 50px;
    height: 50px;
  }
  &__link {
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>