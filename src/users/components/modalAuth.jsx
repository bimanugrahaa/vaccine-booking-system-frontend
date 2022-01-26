import { Link } from "react-router-dom"
import logo from "../../assets/Logo.png"
import '../css/base.css'
import "../css/status.css"

export default function ModalAuth(props) {
    
    return (
        <>
        <div class={props.show ? "show-status status":"show-hide status"}>
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header border-0">
                <img src={logo} alt="" />
                <button onClick={() => props.setShow(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-5 pt-4">
                <h5 className="fw-bold">Sudah punya akun?</h5>
                <button className="btn btn-primary my-3"><Link to="/masuk" className="text-white text-decoration-none">Masuk</Link></button>
                <h6 className='text-center'>Belum punya akun? <Link to="/daftar" className="text-decoration-none">Buat akun</Link></h6>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}