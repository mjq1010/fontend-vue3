import { ref, watchEffect } from 'vue';

// 缓存操作
const todoStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem('vue3-todos')) || [];
  },
  save(todos) {
    localStorage.setItem('vue3-todos', JSON.stringify(todos));
  }
};

export default function useTodos(state) {
  // 初始化数据
  const todoList = ref(todoStorage.fetch());
  const addTodo = () => {
    if (state.newTodo) {
      todoList.value.push({
        id: todoList.value.length + 1,
        title: state.newTodo,
        completed: false
      });
      state.newTodo = '';
    }
  };
  const deleteTodo = (id) => {
    todoList.value = todoList.value.filter((item) => item.id !== id);
  };
  // 用谁就watch谁,一开始就执行
  watchEffect(() => {
    todoStorage.save(todoList.value);
  });
  return {
    todoList,
    addTodo,
    deleteTodo
  };
}
