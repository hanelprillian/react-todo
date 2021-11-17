export const ADD_TODO = 'ADD_TODO';

export function addTodo(title, description) {
    return {
        type: ADD_TODO,
        items: {
            id: (new Date().getTime()),
            title,
            description,
            isDone :  false
        }
    };
}

export function markDone(id) {
    return {
        type: ADD_TODO,
        id
    };
}