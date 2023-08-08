<template>
  <div class="addTraining">
    <div class="addTraining__overlay">
      <div class="addTraining__wrapper">
        <div class="addTraining__header">
          <h3>Antrenman Ekle</h3>
        </div>
        <div class="addTraining__body">
          <div class="addTraining__line">
            <span class="addTraining__label">Antrenman Türü:</span>
            <select name="" id="">
              <option value="">Koşu</option>
            </select>
          </div>
          <div class="addTraining__line">
            <span class="addTraining__label">Konum:</span>
            <select name="" id="">
              <option value="">Açık Hava</option>
            </select>
          </div>
          <div class="addTraining__line">
            <span class="addTraining__label">Tarih:</span>
            <input type="date" />
          </div>
          <div class="addTraining__line">
            <span class="addTraining__label">Saat:</span>
            <input type="time" />
          </div>
          <div class="addTraining__line">
            <span class="addTraining__label">Yakılan Kalori:</span>
            <input type="number" />
          </div>
          <div class="addTraining__line">
            <span class="addTraining__label">Süre:</span>
            <input type="number" />
          </div>
        </div>
        <div class="addTraining__footer">
          <button>Kaydet</button>
          <button @click="closeModal">Vazgeç</button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "AddTrainings",
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>
<style lang="scss" scoped>
.addTraining {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;

  &__overlay {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.427);
    display: flex;
    justify-content: center;
    position: relative;
  }

  &__wrapper {
    background-color: white;
    position: absolute;
    top: 10%;
    padding: 30px;
    border-radius: 10px;
    width: 60%;
  }

  &__body {
    margin-top: 40px;
  }

  &__line {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    input,
    select {
      width: 200px;
      border-radius: 5px;
      outline: none;
      border: 2px solid #a62ee3;
      padding: 5px;
    }
  }

  &__label {
    font-size: 15px;
    line-height: 1.7;
    color: #888;
  }

  &__footer {
    margin-top: 40px;
    display: flex;
    justify-content: center;

    button {
      background: linear-gradient(-45deg, #cf11da 0%, #3482fd 100%);
      border: none;
      color: white;
      width: 30%;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1.1px;
      text-align: center;
      padding: 15px 20px;
      outline: none;
      cursor: pointer;
      transition: 0.5s;

      &:last-child {
        margin-left: 20px;
      }

      &:hover {
        opacity: 70%;
      }
    }
  }
}
</style>
