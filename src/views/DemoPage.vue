<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span>{{ item.id }} - </span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    name: "DemoPage",
    data() {
        return {
          items:[
            {id:1, name: "apple"},
            {id:2, name: "banana"},
            {id:3, name: "orange"},
            {id:4, name: "data"},
            {id:5, name: "elderberry"},
          ],
        };
    },
};

</script>