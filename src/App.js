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
import FaskesReview from './users/pages/faskesReview';
import AddFaskesReview from './users/pages/addFaskesReview';
import CardStatusVaccine from './users/components/cardStatusVaccine';
import CardVaccineSchedule from './users/components/cardVaccineSchedule';
import StatusVaccine from './users/pages/statusVaccine';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="/login" exact element={<LoginUser/>}/>
            <Route path="/register" exact element={<RegisterUser/>}/>
            <Route path="/admin/login" exact element={<LoginAdmin/>}/>
            <Route path="/admin/faskes-list" exact element={<FaskesDetail/>}/>
            <Route path="/admin/user-vaccine" exact element={<UsersList/>}/>
            <Route path="/faskes/:id/:name" exact element={<FaskesReview/>}/>
            <Route path="/faskes" exact element={<SearchFaskes/>}/>
            <Route path="/dev" element={<StatusVaccine/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
