import { connect } from 'react-redux';
import List from '../components/ListTodo';

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const ToDoListContainer = connect(mapStateToProps)(List);

export default ToDoListContainer;