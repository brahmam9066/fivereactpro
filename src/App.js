import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import 'antd/dist/antd.min.css';
import Tables from './Tables';
import Forms from './Forms';
import TodoList from './TodoList';
import Api from './Api'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/tables' exact element={<Tables />} />
          <Route path='/forms' exact element={<Forms />} />
          <Route path='/todolist' exact element={<TodoList />} />
          <Route path='/api' exact element={<Api />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
