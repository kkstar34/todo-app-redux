

export function removeTodo(id) {
    return {
        type: 'REMOVE-TODO',
        payload: id
    }
}