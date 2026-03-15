import { authAPi } from "@/api";
import { defineStore } from "pinia";

export const useFeedStore = defineStore("feedStore", {
  state: () => ({
    feedData: [],
  }),
  actions: {
    async getFeedData() {
      try {
        const response = await authAPi.get('feeds/')
        this.feedData = response.data
      }catch(error) {
        console.error("Error fetching feed Data:", error)
      }
    },
    async removeFeed(id) {
      try {
        await authAPi.delete(`feeds/${id}`)
        await this.getFeedData()
      } catch (error) {
        console.error("Error removing error:", error)
      }
    },
    async addFeed(content) {
      try {
        await authAPi.post('feeds/', { content })
        await this.getFeedData()
      } catch (error) {
        console.error("Error adding feed:", error)
      }
    }
  }
})