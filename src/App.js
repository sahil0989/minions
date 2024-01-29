import './App.css';
import Minions from './mimi page/Minions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Minions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
