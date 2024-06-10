import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewFriend from './components/ViewFriend';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/view' element={<ViewFriend/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
