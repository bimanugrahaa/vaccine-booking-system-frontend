import { Link } from 'react-router-dom'

export default function RegisterScheduleVaccination() {
    
    return (
        <>
        <div className='col-md-5 my-auto mx-auto'>
            <div className='mx-3 px-3 py-3 card shadow-sm'>
                <h4 className='text-center mb-3 fw-bold text-uppercase'>Pendaftaran Vaksin</h4>
                <form>
                    <label htmlFor="Kategori" className="form-label">Kategori</label>
                    <select
                        name='Kategori' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Kategori</option>
                        <option >Masyarakat umum</option>
                        <option >Lanjut usia</option>
                    </select>
                    <label htmlFor="Lokasi" className="form-label">Lokasi</label>
                    <select
                        name='Lokasi' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Lokasi Faskes</option>
                        <option >Rumah Sakit Ceria</option>
                        <option >Rumah Sakit Bahagia</option>
                    </select>
                    <label htmlFor="Tanggal" className="form-label">Tanggal</label>
                    <select
                        name='Tanggal' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Tanggal</option>
                        <option >17-01-2022</option>
                        <option >19-01-2022</option>
                    </select>
                    <label htmlFor="Jam" className="form-label">Jam</label>
                    <select
                        name='Jam' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Jam</option>
                        <option >10.00-12.00</option>
                    </select>
                    <label htmlFor="Vaksin" className="form-label">Vaksin</label>
                    <select
                        name='Vaksin' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Jenis Vaksin</option>
                        <option >Sinovac</option>
                    </select>
                    <p>Sisa kuota: 100</p>
                    <div className='text-center'>
                        <Link to="/dev/two">
                            <button type="button" class="btn btn-primary text-uppercase">Selanjutnya</button>
                        </Link>
                    </div>       
                </form>   
            </div>
        </div>
        </>
    )
}