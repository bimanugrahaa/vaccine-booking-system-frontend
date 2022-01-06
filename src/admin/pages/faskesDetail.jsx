import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import VaccineList from '../components/vaccineList'

export default function FaskesDetail() {
    
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
                    <div className="col-md-7">
                        <div className="row">
                            <h3 className='fw-bold'>Rumah Sakit Ceria</h3>
                        </div>
                        <div className="row">
                            <p className="mb-2">Kelurahan A, Kecamatan B, Kota C, Provinsi D</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <p className='col-2 m-0'>Jadwal Vaksin</p>
                    <div className='col-8'></div>
                    <button className='col-2 m-0 btn btn-sm btn-primary'>+ Tambah jadwal</button>
                </div>
                <div className='row mt-3'>
                    <VaccineList/>
                </div>
            </div>
        </div>
        </>
    )
}