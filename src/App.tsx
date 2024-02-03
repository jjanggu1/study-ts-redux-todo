import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import { RootState } from "modules";
import { selectCounter, selectTodo } from "modules/selectScreen";

function App() {
  const { select } = useSelector((state: RootState) => ({
    select: state.selectScreen.selectScreenType,
  }));

  const dispatch = useDispatch();

  const onSelctCounter = (select: string) => dispatch(selectCounter(select));
  const onSelctTodo = (select: string) => dispatch(selectTodo(select));

  return (
    <div className="App">
      <header>
        <button
          onClick={() => {
            onSelctCounter("counter");
            console.log(select);
          }}
        >
          Counter
        </button>
        <button
          onClick={() => {
            onSelctTodo("todo");
            console.log(select);
          }}
        >
          ToDoList
        </button>
      </header>
      {select === "counter" ? (
        <CounterContainer />
      ) : (
        <>
          <Header />
          <TodosContainer />
        </>
      )}

      {/* <Main /> */}
    </div>
  );
}

export default App;
