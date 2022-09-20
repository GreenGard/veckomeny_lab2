<script>
export default {
  data() {
    return {
      styleObj: {
        fontSize: "",
      },
      thesize: [{ title: "Bigger" }, { title: "Smaller" }],
    };
  },
  methods: {
    changeFont(thesize) {
      let fontSize = null;
      if (thesize === "Bigger") {
        fontSize = "50px";
      } else if (thesize === "Smaller") {
        fontSize = "24px";
      } else {
        fontSize = "15px";
      }
      this.styleObj.fontSize = fontSize;
    },
  },
};
</script>
<template>
  <div id="changesize">
    <h4 :style="styleObj">Veckomatsplanering</h4>
    <br />
    <button
      id="changesizebutton"
      v-for="button in thesize"
      @click="changeFont(button.title)"
      :key="button.title"
    >
      {{ button.title }}
    </button>
  </div>
</template>

<style></style>
