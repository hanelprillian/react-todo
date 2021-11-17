import React from 'react';
import {markDone, deleteTodo} from "../actions";
import { useDispatch } from 'react-redux';

const Item = (data) => {
    let dispatch = useDispatch()
    return (
        <li
            className="list-group-item">
            <div className="font-weight-bold">
                {data.isDone ?
                    <strike>{data.title}</strike> :
                    <span>{data.title}</span>
                }
            </div>
            <div>
                {data.isDone ?
                    <strike>{data.description}</strike> :
                    <span>{data.description}</span>
                }
            </div>

            <div className="mt-3">
                {!data.isDone &&
                <i
                    onClick={e => {
                        dispatch(markDone(data.id));
                    }}
                    className="fas fa-check mr-3"/>
                }
                <i
                    onClick={e => {
                        dispatch(deleteTodo(data.id));
                    }}
                    className="fas fa-trash mr-3"/>
            </div>
        </li>
    )
};

export default Item;