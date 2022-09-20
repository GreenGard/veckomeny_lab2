<script>
import PlanYourMeal from "./PlanYourMeal.vue";
import Weekday from "./Weekday-Item.vue";
import ChangeImage from "./ChangeImage.vue";
import ChangeSize from "./ChangeFontSize.vue";

export default {
  components: {
    ChangeSize,
    ChangeImage,
    PlanYourMeal,
    Weekday,
  },
  data() {
    return {
      foods: [],
    };
  },
};
</script>

<template>
  <div>
    <ChangeSize />
  </div>
  <div class="contentTop">
    <PlanYourMeal
      class="foodChecker"
      @checkedFoods="(checkedFoods) => (foods = checkedFoods)"
    />
  </div>
  <div>
    <ChangeImage :foods="foods" />
  </div>
  <div class="content">
    <Weekday :foods="foods" :weekday="'Måndag'" />
    <Weekday :foods="foods" :weekday="'Tisdag'" />
    <Weekday :foods="foods" :weekday="'Onsdag'" />
    <Weekday :foods="foods" :weekday="'Torsdag'" />
    <Weekday :foods="foods" :weekday="'Fredag'" />
    <Weekday :foods="foods" :weekday="'Lördag'" />
    <Weekday :foods="foods" :weekday="'Söndag'" />
  </div>


</template>
