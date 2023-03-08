import './App.css';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    {/* wrap entire project */}
      <Navbar/>
      {/* wrap route components */}
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route  path='/add' element={<AddUser/>}/>
      <Route  path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
    // <Homne/>
    // <div>

    // </div>

  );

}

export default App;
// npm i react-router-dom
// E:\5thSemSubjactsNdMatter\REACT\mern-crud-app\client-side\src