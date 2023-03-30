<template>
  <section class="main__top">
    <div class="form-check radios" v-for="radio in radios">
      <input
        @click="() => typeRadio(radio.id)"
        class="form-check-input"
        type="checkbox"
        :id="radio.id"
        :checked="radio.check"
      />
      <label class="form-check-label text" for="flexCheckDisabled">{{
        radio.name
      }}</label>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radios: [
        { id: "picsum", name: "Picsum", check: "checked" },
        { id: "rick", name: "Rick" },
        { id: "pokemon", name: "Pokemon" },
      ],
    };
  },
  methods: {
    typeRadio(name) {

      const checks = document.querySelectorAll(".form-check-input");
      checks.forEach(function (ch) {
        ch.addEventListener("click", function () {
          let that = this;
          checks.forEach(function (ch2) {
            if (ch2 != that)
							ch2.checked = false;
          });
        });
      });

      this.$emit("giveRadio", name);
    },
  },
};
</script>

<style>
.main__top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 10px;
}

.radios {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
  height: 70%;
  border: 2px solid white;
  border-radius: 10px;
}

.text {
  color: white;
}
</style>
