import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { GetUserDetail } from "../../services/services"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { deleteMySession } from '../../store/Data';

export default function Dashboard() {
    const mySession = useSelector((state) => state.mySession.mySession)
    const [data, setData] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* Get Detail function => Get data to server */
    const GetDetail = async (e) => {
        const value = await GetUserDetail(e, mySession)

        if (value.status === "success") {
            setData(value.response)
            
        } else {
            toast.error('Your session expired, please login!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            const logout = deleteMySession()
            dispatch(logout)
            setTimeout(() => navigate(`/`), 3000);   
        }
    }

    useEffect(() => {
        GetDetail()
    }, [])
    
    return (
        <>
        <Header/>
        <div className='row p-5'>
            <div className='col-xl-3'>
                <Sidebar/>
            </div>
            <div className='col-xl-auto'></div>
            <Outlet context={{data, mySession}}/>
        </div>
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        </>
    )
}