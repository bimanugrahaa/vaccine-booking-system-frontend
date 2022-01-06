// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
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

function App() {
  return (
    <>
    <AddFaskes/>
    </>
  );
}

export default App;
