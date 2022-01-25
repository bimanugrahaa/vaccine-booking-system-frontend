import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { checkFamilyStatus } from '../../store/Data';
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { VaccineStatus } from "../../services/services"

export default function ModalCheckStatus(props) {

    const mySession = useSelector((state) => state.mySession.mySession)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    // const data = VaccineStatus("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDI4MTYwMjQsInVzZXJfaWQiOjl9.O0Nm801yGk-HuV5NuMu5B7rSwaPU7IVRYjG670TfE8g")

    // console.log(data)

    // const CheckStatus = (e) => {

    //     const data = VaccineStatus(e, {nama: "Siti Aminah", nik: 1234567890}, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDI4MTYwMjQsInVzZXJfaWQiOjl9.O0Nm801yGk-HuV5NuMu5B7rSwaPU7IVRYjG670TfE8g")

    //     console.log(data)
    // }


    /* Base data for check user status */
    const baseUserData = {
        Namalengkap: "",
        nik: ""
    }

    /* useState for check user status */
    const [user, setUser] = useState(baseUserData)
    const [nama, setNama] = useState("")
    const [nik, setNIK] = useState("")

    console.log(props)

    const statusA = () => {
        // e.preventDefault()
        // dispatch(checkFamilyStatus(user))
        // navigate('/status', {state: user})
        console.log("Masuk")
        props.goSearchs()
    }

    const login = async (e) => {
        e.preventDefault()
        const value = await VaccineStatus(e, user)

        console.log(value)
        if (value.status !== 500) {
            e.preventDefault()
            dispatch(checkFamilyStatus(user))
            navigate(`.../status`)
        } else {
            // setError("Data yang Anda masukan salah!")
            console.log("A")
        }

    }
    // console.log(props.nama)
    return (
        <>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header border-0">
                <img src={logo} alt="" />
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>
            <div class="modal-body p-5 pt-4">
                {/* <form > */}
                    <div class="mb-1">
                        <label for="Namalengkap" class="form-label">Nama lengkap</label>
                        <input name='Namalengkap' type="text" class="form-control" id="Namalengkap" 
                            value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama lengkap sesuai KTP" aria-label="Name" />
                        {/* <small className="text-danger">{err.Namalengkap}</small><br/> */}
                    </div>
                    <div class="mb-1">
                        <label for="nik" class="form-label">NIK</label>
                        <input name='nik' type="text" class="form-control" id="nik" 
                            value={user.nik} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} placeholder="Masukan nik" aria-label="Number" />
                        {/* <small className="text-danger">{err.nik}</small><br/> */}
                    </div>
                    <div className="text-center">
                    <Link to='status' state={{user : true}} className="text-decoration-none text-light">
                        <button onClick={statusA} className="btn btn-primary text-center my-3">Selanjutnya</button>
                    </Link>
                        {/* <button className="btn btn-primary text-center my-3">Selanjutnya */}
                            {/* <Link to={'status'} state={{user : 'user'}} className="text-decoration-none text-light">Selanjutnya</Link> */}
                        {/* </button> */}
                    </div>
                {/* </form> */}

                {/* <a onClick={login}>Selanjutnya</a> */}
                
            </div>
            </div>
        </div>
        </div>
        </>
    )
}