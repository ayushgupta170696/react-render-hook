import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UserReducer } from './components/UseReducer/UserReducer';
import { Parent } from './components/PArent-Child/Parent';

function App() {
  return (
    <div className="App">
      <Parent></Parent>
    </div>
  );
}

export default App;
