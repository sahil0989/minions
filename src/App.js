import './App.css';
import About from './mimi page/About';
import Characters from './mimi page/Characters';
import Minions from './mimi page/Minions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Minions />} />
        <Route path='/about' element={<About />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
