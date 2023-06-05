import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
import { faMagnifyingGlass, faHouse, faUser, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// add icons to the library
library.add(faMagnifyingGlass, faHouse, faUser, faPlus, faChevronDown)

// create store
const pinia = createPinia()

createApp(App).use(router).use(pinia)
  .component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
