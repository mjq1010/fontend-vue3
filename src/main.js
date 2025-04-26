import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './mock/index.js';
import EditTodo from './components/todos/EditTodo.vue';
// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.component('EditTodo', EditTodo);
app.mount('#app');
