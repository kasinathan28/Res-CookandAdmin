import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "../src/Modules/Cook/Index/Index";
import CDash from './Modules/Cook/Dashboard/CDash';
import Dashboard from './Modules/Admin/Dashboard/Dashboard';
import { Socket } from 'socket.io-client';



function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/cdash' element={<CDash/>} />
      <Route path='/adash' element={<Dashboard/>} />
    </Routes>
   </Router>
  );
}

export default App;