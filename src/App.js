// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import Header from './users/components/header';
import Login from './users/pages/login';
import Register from './users/pages/register';
import LoginAdmin from './admin/pages/login';
import Sidebar from './admin/components/sidebar';

function App() {
  return (
    <>
    <Sidebar/>
    </>
  );
}

export default App;
