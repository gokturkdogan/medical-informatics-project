<template>
  <div class="content">
    <div class="content__title">
      <span class="content__titleIcon">
        <font-awesome-icon
          class="content__titleIcon"
          icon="fa-solid fa-briefcase-medical"
        />
      </span>
      <span class="content__titleText">{{ $t('health.title') }}</span>
    </div>
    <div class="content__body">
      <div class="content__item">
        <div
          @click="openWeightModal()"
          class="content__itemContent"
          :class="{ '--activeModal': weightModal.isOpen }"
        >
          <div class="content__itemHeader">
            <font-awesome-icon
              class="content__itemHeaderIcon"
              :class="{ '--activeContent': weightModal.isOpen }"
              icon="fa-solid fa-weight-scale"
            />
            <span
              class="content__itemTitle"
              :class="{ '--activeContent': weightModal.isOpen }"
            >
            {{ $t('health.weight.title') }}
            </span>
          </div>
          <div class="content__itemBody">
            <div
              class="content__itemDescription"
              :class="{ '--activeContent': weightModal.isOpen }"
            >
            {{ $t('health.weight.text') }}
            </div>
            <div class="content__itemValue">{{ health.weight }} kg</div>
          </div>
        </div>
        <div v-if="weightModal.isOpen" class="content__itemUpdateModal">
          <input
            class="content__itemUpdateModalInput"
            type="number"
            v-model="health.weight"
          />
          <button
            @click="updateHealth(getNotifyMessages().weightSuccess)"
            class="content__itemUpdateModalButton"
          >
            Güncelle
          </button>
          <button
            @click="closeWeightModal()"
            class="content__itemUpdateModalButton"
          >
            Vazgeç
          </button>
        </div>
      </div>
      <div class="content__item">
        <div
          @click="openHeightModal()"
          class="content__itemContent"
          :class="{ '--activeModal': heightModal.isOpen }"
        >
          <div class="content__itemHeader">
            <font-awesome-icon
              class="content__itemHeaderIcon"
              :class="{ '--activeContent': heightModal.isOpen }"
              icon="fa-solid fa-ruler-vertical"
            />
            <span
              class="content__itemTitle"
              :class="{ '--activeContent': heightModal.isOpen }"
            >
            {{ $t('health.height.title') }}
            </span>
          </div>
          <div class="content__itemBody">
            <div
              class="content__itemDescription"
              :class="{ '--activeContent': heightModal.isOpen }"
            >
            {{ $t('health.height.text') }}
            </div>
            <div class="content__itemValue">{{ health.height }} cm</div>
          </div>
        </div>
        <div v-if="heightModal.isOpen" class="content__itemUpdateModal">
          <input
            class="content__itemUpdateModalInput"
            type="number"
            v-model="health.height"
          />
          <button
            @click="updateHealth(getNotifyMessages().heightSuccess)"
            class="content__itemUpdateModalButton"
          >
            Güncelle
          </button>
          <button
            @click="closeHeightModal()"
            class="content__itemUpdateModalButton"
          >
            Vazgeç
          </button>
        </div>
      </div>
      <div class="content__item">
        <div
          @click="openBodyFatModal()"
          class="content__itemContent"
          :class="{ '--activeModal': bodyFatModal.isOpen }"
        >
          <div class="content__itemHeader">
            <font-awesome-icon
              class="content__itemHeaderIcon"
              :class="{ '--activeContent': bodyFatModal.isOpen }"
              icon="fa-solid fa-solid fa-percent"
            />
            <span
              class="content__itemTitle"
              :class="{ '--activeContent': bodyFatModal.isOpen }"
            >
            {{ $t('health.fat.title') }}
            </span>
          </div>
          <div class="content__itemBody">
            <div
              class="content__itemDescription"
              :class="{ '--activeContent': bodyFatModal.isOpen }"
            >
            {{ $t('health.fat.text') }}
            </div>
            <div class="content__itemValue">{{ health.bodyFat }} %</div>
          </div>
        </div>
        <div v-if="bodyFatModal.isOpen" class="content__itemUpdateModal">
          <input
            class="content__itemUpdateModalInput"
            type="number"
            v-model="health.bodyFat"
          />
          <button
            @click="updateHealth(getNotifyMessages().fatSuccess)"
            class="content__itemUpdateModalButton"
          >
            Güncelle
          </button>
          <button
            @click="closeBodyFatModal()"
            class="content__itemUpdateModalButton"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
    <div class="content__footer">
      <div
        class="content__itemContent --bodyMass"
        :class="{
          '--underWeight': underWeight.stat,
          '--normal': normal.stat,
          '--overWeight': overWeight.stat,
          '--obese': obese.stat,
          '--extremlyObese': extremlyObese.stat,
        }"
      >
        <div class="content__itemHeader">
          <font-awesome-icon
            class="content__itemHeaderIcon"
            icon="fa-solid fa-circle-plus"
          />
          <span class="content__itemTitle"> {{ $t('health.bmi.title') }} </span>
        </div>
        <div class="content__itemBody">
          <div class="content__itemDescription">
            {{ $t('health.bmi.text') }}
          </div>
          <div v-if="underWeight.stat" class="content__message">
            {{ underWeight.message }}
          </div>
          <div v-if="normal.stat" class="content__message">
            {{ normal.message }}
          </div>
          <div v-if="overWeight.stat" class="content__message">
            {{ overWeight.message }}
          </div>
          <div v-if="obese.stat" class="content__message">
            {{ obese.message }}
          </div>
          <div v-if="extremlyObese.stat" class="content__message">
            {{ extremlyObese.message }}
          </div>
          <div class="content__itemValue">
            {{ parseFloat(bodyMass).toFixed(1) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Content",
  data() {
    return {
      weightModal: {
        isOpen: false,
      },
      heightModal: {
        isOpen: false,
      },
      bodyFatModal: {
        isOpen: false,
      },
    };
  },
  created() {
    this.$store.dispatch("health/getHealth");
  },
  methods: {
    openWeightModal() {
      this.weightModal.isOpen = true;
      this.heightModal.isOpen = false;
      this.bodyFatModal.isOpen = false;
    },
    closeWeightModal() {
      this.weightModal.isOpen = false;
      this.$store.dispatch("health/getHealth");
    },
    openHeightModal() {
      this.heightModal.isOpen = true;
      this.weightModal.isOpen = false;
      this.bodyFatModal.isOpen = false;
    },
    closeHeightModal() {
      this.heightModal.isOpen = false;
      this.$store.dispatch("health/getHealth");
    },
    openBodyFatModal() {
      this.bodyFatModal.isOpen = true;
      this.weightModal.isOpen = false;
      this.heightModal.isOpen = false;
    },
    closeBodyFatModal() {
      this.bodyFatModal.isOpen = false;
      this.$store.dispatch("health/getHealth");
    },
    async updateHealth(message) {
      await this.$store.dispatch("health/updateHealth");
      await this.$store.dispatch("global/openNotify", message);
      this.closeWeightModal();
      this.closeHeightModal();
      this.closeBodyFatModal();
    },
    getNotifyMessages() {
      const notifyMessages = {
        weightSuccess : this.$t('notifyMessages.weightSuccess'),
        heightSuccess : this.$t('notifyMessages.heightSuccess'),
        fatSuccess : this.$t('notifyMessages.fatSuccess')
      }
      return notifyMessages
    }
  },
  computed: {
    health() {
      return this.$store.getters["health/getHealthData"];
    },
    bodyMass() {
      return this.$store.getters["health/getBodyMassRate"];
    },
    underWeight() {
      return {
        stat: this.bodyMass < 18.5,
        message: this.$t('health.bmi.stats.under'),
      };
    },
    normal() {
      return {
        stat: this.bodyMass > 18.5 && this.bodyMass < 24.9,
        message: this.$t('health.bmi.stats.normal'),
      };
    },
    overWeight() {
      return {
        stat: this.bodyMass > 25 && this.bodyMass < 29.9,
        message: this.$t('health.bmi.stats.over'),
      };
    },
    obese() {
      return {
        stat: this.bodyMass > 30 && this.bodyMass < 34.9,
        message: this.$t('health.bmi.stats.obese')
      };
    },
    extremlyObese() {
      return {
        stat: this.bodyMass > 35,
        message: this.$t('health.bmi.stats.extremlyObese'),
      };
    },
  },
};
</script>
    
<style lang="scss" scoped>
.content {
  padding: 100px 200px;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__titleIcon {
    color: #cf11da;
    position: relative;
    &::before {
      content: "";
      left: 70px;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      height: 3px;
      width: 50px;
      background: #7b6cd5;
    }
    &::after {
      content: "";
      right: 70px;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      height: 3px;
      width: 50px;
      background: #7b6cd5;
    }
  }
  &__titleText {
    font-size: 28px;
    letter-spacing: 0.4px;
    line-height: 1.3;
    color: #323232;
    font-weight: 700;
  }
  &__titleIcon {
    width: 50px;
    height: 50px;
  }
  &__body {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }
  &__item {
    width: 25%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__itemContent {
    border: 1px solid #cf11da;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    &:hover .content__itemHeaderIcon {
      color: white;
    }
    &:hover .content__itemTitle {
      color: white;
    }
    &:hover .content__itemDescription {
      color: white;
    }
  }
  &__itemHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__itemHeaderIcon {
    color: #cf11da;
    width: 30px;
    height: 30px;
  }
  &__itemTitle {
    color: #323232;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 500;
    margin: 15px 0;
    letter-spacing: 0.2px;
  }
  &__itemBody {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__itemDescription {
    text-align: center;
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
    color: #888;
  }
  &__message {
    text-align: center;
    font-size: 18px;
    line-height: 1.7;
    margin-top: 10px;
    color: #201f1f;
  }
  &__itemValue {
    margin-top: 20px;
    text-align: center;
    font-size: 30px;
  }
  &__itemUpdateModal {
    background: #f3f3f3;
    top: 270px;
    height: 80px;
    position: absolute;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  &__itemUpdateModalInput {
    height: fit-content;
    padding: 0;
    width: 80px;
    font-size: 40px;
    border-radius: 10px;
    margin-right: 15px;
  }
  &__itemUpdateModalButton {
    height: fit-content;
    cursor: pointer;
    margin-left: 5px;
    color: white;
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    padding: 10px 10px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    &:hover {
      background: #3482fd;
    }
  }
  &__footer {
    margin-top: 120px;
    display: flex;
    justify-content: center;
  }

  .--activeModal {
    background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .--activeContent {
    color: white;
  }

  .--bodyMass {
    width: 50%;
  }

  .--underWeight {
    border: 5px solid blue;
  }
  .--normal {
    border: 5px solid rgb(19, 210, 19);
  }
  .--overWeight {
    border: 5px solid yellow;
  }
  .--obese {
    border: 5px solid orange;
  }
  .--extremlyObese {
    border: 5px solid red;
  }
}
</style>