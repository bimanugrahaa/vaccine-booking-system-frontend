import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import VaccineList from '../components/vaccineList'

export default function FaskesDetail() {
    
    const navigate = useNavigate();

    const [faskesDetail, getFaskesDetail] = useState({})

    /* Get current url and ID */
    const urlNow = window.location.pathname
    const uriSplit = urlNow.split('/')
    const ID = uriSplit[3]

    const getDetail = () => {
        var config = {
            method: 'get',
            url: `http://localhost:8000/faskes/${ID}`
        };
    
        axios(config)
            .then(response => {
                console.log(response)
                getFaskesDetail(response.data.data)
            })
            .catch((error) => {
    
                const status = error.response.status;
    
                if (status === 500) {
                }
    
                console.error('There was an error!', error);
            });
    }

    const addVaccine = () => {
        navigate(`/admin/faskes/${ID}/vaccine`)
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <>
        {/* <div className="row">
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
            <div className='col-lg-1'></div> */}
            <div className='col-xl-8 mt-3'>
                <div className='row'>
                    <h4 className='fw-bold text-uppercase text-center p-0'>Fasilitas Kesehatan Vaksinasi Covid-19</h4>
                </div>
                <div className='row mt-3'>
                    <div className="col-12">
                        <div className="row">
                            <h3 className='fw-bold'>{faskesDetail?.nama}</h3>
                        </div>
                        <div className="row">
                            <p className="mb-2">{`${faskesDetail?.alamat}, Kel. ${faskesDetail?.kelurahan}, Kec. ${faskesDetail?.kecamatan}, Kota ${faskesDetail?.kota}, Prov. ${faskesDetail?.provinsi}`}</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <p className='col-2 m-0'>Jadwal Vaksin</p>
                    <div className='col-8'></div>
                    <button className='col-2 m-0 btn btn-sm btn-primary' onClick={() => addVaccine()}>+ Tambah jadwal</button>
                </div>
                <div className='row mt-3'>
                    {faskesDetail?.vaksin?.map((vaksin) =>
                        <VaccineList vaksin={vaksin}/>
                    )}
                    {/* <VaccineList/>
                    <VaccineList/> */}
                </div>
            {/* </div> */}
        </div>
        </>
    )
}