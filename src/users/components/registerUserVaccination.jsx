
export default function RegisterUserVaccination() {
    
    return (
        <>
        <div className='col-md-5 my-auto mx-auto'>
            <div className='mx-3 px-3 py-3 card shadow-sm'>
                <h4 className='text-center mb-3 fw-bold text-uppercase'>Data Diri</h4>
                <form>
                    <div class="mt-3 mb-3">
                        <label for="Namalengkap" class="form-label">Nama lengkap</label>
                        <input name='Namalengkap' type="text" class="form-control" id="Namalengkap" 
                            placeholder="Nama lengkap sesuai KTP" aria-label="Name"/>
                        {/* <small className="text-danger">{err.Namalengkap}</small><br/> */}
                    </div>
                    <div class="mb-3">
                        <label for="NIK" class="form-label">NIK</label>
                        <input name='NIK' type="text" class="form-control" id="NIK" 
                            placeholder="Masukan NIK" aria-label="Number"/>
                        {/* <small className="text-danger">{err.NIK}</small><br/> */}
                    </div>
                    <label htmlFor="Jeniskelamin" className="form-label">Jenis Kelamin</label>
                    <select
                        name='Jeniskelamin' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Jenis Kelamin</option>
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                    </select>
                    <label htmlFor="Tanggallahir" className="form-label">Tanggal Lahir</label>
                    <select
                        name='Tanggallahir' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Tanggal Lahir</option>
                        <option>Rumah Sakit Ceria</option>
                        <option>Rumah Sakit Bahagia</option>
                    </select>
                    <div class="mb-3">
                        <label for="No" class="form-label">No. Handphone</label>
                        <input name='No' type="text" class="form-control" id="No" 
                            placeholder="Masukan No. Handphone" aria-label="Number"/>
                        {/* <small className="text-danger">{err.NIK}</small><br/> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <textarea name='alamat' className="form-control" id="adress" rows="3"></textarea>
                    </div>
                    <label htmlFor="Provinsi" className="form-label">Provinsi</label>
                    <select
                        name='provinsi' className="form-select mb-3" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih provinsi</option>
                    </select>
                    <label htmlFor="Kota/Kabupaten" className="form-label">Kota/Kabupaten</label>
                    <select
                        name='kota' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kota/kabupaten</option>
                    </select>
                    <label htmlFor="Kecamatan" className="form-label">Kecamatan</label>
                    <select
                        name='kecamatan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kecamatan</option>
                    </select>
                    <label htmlFor="Kelurahan" className="form-label">Kelurahan</label>
                    <select
                        name='kelurahan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kelurahan</option>
                    </select>
                    {/* <small className="text-danger">{getError}</small><br/> */}
                    <div className='text-center'>
                        <button type="button" class="btn btn-primary text-uppercase">Selanjutnya</button>
                    </div>       
                </form>   
            </div>
        </div>
        </>
    )
}