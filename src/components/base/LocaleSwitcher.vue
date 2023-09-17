<script setup>
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '../../i18n';
const { locale } = useI18n({ useScope: 'global' });

const handleChangeLocale = (event) => {
  const newLocale = event.target.value;
  setI18nLanguage(newLocale);
};
</script>

<template>
  <select v-model="locale" @change="handleChangeLocale">
    <option
      v-for="optionLocale in supportLocales"
      :key="`locale-${optionLocale}`"
      :value="optionLocale">{{ optionLocale }}
    </option>
  </select>
</template>
<style lang="scss" scoped>
  select {
    padding: 10px;
    font-size: 20px;
    text-transform: uppercase;
    border: 2px solid #B822DF;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #B822DF;
      color: white;
    }
    option {
      background: none;
    }
  }
</style>
