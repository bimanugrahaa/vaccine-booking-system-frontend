import Header from "../components/header";
import review_img from '../../assets/review-img.png'

export default function ConfirmRegisterVaccination() {
    
    return (
        <>
        <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4 p-0'>
                    <img src={review_img} className='img-fluid' alt="faskes-review" />
                </div>
                {/* <h5 className="text-center text-uppercase">Pendaftaran Vaksin</h5> */}
                <div className="container-fluid p-2 col-md-6 mx-auto my-3">
                    <h4 className="text-center text-uppercase fw-bold m-3">Pendaftaran Vaksin</h4>
                    <div className="card border-3 p-4">
                        <h5 className="text-uppercase fw-bold">Identitas Diri</h5>
                        <h6 className="mt-2">Nama Lengkap</h6>
                        <p className="fw-bold">Andi Pratama</p>

                        <h6 className="mt-2">NIK</h6>
                        <p className="fw-bold">1234567890</p>

                        <h6 className="mt-2">Jenis Kelamin</h6>
                        <p className="fw-bold">Pria</p>

                        <h6 className="mt-2">Tanggal Lahir</h6>
                        <p className="fw-bold">1 Januari 1998</p>

                        <h6 className="mt-2">No. Handphone</h6>
                        <p className="fw-bold">089981457699</p>

                        <h6 className="mt-2">Alamat</h6>
                        <p className="fw-bold">Jl. Dukuh Blok 2B Swasembada Jakarta Utara</p>
                    </div>

                    <div className="card border-3 p-4 mt-4">
                        <h5 className="text-uppercase fw-bold">Kategori</h5>
                        <p className="fw-bold">Andi Pratama</p>
                    </div>

                    <div className="card border-3 p-4 mt-4">
                        <h5 className="text-uppercase fw-bold">Jadwal</h5>
                        <h6 className="mt-2">Tanggal</h6>
                        <p className="fw-bold">Senin, 1 Juni 2021</p>

                        <h6 className="mt-2">Jam</h6>
                        <p className="fw-bold">08.00 - 10.00</p>

                        <h6 className="mt-2">Jenis Vaksin</h6>
                        <p className="fw-bold">Sinovac</p>

                        <h6 className="mt-2">Lokasi Faskes</h6>
                        <p className="fw-bold">Rumah Sakit Ceria</p>
                    </div>

                    <div class="mb-3 form-check mt-4">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" 
                            onInvalid={(e) => e.target.setCustomValidity('Klik untuk menyetujui')}
                            onInput={(e) => e.target.setCustomValidity('')} required/>
                        <label class="form-check-label" for="exampleCheck1">Saya setuju dengan Syarat dan Ketentuan serta Kebijakan Privasi.</label>
                    </div>

                    <div className='text-center mt-5'>
                        <button type="submit" class="btn btn-primary text-uppercase">Daftar</button>
                    </div>  
                </div>                              
            </div>
        </div>
        </>
    )
}