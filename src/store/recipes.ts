import $axios from "@/libs/axios"
import { defineStore } from 'pinia'
import { Items, Params } from '@/types/recipes'


export default defineStore('recipes', {
  state: () => ({
    recipes: [] as Items[],
    params: {
      title: '',
      page: 1,
      limit: 15,
    } as Params,
    oneRecipe: {} as Items,
  }),
  actions: {
    async FETCH_RECIPES(params: Params) {
      const { data } = await $axios.get('recipe/', { params })

      this.recipes = data
    },
    async FETCH_ONE_RECIPE(id: string | string[]) {
      const { data } = await $axios.get(`recipe/${id}`)

      this.oneRecipe = data
    },
  },
})