import React from 'react';
import Item from './ItemTodo';
import {filterTodo} from "../actions";
import { useDispatch } from 'react-redux';

const List = ({ todos, filteredTodos, isFiltering }) => {
    let dispatch = useDispatch()
    return (
        <div className="mt-4">
            Filter by Status:
            <button
                onClick={e => {
                    dispatch(filterTodo('all'));
                }}
                className="btn btn-primary mr-3 ml-3">All</button>
            <button
                onClick={e => {
                    dispatch(filterTodo('done'));
                }}
                className="btn btn-primary">Done</button>
            <ul className="list-group mt-3">
                {(isFiltering ? filteredTodos : todos).map((d, index) => (
                    <Item key={index} {...d} />
                ))}
            </ul>
        </div>
    )
};
export default List;