import axios from "axios"
import { useEffect, useState } from "react"

export default function RegisterUserVaccination() {
    
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
                    <select onChange={(e) => {
                        setProvinsiID(e.target[e.target.selectedIndex].dataset.id)
                        // setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})
                    }} 
                        name='provinsi' className="form-select mb-3" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih provinsi</option>
                        {provinsi?.data?.provinsi?.map((prov) => 
                            <option data-id={prov.id} key={prov.id} value={prov.nama}>{prov.nama}</option>
                            )}
                    </select>
                    <label htmlFor="Kota/Kabupaten" className="form-label">Kota/Kabupaten</label>
                    <select onChange={(e) => {
                        setKotaID(e.target[e.target.selectedIndex].dataset.id)
                        // setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})
                    }} 
                        name='kota' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kota/kabupaten</option>
                        {kota?.data?.kota_kabupaten?.map((kota) => 
                            <option data-id={kota.id} key={kota.id} value={kota.nama}>{kota.nama}</option>
                        )}
                    </select>
                    <label htmlFor="Kecamatan" className="form-label">Kecamatan</label>
                    <select onChange={(e) => {
                        setKecamatanID(e.target[e.target.selectedIndex].dataset.id)
                        // setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})
                    }} 
                        name='kecamatan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kecamatan</option>
                        {kecamatan?.data?.kecamatan?.map((kec) => 
                            <option data-id={kec.id} key={kec.id} value={kec.nama}>{kec.nama}</option>
                        )}
                    </select>
                    <label htmlFor="Kelurahan" className="form-label">Kelurahan</label>
                    <select onChange={(e) => {
                        // setDataFaskes({...dataFaskes, [e.target.name]: e.target.value})
                    }} 
                        name='kelurahan' className="form-select mb-3" aria-label=".form-select-sm example">
                        <option selected disabled>Pilih kelurahan</option>
                        {kelurahan?.data?.kelurahan?.map((kel) => 
                            <option data-id={kel.id} key={kel.id} value={kel.nama}>{kel.nama}</option>
                        )}
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