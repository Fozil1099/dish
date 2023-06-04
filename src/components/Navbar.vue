<template>
  <div class="border-bottom bg-light">
    <div class="container">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
          <a
            class="navbar-brand"
            href="#"
            @click="$router.push('/')"
          >
            <h2>
              DISH
            </h2>
          </a>
          <form
            v-if="$route.meta.isMain"
            class="form-inline mx-4"
          >
            <div class="input-group">
              <input
                v-model="store.params.title"
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
              <a
                class="nav-link mx-2"
                href="#"
              >
                <FontAwesomeIcon icon="fa-solid fa-house" />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-2"
                href="#"
                @click="$router.push('/')"
              ><FontAwesomeIcon icon="fa-solid fa-user" /></a>
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