import './App.css';
import AddToDo from './containers/AddTodo';
import ToDoListContainer from './containers/Todo';

function App() {
  return (
      <div className="container">
        <div className="row">
            <div className="col-12 my-2">
                <h1>To-do</h1>
            </div>
            <div className="col-12">
                <AddToDo />
                <ToDoListContainer />
            </div>
        </div>
      </div>
  );
}

export default App;
