import { useState } from "react";
import "../css/hero.css"
import ModalAuth from "./modalAuth";
import ModalCheckStatus from "./modalCheckStatus"

export default function Hero() {
    
    const [show, setShow] = useState(false);

    return (
        <>
        <div class="hero position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="fw-bold text-light hero-text">Sayangi dirimu</h1>
                <h1 class="fw-bold text-light hero-text">Sayangi sekitarmu</h1>
                <button type="button" class="btn btn-primary text-uppercase m-5" onClick={() => setShow(!show)} data-bs-toggle="modal" data-bs-target="#exampleModal">Daftar vaksinasi sekarang!</button>
                {show? <ModalCheckStatus/>:""}
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        </>
    )
}