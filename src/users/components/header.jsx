import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.png"
import "../css/header.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteMySession } from '../../store/Data';
import IsAuth from '../../utils/isAuth.js'
import { useEffect, useState } from "react";

export default function Header() {
     
    const mySession = useSelector((state) => state.mySession.mySession)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [auth, getAuth] = useState(false)

    /* Check if user is logged in */
    const authCheck = () => {
        getAuth(IsAuth(mySession))
    }

    /* Logout function */
    const logout = () => {
        const logout = deleteMySession()
        dispatch(logout)
        navigate(`/`)
    }

    useEffect(() => {
        authCheck()
    })

    return (
        <>
            <div className="container-fluid p-0">
                <header className="d-flex flex-wrap justify-content-center py-3 shadow">
                    <a href="/" className="d-flex align-items-center ms-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo} alt="logo-AyoVaksin!"/>
                    </a>

                    <ul className="nav nav-pills font-signika">
                        <li className="nav-item mx-3"><a href="/" className="nav-link font-12 px-2" aria-current="page">BERANDA</a></li>
                        <li className="nav-item mx-3"><a href="/#about" className="nav-link font-12 px-2">TENTANG</a></li>
                        <li className="nav-item mx-3"><Link to="/faskes" className="nav-link font-12 px-2">FASKES</Link></li>
                        {auth? 
                        <div class="dropdown nav-item mx-3">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {mySession.namalengkap}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="/dashboard/profil" className="dropdown-item">Profil Saya</Link></li>
                            <li><a class="dropdown-item" href="#" onClick={() => logout()}>Keluar</a></li>
                            </ul>
                        </div>
                        :
                        <>
                        <li className="nav-item primary-btn mx-3"><Link to="/masuk" className="nav-link font-12 text-light px-3">MASUK</Link></li>
                        <li className="nav-item secondary-btn mx-3"><Link to="/daftar" className="nav-link font-12 px-3">DAFTAR</Link></li>
                        </>
                        }
                        {/* <li className="nav-item primary-btn mx-3"><Link to="/masuk" className="nav-link font-12 text-light px-3">MASUK</Link></li>
                        <li className="nav-item secondary-btn mx-3"><Link to="/daftar" className="nav-link font-12 px-3">DAFTAR</Link></li> */}
                    </ul>
                </header>
            </div>    
        </>
    )
}