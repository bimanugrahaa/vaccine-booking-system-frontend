import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

export default function Dashboard() {
    
    return (
        <>
        <Header/>
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