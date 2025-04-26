<template>
  <li :class="{complete:todo.completed,editing:todo===editedTodo}">
    <div class="view">
      <input
        type="checkbox"
        v-model="todo.completed"
      >
      <label
        for=""
        @dblclick="editTodo(todo)"
      >{{todo.title}}</label>
      <button @click="deleteTodo(todo.id)">X</button>
    </div>
    <!-- 编辑待办 -->
    <EditTodo
      class="edit"
      v-model="todo.title"
      autofocus
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit(todo)"
      v-todo-focus="todo===editedTodo"
    />
  </li>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    editedTodo: Object,
  },
  emits: ["deletTodo", "update:editedTodo"],
  setup(props, { emit }) {
    const state = reactive({
      beforeEditCache: "", // 缓存编辑前的titile
    });
    const deleteTodo = (id) => {
      emit("deletTodo", id);
    };
    const editTodo = (todo) => {
      state.beforeEditCache = todo.title;
      emit("update:editedTodo", todo);
    };
    const cancelEdit = (todo) => {
      todo.title = state.beforeEditCache;
      emit("update:editedTodo", null);
    };
    const doneEdit = () => {
      emit("update:editedTodo", null);
    };
    return {
      ...toRefs(state),
      deleteTodo,
      editTodo,
      cancelEdit,
      doneEdit,
    };
  },
  directives: {
    "todo-focus": (el, { value }) => {
      if (value) el.focus();
    },
  },
};
</script>
<style scoped>
.complete {
  text-decoration: line-through;
}
.edit,
.editing .view {
  display: none;
}
.view,
.editing .edit {
  display: block;
}
</style>

