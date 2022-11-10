import './App.css';
import Todo from './components/Todo/Todo';
import InputProvider from './contexts/InputContext';

function App() {
  return (
    <div className="App">
      <InputProvider>
        <Todo></Todo>
      </InputProvider>
    </div>
  );
}

export default App;
