<script>
export default {
  props: {
    foods: Array,
    weekday: String,
  },
  data() {
    return {
      foodPictures: [
        { path: "../public/Spaghetti.jpg", category: "Meat" },
        { path: "../public/Fish.jpg", category: "Fish" },
        { path: "../public/veggie.jpg", category: "Veggie" },
      ],
    };
  },
};
</script>
<template>
  <div id="app" class="row">
    <div
      v-for="(foodImage, index) in foodPictures"
      class="responsive"
      :key="index"
    >
      <img
        v-if="this.foods.includes(foodImage.category)"
        :src="foodImage.path"
        alt="bild"
      />
    </div>
  </div>
</template>

<style></style>
