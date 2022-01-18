// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/Store'
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
import RegisterVaccination from './users/pages/registerVaccination';
import RegisterScheduleVaccination from './users/components/registerScheduleVaccination';
import RegisterUserVaccination from './users/components/registerUserVaccination';
import Admin from './admin/pages/admin';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
              <Routes>
                {/* User routes */}
                <Route path="/" exact element={<Homepage/>}/>
                <Route path="masuk" exact element={<LoginUser/>}/>
                <Route path="daftar" exact element={<RegisterUser/>}/>
                <Route path="faskes" exact element={<SearchFaskes/>}/>

                
                {/* Admin routes */}
                <Route path="/admin/login" exact element={<LoginAdmin/>}/>

                <Route path="/admin" exact element={<Admin/>}>
                  <Route path="faskes" exact element={<Faskes/>}/>
                  <Route path="faskes/add" exact element={<AddFaskes/>}/>
                  <Route path="faskes/:id" exact element={<FaskesDetail/>}/>
                  <Route path="faskes/:id/vaccine" exact element={<AddVaccine/>}/>                  
                </Route>
                
                {/* <Route path="/admin/faskes" exact element={<Faskes/>}/>
                <Route path="/admin/faskes/add" exact element={<AddFaskes/>}/>
                <Route path="/admin/faskes/detail" exact element={<FaskesDetail/>}/>
                <Route path="/admin/faskes/add-vaccine" exact element={<AddVaccine/>}/> */}

                <Route path="/admin/user-vaccine" exact element={<UsersList/>}/>
                <Route path="/faskes/:id/:name" exact element={<FaskesReview/>}/>

                {/* Development */}
                <Route path="/dev" element={<RegisterVaccination/>}>
                  <Route path="one" element={<RegisterScheduleVaccination/>}/>
                  <Route path="/dev" element={<Navigate to="/dev/one"/>}/>
                  <Route path="two" element={<RegisterUserVaccination/>}/>
                </Route>
              </Routes>
            </BrowserRouter>
          </PersistGate>
        </Provider>
  );
}

export default App;
