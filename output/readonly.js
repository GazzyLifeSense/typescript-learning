var todo = {
    title: "Eat",
    description: "Eat some food"
};
var deepTodo = {
    title: "Eat",
    description: { content: "Eat some food" }
};
todo.title = "Sleep"; // Error: cannot reassign a readonly property
todo.description = "Sleep at 9:00"; // Error: cannot reassign a readonly property
deepTodo.title = "Sleep"; // Error: cannot reassign a readonly property
deepTodo.description.content = "Sleep at 9:00"; // allowed
