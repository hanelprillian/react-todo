export const ADD_TODO = 'ADD_TODO';
export const MARK_DONE = 'MARK_DONE';
export const FILTER_TODO = 'FILTER_TODO';
export const DELETE_TODO = 'DELETE_TODO';

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

export function filterTodo(status) {
    return {
        type: FILTER_TODO,
        status
    };
}

export function markDone(id) {
    return {
        type: MARK_DONE,
        id
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}