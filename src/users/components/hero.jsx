import { useEffect, useState } from "react";
import "../css/hero.css"
import "../css/base.css"
import { useDispatch, useSelector } from 'react-redux';
import IsAuth from '../../utils/isAuth.js'
import ModalAuth from "./modalAuth";
import ModalCheckStatus from "./modalCheckStatus"
import { useNavigate } from "react-router-dom";

export default function Hero(props) {
    
    const mySession = useSelector((state) => state.mySession.mySession)
    const [auth, getAuth] = useState(false)
    const [showStatus, setShowStatus] = useState(false);
    const [showAuth, setShowAuth] = useState(false);

    /* Check if user is logged in */
    const authCheck = () => {
        getAuth(IsAuth(mySession))
    }
    
    useEffect(() => {
        authCheck()
    })
    
    // console.log(nama)
    return (
        <>
        <div class="hero position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="fw-bold text-light hero-text">Sayangi dirimu</h1>
                <h1 class="fw-bold text-light hero-text">Sayangi sekitarmu</h1>
                <button type="button" class="btn btn-primary primary-color text-uppercase m-5" onClick={() => auth? setShowStatus(!showStatus): setShowAuth(!showAuth)}>Daftar vaksinasi sekarang!</button>
                <ModalCheckStatus show={showStatus} setShow={setShowStatus}/>
                <ModalAuth show={showAuth} setShow={setShowAuth}/>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        </>
    )
}