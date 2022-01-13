import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import login_img from '../../assets/vaccine-one.png'
import Header from '../components/header'
import RegisterScheduleVaccination from '../components/registerScheduleVaccination'
import RegisterUserVaccination from '../components/registerUserVaccination'
export default function RegisterVaccination() {
    
    const [components, setComponents] = useState(true)

    console.log("render")
    return (
        <>
        <Header/>
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-5 p-0'>
                    <img src={login_img} className='img-fluid' alt="vaccine-login" />
                </div>
                {/* {components ? 
                <RegisterScheduleVaccination/>
                :
                <RegisterUserVaccination/>} */}
                <Outlet/>
                {/* <RegisterScheduleVaccination/> */}
                {/* <button className='btn btn-primary'><Link to="/dev/two">Selanjutnya</Link></button> */}
                {/* <button className='btn btn-primary' onClick={() => setComponents(!components)}>Selanjutnya</button> */}

            </div>
            
        </div>
        </>
    )
}