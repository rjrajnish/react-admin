/* import logo from './logo.svg'; */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Organisation from './Components/Organisation';
import Dashboard from './Dashboard'
function App() {
  return (
    <Routes>
      <Route  path='/' element={<Dashboard />} />
      <Route  path='/organization' element={<Organisation />} />

   

    </Routes>
  );
}

export default App;
