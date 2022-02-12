import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/header'
import '../css/base.css'

export default function RegisterVaccination() {
    const {state} = useLocation()
    const [user, setUser] = useState([])

    useEffect(() => {
        setUser(state)
    }, [])

    return (
        <>
        <Header/>
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-5 p-0 side-img'></div>
                <Outlet context={{user}}/>
            </div>
        </div>
        </>
    )
}