import { ADD_TODO } from '../actions';

const initState = {
    todos: []
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
        default:
            return state;
    }
}