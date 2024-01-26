import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Header />
      <TodosContainer />
      {/* <Main /> */}
    </div>
  );
}

export default App;
