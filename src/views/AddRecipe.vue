<template>
  <div>
    <div class="container">
      <form @submit.prevent="saveData">
        <div class="row my-5">
          <div class="col-12 d-flex justify-content-center">
            <div
              v-if="!image"
              style="height: 500px; width: 600px; border: 1px dashed;"
              class="d-flex align-items-center justify-content-center"
            >
              Нет фото
            </div>
            <img
              v-else
              style="max-width: 840px;"
              :src="image"
              alt=""
            >
          </div>
          <div class="col-6">
            <div class="form-group my-2">
              <label for="name">
                Название рецепта:
              </label>
              <input
                id="name"
                v-model="formData.title"
                required
                type="text"
                class="form-control"
                placeholder="Название"
              >
            </div>
          </div>
          <div class="col-6">
            <div class="form-group my-2">
              <label for="photo">
                Фото:
              </label>
              <input
                id="photo"
                required
                type="file"
                class="form-control"
                accept="image/*"
                placeholder="Название"
                @input="handleFileChange"
              >
            </div>
          </div>
          <div class="col-12">
            <div class="form-group my-2">
              <label for="description">
                Описание:
              </label>
              <textarea
                id=""
                v-model="formData.description"
                name=""
                required
                cols="30"
                rows="10"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-12 text-end">
            <button
              class="btn btn-success"
              type="submit"
            >
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Form } from '@/types/recipes'
import recipesStore from '@/store/recipes'
import { useRouter } from 'vue-router'


const store = recipesStore()
const router = useRouter()
let formData = reactive<Form>({
  title: '',
  photo: '',
  description: '',
})

let image = ref()

const handleFileChange = (event): void => {
  const file = event.target.files[0]

  formData.photo = event.target.files[0]

  const reader = new FileReader()

  reader.onload = () => {
    const base64String = reader.result

    image.value = base64String
  }

  reader.readAsDataURL(file)
}

const saveData = async (): Promise<void> => {
  try {

    const fd = new FormData()

    fd.append('title', formData.title)
    fd.append('photo', formData.photo)
    fd.append('description', formData.description)
    await store.CREATE_RECIPE(fd)
    router.push({ name: 'home' })
  } catch (error) {
    throw error
  }
}
</script>


