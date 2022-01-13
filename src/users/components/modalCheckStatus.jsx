import logo from "../../assets/Logo.png"

export default function ModalCheckStatus() {
    
    return (
        <>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header border-0">
                <img src={logo} alt="" />
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-5 pt-4">
                <form >
                    <div class="mb-1">
                        <label for="Namalengkap" class="form-label">Nama lengkap</label>
                        <input name='Namalengkap' type="text" class="form-control" id="Namalengkap" 
                            placeholder="Nama lengkap sesuai KTP" aria-label="Name"/>
                        {/* <small className="text-danger">{err.Namalengkap}</small><br/> */}
                    </div>
                    <div class="mb-1">
                        <label for="NIK" class="form-label">NIK</label>
                        <input name='NIK' type="text" class="form-control" id="NIK" 
                            placeholder="Masukan NIK" aria-label="Number"/>
                        {/* <small className="text-danger">{err.NIK}</small><br/> */}
                    </div>
                </form>
                <div className="text-center">
                    <button className="btn btn-primary text-center my-3">Selanjutnya</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}