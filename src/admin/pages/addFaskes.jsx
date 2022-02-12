import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'

export default function AddFaskes() {
    
    const baseDataFaskes = {
        nama: "",
        alamat: "",
        provinsi: "",
        kota: "",
        kecamatan: "",
        kelurahan: ""
    }

    const [dataFaskes, setDataFaskes] = useState(baseDataFaskes)
    const [getError, setError] = useState("")

    const [provinsi, getProvinsi] = useState([])
    const [provinsiID, setProvinsiID] = useState(0)
    const [kota, getKota] = useState([])
    const [kotaID, setKotaID] = useState(0)
    const [kecamatan, getKecamatan] = useState([])
    const [kecamatanID, setKecamatanID] = useState(0)
    const [kelurahan, getKelurahan] = useState([])

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
    }, [])

    useEffect(() => {
        fetchKota()
    }, [provinsiID])

    useEffect(() => {
        fetchKecamatan()
    }, [kotaID])

    useEffect(() => {
        fetchKelurahan()
    }, [kecamatanID])

    const submit = async(e) => {
        e.preventDefault()

        console.log("dataFaskes", dataFaskes)
        var config = {
            method: 'post',
            url: 'http://localhost:8000/faskes',
            data : dataFaskes
        };

        await axios(config)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {

                const status = error.response.status;

                if (status === 500) {
                    setError("Data yang Anda masukan salah!")
                }

                console.error('There was an error!', error);
            });
    }

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
            <div className='col-lg-auto pe-5'></div> */}
            <div className='col-lg-8 pe-0 mt-3'>
                <i class="fas fa-chevron-left m-2"><a className='ps-3 text-decoration-none text-uppercase' href="/admin/faskes">Kembali</a></i>
                <div className='row'>
                    <h4 className='fw-bold text-uppercase text-center p-0'>Fasilitas Kesehatan Vaksinasi Covid-19</h4>
                </div>
                <div className='row mt-3'>
                    <h5 className='fw-bold'>Info Detail Faskes</h5>
                </div>
                <div className='row mt-3'>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama faskes</label>
                        <input value={dataFaskes.nama} onChange={(e) => setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})} name='nama' type="text" className="form-control" id="nama" aria-label="nama" placeholder='Nama faskes'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <textarea value={dataFaskes.alamat} onChange={(e) => setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})} name='alamat' className="form-control" id="adress" rows="3"></textarea>
                    </div>
                    <label htmlFor="Provinsi" className="form-label">Provinsi</label>
                    <select onChange={(e) => {
                        setProvinsiID(e.target[e.target.selectedIndex].dataset.id)
                        setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})}} 
                        name='provinsi' className="form-select mb-3" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih provinsi</option>
                        {provinsi?.data?.provinsi?.map((prov) => 
                            <option data-id={prov.id} key={prov.id} value={prov.nama}>{prov.nama}</option>
                            )}
                    </select>
                    <label htmlFor="Kota/Kabupaten" className="form-label">Kota/Kabupaten</label>
                    <select onChange={(e) => {
                        setKotaID(e.target[e.target.selectedIndex].dataset.id)
                        setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})}} 
                        name='kota' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kota/kabupaten</option>
                        {kota?.data?.kota_kabupaten?.map((kota) => 
                            <option data-id={kota.id} key={kota.id} value={kota.nama}>{kota.nama}</option>
                        )}
                    </select>
                    <label htmlFor="Kecamatan" className="form-label">Kecamatan</label>
                    <select onChange={(e) => {
                        setKecamatanID(e.target[e.target.selectedIndex].dataset.id)
                        setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})}} 
                        name='kecamatan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kecamatan</option>
                        {kecamatan?.data?.kecamatan?.map((kec) => 
                            <option data-id={kec.id} key={kec.id} value={kec.nama}>{kec.nama}</option>
                        )}
                    </select>
                    <label htmlFor="Kelurahan" className="form-label">Kelurahan</label>
                    <select onChange={(e) => {
                        setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})}} name='kelurahan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kelurahan</option>
                        {kelurahan?.data?.kelurahan?.map((kel) => 
                            <option data-id={kel.id} key={kel.id} value={kel.nama}>{kel.nama}</option>
                        )}
                    </select>
                    <small className="text-danger">{getError}</small><br/>
                    <div className='mt-3'>
                        <button type="submit" className="btn btn-primary text-uppercase">Simpan</button>
                    </div>  
                </form>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}