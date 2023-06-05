import $axios from "@/libs/axios"
import { defineStore } from 'pinia'
import { Items, Params, Recipes } from '@/types/recipes'


export default defineStore('recipes', {
  state: () => ({
    recipes: {} as Recipes,
    params: {
      search: '',
      page: 1,
      page_size: 15,
    } as Params,
    oneRecipe: {} as Items,
  }),
  actions: {
    async FETCH_RECIPES(params: Params) {
      const { data } = await $axios.get('recipe/', { params })

      if (params.page > 1) {
        this.recipes.results.push(data)
      } else {
        this.recipes = data
      }
    },
    async FETCH_ONE_RECIPE(id: string | string[]) {
      const { data } = await $axios.get(`recipe/${id}`)

      this.oneRecipe = data
    },
    async CREATE_RECIPE(data: FormData) {
      await $axios.post(`recipe/`, data)
    },
  },
})
