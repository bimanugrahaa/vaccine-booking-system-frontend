// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './users/components/header';
import Login from './users/pages/login';
import Register from './users/pages/register';
import LoginAdmin from './admin/pages/login';
import Sidebar from './admin/components/sidebar';
import FaskesList from './admin/components/faskesList';
import VaccineList from './admin/components/vaccineList';
import UsersList from './admin/components/usersList';
import Faskes from './admin/pages/faskes';
import FaskesDetail from './admin/pages/faskesDetail';
import AddFaskes from './admin/pages/addFaskes';
import AddVaccine from './admin/pages/addVaccine';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/admin/login" exact element={<LoginAdmin/>}/>
            <Route path="/admin/faskes-list" exact element={<FaskesDetail/>}/>
            <Route path="/admin/user-vaccine" exact element={<UsersList/>}/>
            <Route path="/dev" element={<AddVaccine/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
