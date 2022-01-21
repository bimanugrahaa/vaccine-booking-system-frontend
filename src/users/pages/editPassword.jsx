
export default function EditPassword() {
    
    return (
        <>
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <div className="card border-3 p-4">
                <h5 className="border-bottom pb-4 border-2">Profil</h5>

                {/* <h6 className="mt-2">Nama Lengkap</h6>
                <h6 className="fw-bold">Andi Pratama</h6>

                <h6 className="mt-2">NIK</h6>
                <h6 className="fw-bold">31789654000981145</h6>

                <h6 className="mt-2">Email</h6>
                <h6 className="fw-bold">andipratama@gmail.com</h6> */}

                <form>
                    <div class="mt-3 mb-3">
                        <label for="Namalengkap" class="form-label">Kata sandi sekarang</label>
                        <input name='Namalengkap' type="text" class="form-control" id="Namalengkap" 
                            placeholder="Nama lengkap sesuai KTP" aria-label="Name"/>
                        {/* <small className="text-danger">{err.Namalengkap}</small><br/> */}
                    </div>
                    <div class="mb-3">
                        <label for="NIK" class="form-label">Kata sandi baru</label>
                        <input name='NIK' type="text" class="form-control" id="NIK" 
                            placeholder="Masukan NIK" aria-label="Number"/>
                        {/* <small className="text-danger">{err.NIK}</small><br/> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Konfirmasi kata sandi</label>
                        <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Masukan email'
                        />
                    </div>
                    {/* <small className="text-danger">{getError}</small><br/> */}
                    {/* <div className='text-center mt-3'>
                        <button type="submit" class="btn btn-primary text-uppercase">Masuk</button>
                    </div>    */}
                    <div className='mt-5'>
                        <button type="submit" class="btn btn-primary text-uppercase">Simpan</button>
                    </div>      
                </form> 
                
                {/* <div className='mt-5'>
                    <button type="submit" class="btn btn-primary text-uppercase">Edit Profil</button>
                </div>   */}
            </div>
        </div>  
        </>
    )
}