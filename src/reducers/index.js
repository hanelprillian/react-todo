import { ADD_TODO, MARK_DONE, DELETE_TODO, FILTER_TODO } from '../actions';

const initState = {
    todos: [],
    filteredTodos: [],
    isFiltering: false
};

export default function todo (state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            let assignNewItem = [
                ...state.todos,
                {
                    ...action.items
                }
            ]

            return {
                ...state,
                todos: assignNewItem
            }
        case MARK_DONE:
            let getTodo = state.todos.filter(obj => obj.id === action.id)[0]

            if(getTodo) {
                getTodo.isDone = true
            }

            return {
                ...state,
                todos: [...state.todos]
            }
        case DELETE_TODO:
            let deleteTodo = state.todos.filter(obj => obj.id !== action.id)

            return {
                ...state,
                todos: [...deleteTodo]
            }
        case FILTER_TODO:
            let filterTodo = state.todos

            if(action.status === 'done') {
                state.isFiltering = true
                filterTodo = filterTodo.filter(obj => obj.isDone)
            } else {
                state.isFiltering = false
            }

            return {
                ...state,
                filteredTodos: filterTodo
            }

        default:
            return state;
    }
}