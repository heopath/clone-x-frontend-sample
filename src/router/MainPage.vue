<template>
  <div>
    <div class="title-container">
      <h2>Home</h2>
      <div>User님</div>
    </div>
    <TweetBar />
    <FeedList :feeds="feeds" />
  </div>
</template>

<script>
import TweetBar from '@/components/TweetBar.vue';
import FeedList from '@/components/FeedList.vue';
export default {
    name: "MainPage",
    components: { TweetBar, FeedList },
    data() {
        return {
            feeds: [
                { id: 1, content: "첫 번째 피드입니다.", name: "김유저" },
                { id: 2, content: "두 번째 피드입니다.", name: "김유저" },
                { id: 3, content: "세 번째 피드입니다.", name: "김유저" },
                { id: 4, content: "네 번째 피드입니다.", name: "김유저" },
                { id: 5, content: "다섯 번째 피드입니다.", name: "김유저" },
                { id: 6, content: "여섯 번째 피드입니다.", name: "김유저" },
                { id: 7, content: "일곱 번째 피드입니다.", name: "김유저" },
                { id: 8, content: "여덟 번째 피드입니다.", name: "김유저" },
                { id: 9, content: "아홉 번째 피드입니다.", name: "김유저" },
            ],
        };
    },
};
</script>

<style scoped>
.title-container {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}   
</style>