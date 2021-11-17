import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddToDo = connect()( ({ dispatch }) => {
    let title, description;
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!title.value.trim()) {
                    return;
                }
                if (!description.value.trim()) {
                    return;
                }
                dispatch(addTodo(title.value, description.value));
                title.value = '';
                description.value = '';
            }}
        >
            <div className="form-group">
                <div className="input-group">
                    <label>Title</label>
                    <input type="text"
                           placeholder="Enter an item"
                           ref={node => {
                               title = node;
                           }}
                           className="form-control"/>
                </div>
                <div className="input-group">
                    <label>Description</label>
                    <textarea
                        ref={node => {
                            description = node;
                        }}
                        cols="30" rows="10" className="form-control"/>
                </div>
                <button className="btn btn-primary" type="submit">Add To-Do</button>

            </div>
        </form>
    );
});

export default AddToDo