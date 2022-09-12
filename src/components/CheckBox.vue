<script >
export default {
  data() {
    return {
      checkedNames: []
    }
  }
}

</script>
<template>
  <ToChoose>
    <div>Välj : {{ checkedNames }}</div>

    <input type="checkbox"
           id="meat"
           value="Meat"
           v-model="checkedNames">
    <label for="meat">Kött</label>

    <input type="checkbox" id="fish" value="Fish" v-model="checkedNames">
    <label for="fish">Fisk</label>

    <input type="checkbox" id="veg" value="Veg" v-model="checkedNames">
    <label for="veg">Vegetariskt</label>
  </ToChoose>
</template>