import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'

export default function AddFaskes() {
    

    return (
        <>
        <div className="row">
            <div className='col-md-5 img-fluid'>
                <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} alt='vaccine-logo'/>
                </a>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-lg-3'>
                <Sidebar/>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-8 mt-3'>
                <div className='row'>
                    <h4 className='fw-bold text-uppercase text-center p-0'>Fasilitas Kesehatan Vaksinasi Covid-19</h4>
                </div>
                <div className='row mt-3'>
                    <h6 className='fw-bold'>Info Detail Faskes</h6>
                </div>
                <div className='row mt-3'>
                <form>
                    <div class="mb-3">
                        <label for="faskesName" class="form-label">Nama faskes</label>
                        <input name='faskesName' type="text" class="form-control" id="faskesName" aria-label="faskesName" placeholder='Nama faskes'/>
                    </div>
                    <div class="mb-3">
                        <label for="adress" class="form-label">Alamat</label>
                        <textarea name='address' class="form-control" id="adress" rows="3"></textarea>
                    </div>
                    <label for="Provinsi" class="form-label">Provinsi</label>
                    <select class="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih provinsi</option>
                        <option value="1">Sudah vaksin</option>
                        <option value="2">Expired</option>
                    </select>
                    <label for="Kota/Kabupaten" class="form-label">Kota/Kabupaten</label>
                    <select class="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kota/kabupaten</option>
                        <option value="1">Sudah vaksin</option>
                        <option value="2">Expired</option>
                    </select>
                    <label for="Kecamatan" class="form-label">Kecamatan</label>
                    <select class="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kecamatan</option>
                        <option value="1">Sudah vaksin</option>
                        <option value="2">Expired</option>
                    </select>
                    <label for="Kelurahan" class="form-label">Kelurahan</label>
                    <select class="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kelurahan</option>
                        <option value="1">Sudah vaksin</option>
                        <option value="2">Expired</option>
                    </select>
                    {/* <small className="text-danger">{getError}</small><br/> */}
                    <div className='mt-3'>
                        <button type="submit" class="btn btn-primary text-uppercase">Simpan</button>
                    </div>  
                </form>
                </div>
            </div>
        </div>
        </>
    )
}