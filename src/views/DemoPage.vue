<template>
  <div>
    <p>index : {{ index }}</p>
    <p>계산된 값: {{ computedValue }}</p>
    <button @click="incrementCount">증가</button>
    <button @click="incrementIndex">인덱스 증가</button>
  </div>
</template>

<script>

export default {
    name: "DemoPage",
    data() {
        return {
          index: 0,
          count: 0,
        };
    },
    computed: {
        computedValue() {
            return this.count * 2;
        },
    },
    watch: {
        count(newValue, oldValue) {
            console.log("Count가 변경되었습니다:", `${oldValue} -> ${newValue}`);
        },
    },
    methods: {
        incrementCount() {
            this.count++;
        },
        incrementIndex() {
            this.index++;
        },
    },
};

</script>