<script>
let id = 0

export default {
  data() {
    return {
      newMealPlan: '',
      meals: []
    }
  },
  methods: {
    addMeals() {
      this.meals.push({ id: id++, text: this.newMealPlan })
      this.newMealPlan = ''
    },
    removeMeals(meals) {
      this.meals = this.meals.filter((t) => t !== meals)
    }
  }
}
</script>

<template>
  <dl>
    <dt>Söndag</dt>
    <dd v-for="meals in meals" :key="meals.id">
      {{ meals.text }}
      <button @click="removeMeals(meals)">Ta bort</button>
    </dd>
  </dl>
  <form @submit.prevent="addMeals">
    <input v-model="newMealPlan">
    <button>Lägg till maträtt</button>
  </form>
</template>