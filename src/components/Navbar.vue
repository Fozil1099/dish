<template>
  <div class="border-bottom bg-light">
    <div class="container">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
          <div
            class="navbar-brand"
            style="cursor: pointer;"
            @click="$router.push('/')"
          >
            <h2>
              DISH
            </h2>
          </div>
          <form
            v-if="$route.meta.isMain"
            class="form-inline mx-4"
          >
            <div class="input-group">
              <input
                v-model="store.params.search"
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              >
              <div class="input-group-prepend">
                <span
                  id="basic-addon1"
                  class="input-group-text h-100"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                  />
                </span>
              </div>
            </div>
          </form>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <div
                class="nav-link mx-2"
                style="cursor: pointer;"
                @click="$router.push({ name: 'add' })"
              >
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </div>
            </li>
            <li class="nav-item active">
              <div
                class="nav-link mx-2"
                style="cursor: pointer;"
                @click="$router.push('/')"
              >
                <FontAwesomeIcon icon="fa-solid fa-house" />
              </div>
            </li>
            <li class="nav-item">
              <div
                class="nav-link mx-2"
                style="cursor: pointer;"
              >
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import recipesStore from '@/store/recipes'


const store = recipesStore()
</script>
