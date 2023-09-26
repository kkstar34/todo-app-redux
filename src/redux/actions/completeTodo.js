

export function completeTodo(id) {
    return {
        type : "COMPLETE-TODO",
        payload : id
    }
}