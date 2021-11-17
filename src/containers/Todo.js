import { connect } from 'react-redux';
import List from '../components/ListTodo';

const mapStateToProps = state => {
    return state
};

const ToDoListContainer = connect(mapStateToProps)(List);

export default ToDoListContainer;