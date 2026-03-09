<template>
  <div>
    <button @click="fruitStore.removeFirstItem">Remove First Item</button>
    <button @click="fruitStore.removeLastItem">Remove Last Item</button>
    <ul>
      <ItemComponent v-for="item in fruitStore.fruitlist" :key="item.id" :item="item"/>
    </ul>
    <div>getFruitlength: {{ fruitStore.getFruitlistLength }} </div>
    <div>getFruitByNameWithA: {{ fruitStore.getFruitByNameWithA }} </div>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";
import { useFruitStore } from "@/store/fruit";
export default {
    name: "DemoPage",
    components: { ItemComponent },
    data() {
        return {
          fruitStore: useFruitStore(),
        };
    },
};

</script>