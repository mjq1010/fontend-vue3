<template>
  <div>
    <EditTodo
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    />
    <!-- todo列表 -->
    <ul>
      <TodoItem
        v-for="item in filterdTodos"
        :key="item.id"
        :todo="item"
        @deletTodo="deleteTodo"
        v-model:editedTodo="editedTodo"
      >
        {{ item }}
      </TodoItem>
    </ul>
    <!-- 过滤 -->
    <Filter
      :items="filterItems"
      v-model="visibility"
    ></Filter>
  </div>
</template>
<script>
import { onUpdated, reactive, toRefs } from "vue";
import TodoItem from "../../components/todos/TodoItem.vue";
import Filter from "../../components/todos/Filter.vue";
import useTodos from "../../components/todos/useTodos";
import useFilter from "../../components/todos/useFilter";
export default {
  components: {
    TodoItem,
    Filter,
  },
  setup() {
    const todoState = reactive({
      newTodo: "",
      editedTodo: null, //正在编辑的todo
    });
    // 使用Hooks编程思想
    const { todoList, addTodo, deleteTodo } = useTodos(todoState);
    const filterState = useFilter(todoList);
    onUpdated(() => {
      // console.log(filterState.visibility);
    });
    return {
      ...toRefs(todoState),
      ...toRefs(filterState),
      addTodo,
      deleteTodo,
    };
  },
};
</script>
