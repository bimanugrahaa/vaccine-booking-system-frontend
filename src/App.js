// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './users/components/header';
import LoginUser from './users/pages/login';
import RegisterUser from './users/pages/register';
import LoginAdmin from './admin/pages/login';
import Sidebar from './admin/components/sidebar';
import FaskesList from './admin/components/faskesList';
import VaccineList from './admin/components/vaccineList';
import UsersList from './admin/components/usersList';
import Faskes from './admin/pages/faskes';
import FaskesDetail from './admin/pages/faskesDetail';
import AddFaskes from './admin/pages/addFaskes';
import AddVaccine from './admin/pages/addVaccine';
import Homepage from './users/pages/homepage';
import SearchFaskes from './users/pages/searchFaskes';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<LoginUser/>}/>
            <Route path="/register" exact element={<RegisterUser/>}/>
            <Route path="/admin/login" exact element={<LoginAdmin/>}/>
            <Route path="/admin/faskes-list" exact element={<FaskesDetail/>}/>
            <Route path="/admin/user-vaccine" exact element={<UsersList/>}/>
            <Route path="/dev" element={<SearchFaskes/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
