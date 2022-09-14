<script>
export default {
  /*data() {
    return {
      checkedFoods: [],
      }
    },*/
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child')
  }
}
</script>

<template>
  <h3>LunchMeny</h3>
  <label for="meat">Kött</label>
  <input type="checkbox"
         value="Meat"
         v-model="checkedFoods"/>

  <label for="fish">Fisk</label>
  <input type="checkbox"
         value="Fish"
         v-model="checkedFoods"/>

  <label for="veg">Vegetariskt</label>
  <input type="checkbox"
         value="Veggie"
         v-model="checkedFoods"/>
</template>
