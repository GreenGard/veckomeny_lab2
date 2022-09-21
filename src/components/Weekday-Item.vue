<script>
export default {
  props: {
    foods: Array,
    weekday: String,
  },
  data() {
    return {
      meals: [{ foodName: "", category: "" }],
      newMealPlan: "",
      category: "Meat",
    };
  },
  methods: {
    addMeals() {
      if (this.newMealPlan !== "") {
        this.meals.push({
          foodName: this.newMealPlan,
          category: this.category,
        });
        this.newMealPlan = "";
      } else {
        alert("Ange ett namn för din maträtt");
      }
    },
    removeMeals(foodName) {
      this.meals = this.meals.filter((f) => f.foodName !== foodName);
    },
  },
};
</script>
<template>
  <div class="weekdayCard">
    <h1 class="weekdayTitle">{{ weekday }}</h1>

    <div class="weekdayListContainer">
      <ul class="weekdayList" v-for="(addedFood, index) in meals" :key="index">
        <li v-if="foods.includes(addedFood.category)" class="foodName">
          {{ addedFood.foodName }} {{ addedFood.category }}
        </li>
        <div>
        <button
          v-if="foods.includes(addedFood.category)"
          class="removeButton"
          @click="removeMeals(addedFood.foodName)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
               viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
        </div>
      </ul>
    </div>
    <div class="weekdayinput">
      <div class="weekdaytextinput">
        <input v-model="newMealPlan" />
        <button @click="addMeals()">Lägg till lista</button>
      </div>

      <div class="weekdayradioinput">
        <div class="checkbox">
          <input type="radio" value="Meat" v-model="category" />
          <label>Kött</label>
        </div>
        <div class="checkbox">
          <input type="radio" value="Fish" v-model="category" />
          <label>Fisk</label>
        </div>
        <div class="checkbox">
          <input type="radio" value="Veggie" v-model="category" />
          <label>Vegetarisk</label>
        </div>
      </div>
    </div>
  </div>
</template>
