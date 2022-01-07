import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'

export default function AddFaskes() {
    
    const [provinsi, getProvinsi] = useState([])
    const [provinsiID, setProvinsiID] = useState([])
    const [kota, getKota] = useState([])
    const [kotaID, setKotaID] = useState([])
    const [kecamatan, getKecamatan] = useState([])
    const [kecamatanID, setKecamatanID] = useState([])
    const [kelurahan, getKelurahan] = useState([])
    const [kelurahanID, setKelurahanID] = useState([])

    const baseURLDaerah = "https://dev.farizdotid.com/api/daerahindonesia"

    const fetchProvinsi = async() => {
        await axios.get(`${baseURLDaerah}/provinsi`)
        .then(response => {
            getProvinsi(response)
        })
        .catch(err => console.log("error found on fetchProvinsi", err))
    }

    const fetchKota = async () => {
        await axios.get(`${baseURLDaerah}/kota?id_provinsi=${provinsiID}`)
        .then(response => {
            getKota(response)
            console.log(response)})
        .catch(err => console.log("error found on fetchKota", err))
    }

    const fetchKecamatan = async () => {
        await axios.get(`${baseURLDaerah}/kecamatan?id_kota=${kotaID}`)
        .then(response => {
            getKecamatan(response)
            console.log(response)})
        .catch(err => console.log("error found on fetchKecamatan", err))
    }

    const fetchKelurahan = async () => {
        await axios.get(`${baseURLDaerah}/kelurahan?id_kecamatan=${kecamatanID}`)
        .then(response => {
            getKelurahan(response)
            console.log(response)})
        .catch(err => console.log("error found on fetchKelurahan", err))
    }

    useEffect(() => {
        fetchProvinsi()
        fetchKota()
        fetchKecamatan()
        fetchKelurahan()
    }, [provinsiID, kotaID, kecamatanID, kelurahanID])

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
                    <div className="mb-3">
                        <label for="faskesName" className="form-label">Nama faskes</label>
                        <input name='faskesName' type="text" className="form-control" id="faskesName" aria-label="faskesName" placeholder='Nama faskes'/>
                    </div>
                    <div className="mb-3">
                        <label for="adress" className="form-label">Alamat</label>
                        <textarea name='address' className="form-control" id="adress" rows="3"></textarea>
                    </div>
                    <label for="Provinsi" className="form-label">Provinsi</label>
                    <select onChange={(e) => setProvinsiID(e.target.value)} name='provinsi' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih provinsi</option>
                        {provinsi?.data?.provinsi?.map((prov) => 
                            <option value={prov.id}>{prov.nama}</option>
                        )}
                    </select>
                    <label for="Kota/Kabupaten" className="form-label">Kota/Kabupaten</label>
                    <select onChange={(e) => setKotaID(e.target.value)} name='kota' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kota/kabupaten</option>
                        {kota?.data?.kota_kabupaten?.map((kota) => 
                            <option value={kota.id}>{kota.nama}</option>
                        )}
                    </select>
                    <label for="Kecamatan" className="form-label">Kecamatan</label>
                    <select onChange={(e) => setKecamatanID(e.target.value)} name='kecamatan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kecamatan</option>
                        {kecamatan?.data?.kecamatan?.map((kec) => 
                            <option value={kec.id}>{kec.nama}</option>
                        )}
                    </select>
                    <label for="Kelurahan" className="form-label">Kelurahan</label>
                    <select onChange={(e) => setKelurahanID(e.target.value)} name='kelurahan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kelurahan</option>
                        {kelurahan?.data?.kelurahan?.map((kel) => 
                            <option value={kel.id}>{kel.nama}</option>
                        )}
                    </select>
                    {/* <small className="text-danger">{getError}</small><br/> */}
                    <div className='mt-3'>
                        <button type="submit" className="btn btn-primary text-uppercase">Simpan</button>
                    </div>  
                </form>
                </div>
            </div>
        </div>
        </>
    )
}