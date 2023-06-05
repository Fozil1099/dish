<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-6">
        <img
          :src="store.oneRecipe.photo"
          alt=""
          class="w-100"
        >
      </div>
      <div class="col-6 px-5">
        <h1 class="text-center">
          {{ store.oneRecipe.title }}
        </h1>
        <div class="resipes">
          <h3 class="mt-3">
            Рецепты:
          </h3>
          <span>{{ store.oneRecipe.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import recipesStore from '@/store/recipes'
import { useRoute } from 'vue-router'

const route = useRoute()

const store = recipesStore()

try {
  store.FETCH_ONE_RECIPE(route.params.id)
} catch (error) {
  throw error
}
</script>
