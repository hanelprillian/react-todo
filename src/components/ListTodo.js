import React from 'react';
import Item from './ItemTodo';

const List = ({ todos }) => (
    <ul className="list-group">
        {todos.map((d, index) => (
            <Item key={index} {...d} />
        ))}
    </ul>
);
export default List;