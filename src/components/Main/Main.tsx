
import AddTask from './AddTask/AddTask';
import TodoList from './TodoList/TodoList';

function Main() {
  return (
    <main className="main">
      <AddTask input="" onChangeInput={() => {}} onAdd={() => {}} />
      <TodoList todos={[]} onUpdateInput={() => {}} onStartUpdate={() => {}} onCompleteUpdate={() => {}} onRemove={() => {}} onIsDone={() => {}} />
    </main>
  );
}

export default Main;
