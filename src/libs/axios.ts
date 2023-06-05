import axios from "axios"

const $axios = axios.create({
  baseURL: 'http://mirmux.uz:1111/',
  timeout: 20000,
})

export default $axios
