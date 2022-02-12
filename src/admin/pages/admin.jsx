import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
    
    return (
        <>
        <div className="row">
            <div className='col-md-5 img-fluid'>
                <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} alt='vaccine-logo'/>
                </a>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-xl-3'>
                <Sidebar/>
            </div>
            <div className='col-xl-auto'></div>
            <Outlet/>
        </div>
        </>
    )
}