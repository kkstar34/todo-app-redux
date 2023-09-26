

export function addTodo(todo) {
    return {
        type : "ADD-TODO",
        payload : todo,
    }
}