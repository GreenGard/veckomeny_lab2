<script>
export default {
  data() {
    return {
      checkedFoods: ["Meat", "Fish", "Veggie"],
    };
  },
  emits: ["checkedFoods"],
  created() {
    this.$emit("checkedFoods", this.checkedFoods);
  },
  updated() {
    this.$emit("checkedFoods", this.checkedFoods);
  },
};
</script>

<template>
  <h1 class="foodcheckerheader">Välj önskad meny:</h1>
  <div class="foodcheckercontainer">
    <div class="checkboxes">
      <label>Kött</label>
      <input type="checkbox" value="Meat" v-model="checkedFoods" />
    </div>
    <div class="checkboxes">
      <label>Fisk</label>
      <input type="checkbox" value="Fish" v-model="checkedFoods" />
    </div>

    <div class="checkboxes">
      <label>Vegetariskt</label>
      <input type="checkbox" value="Veggie" v-model="checkedFoods" />
    </div>
  </div>
</template>
