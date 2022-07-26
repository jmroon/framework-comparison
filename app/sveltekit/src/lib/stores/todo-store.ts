import { derived, writable } from 'svelte/store';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const writableTodos = writable<Todo[]>([]);

export const todos = derived(writableTodos, ($todos) => $todos);

export const addTodo = (title: string) => {
  const todo: Todo = {
    id: Date.now(),
    title,
    completed: false
  };
  writableTodos.update(($todos) => [...$todos, todo]);
};

export const completeTodo = (id: number) => {
  writableTodos.update(($todos) => {
    const todo = $todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return $todos;
  });
};
