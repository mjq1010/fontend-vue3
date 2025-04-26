import { reactive, computed } from 'vue';
const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((item) => !item.completed);
  },
  completed(todos) {
    return todos.filter((item) => item.completed);
  }
};
export default function useFilter(todoList) {
  const filterState = reactive({
    visibility: 'all',
    filterdTodos: computed(() => filters[filterState.visibility](todoList.value)),
    filterItems: [
      {
        label: 'All',
        value: 'all'
      },
      {
        label: 'Active',
        value: 'active'
      },
      {
        label: 'Completed',
        value: 'completed'
      }
    ]
  });
  return filterState;
}
