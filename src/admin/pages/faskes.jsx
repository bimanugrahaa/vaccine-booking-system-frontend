import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import FaskesList from '../components/faskesList'
import Sidebar from '../components/sidebar'

export default function Faskes() {
    
    const [faskesList, getFaskesList] = useState([])

    const navigate = useNavigate();

    const getFaskes = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:8000/faskes/semua'
        };
    
        axios(config)
            .then(response => {
                console.log(response)
                getFaskesList(response)
            })
            .catch((error) => {
    
                const status = error.response.status;
    
                if (status === 500) {
                }
    
                console.error('There was an error!', error);
            });
    }

    const addFaskes = () => {
        navigate('/admin/faskes/add')
    }

    useEffect(() => {
        getFaskes()
    }, [])

    return(
        <>
        {/* <div className="row">
            <div className='col-md-5 img-fluid'>
                <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} alt='vaccine-logo'/>
                </a>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-xl-3'>
                <Sidebar/>
            </div>
            <div className='col-xl-auto'></div> */}
            <div className='col-xl-8 mt-3'>
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
                <Link to='/admin/faskes/add'>
                    <button className='m-0 mt-3 btn btn-sm btn-primary' onClick={() => addFaskes()}>+ Tambah faskes</button>
                </Link>
                
                <div className='row mt-2 p-3'>
                {faskesList?.data?.data?.map((faskes) => 
                    <Link to={`/admin/faskes/${faskes.id}`} className='text-decoration-none link-dark'>
                        <FaskesList useButton={true} faskes={faskes}/>
                    </Link>
                )}
                </div>
            </div>
        {/* </div> */}
        </>
    )
}