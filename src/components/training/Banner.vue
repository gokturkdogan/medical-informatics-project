<template>
    <div class="banner">
      <div class="banner__title">Antrenmanlarınızı Takip Edin</div>
    </div>
  </template>
      
<script>
  export default {
    name: "Banner",
  };
  </script>
      
    <style lang="scss" scoped>
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-image: url("../../assets/images/banners/banner_training.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
    &__title {
      color: #fff;
      font-size: 40px;
      font-weight: 600;
      line-height: 1.3;
      text-transform: capitalize;
      margin-bottom: 35px;
    }
  }
  </style>