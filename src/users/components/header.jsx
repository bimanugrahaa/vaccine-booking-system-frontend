import { Link } from "react-router-dom"
import logo from "../../assets/Logo.png"
import "../css/header.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import jwt_decode from 'jwt-decode';
import { useEffect, useState } from "react";

export default function Header() {
     
    // const mySession = useSelector((state) => state.mySession.mySession)
    // const dispatch = useDispatch()
    // const navigate = useNavigate();
    // const [auth, setAuth] = useState(false)

    // const authChecker = () => {
    //     const decoded = jwt_decode(mySession.token); 
    //     if (mySession.token !== "" && decoded.exp * 1000 > Date.now()) {
    //         setAuth(true)
    //     } else {
    //         setAuth(false)
    //     }

    //     // const decoded = jwt_decode(mySession.token); 
    //     console.log(decoded);
    //     console.log(Date.now())
    // }

    // useEffect(() => {
    //     authChecker()
    // }, [])

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
                        {/* {auth? 
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Nama
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        :
                        <>
                        <li className="nav-item primary-btn mx-3"><Link to="/masuk" className="nav-link font-12 text-light px-3">MASUK</Link></li>
                        <li className="nav-item secondary-btn mx-3"><Link to="/daftar" className="nav-link font-12 px-3">DAFTAR</Link></li>
                        </>
                        } */}
                        <li className="nav-item primary-btn mx-3"><Link to="/masuk" className="nav-link font-12 text-light px-3">MASUK</Link></li>
                        <li className="nav-item secondary-btn mx-3"><Link to="/daftar" className="nav-link font-12 px-3">DAFTAR</Link></li>
                    </ul>
                </header>
            </div>    
        </>
    )
}