<template>
  <div>
    <div class="container mb-4">
      <div class="row">
        <div class="main__body">
          <div class="card-container">
            <div
              v-for="(item, index) in store.recipes"
              :key="index"
              class="card"
              @click="$router.push({ name: 'detail', params: {
                id: item.id
              }})"
            >
              <p class="card-text">
                {{ item.title }}
              </p>
              <img
                class="card-img"
                :src="item.photo"
                :alt="item.title"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button__position text-center py-2">
      <button
        type="button"
        class="add__btn btn btn-outline-secondary"
      >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import recipesStore from '@/store/recipes'
import debounce from 'lodash.debounce'
import { watch } from 'vue'


const store = recipesStore()

function refresh(): void {
  try {
    store.FETCH_RECIPES(store.params)
  } catch (error) {
    throw error
  }
}

  
watch(store.params, debounce(() => {
  refresh()
}, 500))

refresh()
</script>

<style lang="scss">
@import '@/assets/scss/home.scss';
</style>