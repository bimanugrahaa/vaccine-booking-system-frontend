import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { checkFamilyStatus } from '../../store/Data';
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { VaccineStatus } from "../../services/services"
import "../css/status.css"

export default function ModalCheckStatus(props) {

    const navigate = useNavigate();

    /* Base data for check user status */
    const baseUserData = {
        nama: "",
        nik: "",
    }

    /* useState for check user status */
    const [user, setUser] = useState(baseUserData)
    const [err, setErr] = useState("")

    const regexNumber = /^\d+$/;

    const goCheckStatus = () => {

        if (err === "") {
            navigate('/status', {state: user})
        }
        
    }
    const checkNIK = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        if (name === "nik") {
            if (value === "") {
                setErr("NIK tidak dapat kosong!")
            } else if (regexNumber.test(value)) {
                setErr("")
            } else if (!regexNumber.test(value)) {
                setErr("NIK hanya terdiri dari angka!")
            }

            setUser({...user, [e.target.name]: e.target.value})
        }
    }
    return (
        <>
        <div class={props.show ? "show-status status":"show-hide status"}>
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <img src={logo} alt="" />
                        <button onClick={() => props.setShow(false)} type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5 pt-4">
                            <div class="mb-1">
                                <label for="nama" class="form-label">Nama lengkap</label>
                                <input name='nama' type="text" class="form-control" id="nama" 
                                    value={user.nama} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} placeholder="Nama lengkap sesuai KTP" aria-label="Name" />
                            </div>
                            <div class="mb-1">
                                <label for="nik" class="form-label">NIK</label>
                                <input name='nik' type="number" class="form-control" id="nik" 
                                    value={user.nik} onChange={(e) => checkNIK(e)} placeholder="Masukan nik" aria-label="Number" />
                                    <small className="text-danger">{err}</small><br/>
                            </div>
                            <div className="text-center">
                                <button onClick={() => goCheckStatus()} className="btn btn-primary text-center my-3">Selanjutnya</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}