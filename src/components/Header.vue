<template>
    <div class="header">
        <div class="header__area">
            <div class="header__logoArea">
            <img src="../assets/images/logos/headerLogo.png" alt="Logo" class="header__logo">
            <span class="header__logoText">
                Health Master
            </span>
        </div>
        <div class="header__navigation">
            <router-link class="header__link" to="/">{{ $t("navBar.home") }}</router-link>
            <router-link class="header__link" to="/health">{{ $t("navBar.health") }}</router-link>
            <router-link class="header__link" to="/training">{{ $t("navBar.training") }}</router-link>
            <router-link class="header__link" to="/">{{ $t("navBar.diet") }}</router-link>
        </div>
        <LocaleSwitcher />
        </div>
    </div>
</template>
<script>
import LocaleSwitcher from '../components/base/LocaleSwitcher.vue';
    export default {
        name: "Header",
        components: {
            LocaleSwitcher
        }
    }
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
        box-shadow: 0 -6px 10px 5px #000000;
        padding: 20px 0;
        position: fixed;
        z-index: 1;
        width: 100%;

        &__area {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: auto;
        }

        &__logoArea {
            display: flex;
            align-items: center;
            width: fit-content;
        }

        &__logo {
            width: 50px;
        }

        &__logoText {
            margin-left: 10px;
            text-transform: uppercase;
            font-weight: 600;
        }

        &__navigation {
            display: flex;
            justify-content: space-between;
            width: 50%;
        }

        &__link {
            text-transform: uppercase;
            font-weight: 600;
            text-decoration: none;
            &:hover {
                color: #9C37E6;
            }
        }
    }
</style>