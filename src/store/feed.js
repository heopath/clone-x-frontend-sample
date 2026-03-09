import { defineStore } from "pinia";

const testData = [
 {
    id: 12,
    content: "봄 같은 날씨 너무 좋아요",
    created_at: "2025-01-11T07:41:56.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 11,
    content: "코딩은 재밌어!",
    created_at: "2025-01-10T09:30:00.000Z",
    user: {
      id: 12,
      name: "테스터",
    },
  },
  {
    id: 10,
    content: "JS 디버깅 중…",
    created_at: "2025-01-09T10:10:00.000Z",
    user: {
      id: 12,
      name: "테스터",
    },
  },
  {
    id: 9,
    content: "커피 한 잔의 여유...",
    created_at: "2025-01-08T08:20:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 6,
    content: "주말에 드라마 몰아보기",
    created_at: "2025-01-07T14:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 5,
    content: "우리 집 강아지 너무 귀여워",
    created_at: "2025-01-06T13:00:00.000Z",
    user: {
      id: 13,
      name: "다미장",
    },
  },
  {
    id: 4,
    content: "2025년에는 꼭 운동한다!",
    created_at: "2025-01-05T07:00:00.000Z",
    user: {
      id: 11,
      name: "user",
    },
  },
  {
    id: 3,
    content: "디버깅만 몇 시간째.",
    created_at: "2025-01-04T11:00:00.000Z",
    user: {
      id: 11,
      name: "user",
    },
  },
  {
    id: 2,
    content: "아침 커피로 하루 시작",
    created_at: "2025-01-03T09:00:00.000Z",
    user: {
      id: 11,
      name: "user",
    },
  },
  {
    id: 1,
    content: "오늘도 멋진 하루 되세요!",
    created_at: "2025-01-02T08:00:00.000Z",
    user: {
      id: 11,
      name: "user",
    },
  },
];

export const useFeedStore = defineStore("feedStore", {
  state: () => ({
    feedData: [],
  }),
  actions: {
    getFeedData() {
      this.feedData = testData;
    },
  },
});