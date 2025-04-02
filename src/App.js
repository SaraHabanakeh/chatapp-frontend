import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default App;
