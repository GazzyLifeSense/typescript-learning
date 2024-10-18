type MyReadonly<T> = { readonly[P in keyof T]: T[P] }

interface Todo {
  title: string
  description: any
}

const todo: MyReadonly<Todo> = {
  title: "Eat",
  description: "Eat some food"
}

const deepTodo: MyReadonly<Todo> = {
  title: "Eat",
  description: { content: "Eat some food" }
}

todo.title = "Sleep" // Error: cannot reassign a readonly property
todo.description = "Sleep at 9:00" // Error: cannot reassign a readonly property
deepTodo.title = "Sleep" // Error: cannot reassign a readonly property
deepTodo.description.content = "Sleep at 9:00" // allowed