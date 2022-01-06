import logo from '../../assets/Logo.png'
import FaskesList from '../components/faskesList'
import Sidebar from '../components/sidebar'

export default function Faskes() {
    
    return(
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
                    <div class="contact-form flex-nowrap col-10 px-2">
                        <input type="text" class="form-control" placeholder="Rumah Sakit" aria-label="Rumah Sakit" aria-describedby="addon-wrapping"/>
                    </div>
                    <div className='col-2 d-grid'>
                        <button className='btn btn-primary text-uppercase'>Cari</button>
                    </div>
                </div>
                <button className='m-0 mt-3 btn btn-sm btn-primary'>+ Tambah faskes</button>
                <div className='row mt-2'>
                    <FaskesList/>
                    <FaskesList/>
                </div>
            </div>
        </div>
        </>
    )
}