import logo from "../../assets/Logo.png"

export default function ModalAuth() {
    
    return (
        <>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header border-0">
                <img src={logo} alt="" />
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-5 pt-4">
                <h5 className="fw-bold">Sudah punya akun?</h5>
                <button className="btn btn-primary my-3">Masuk</button>
                <h6 className='text-center'>Belum punya akun? <a href='#'>Buat akun</a></h6>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}