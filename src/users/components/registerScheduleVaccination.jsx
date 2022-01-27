import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useOutletContext } from 'react-router-dom'
import { GetAllFaskes, GetCountVaksin, GetFaskesByID, GetVaksinByID } from '../../services/services'

export default function RegisterScheduleVaccination(props) {
    const mySession = useSelector((state) => state.mySession.mySession)

    const { user } = useOutletContext()

    console.log("register schedule", user)
    const baseData = {
        kategori: "",
        nama: "",
        nik: "",
        jeniskelamin: "",
        tanggallahir: "",
        nomor:        "",
        alamat:       "",
        provinsi:     "",
        kota:         "",
        kecamatan:    "",
        kelurahan:    "",
        user_id:        mySession.id,
        vaksinID_satu: 0,
        status_satu:   "",
        vaksinID_dua:  0,
        status_dua:    ""
    }

    const [faskesList, getFaskesList] = useState([])
    const [faskesID, setFaskesID] = useState(0)
    const [vaccineList, getVaccineList] = useState([])
    const [vaccineID, setVaccineID] = useState(0)
    const [vaccine, getVaccine] = useState([])
    const [quota, setVaccineQuota] = useState(0)
    const [data, setData] = useState(baseData)
    const [restQuota, setRestQuota] = useState(0)

    

    const GetFaskes = async () => {
        const value = await GetAllFaskes()

        if (value.status === "success") {
            getFaskesList(value.response)
        }
    }

    const GetVaccine = async () => {
        const value = await GetFaskesByID(faskesID)

        if (value.status === "success") {
            getVaccineList(value.response.vaksin)
        }
    }

    const GetVaccineTime = async () => {
        const value = await GetVaksinByID(vaccineID)
        // baseData.status_satu = user.status_satu
        // baseData.status_dua = user.status_dua
        if ((user.status_satu !== "Sudah Vaksin") && baseData.status_satu === "") {
            setData({...data, ["vaksinID_satu"]: parseInt(vaccineID)})
        } else if ((user.status_dua !== "Sudah Vaksin")) {
            setData({...data, ["vaksinID_dua"]: parseInt(vaccineID)})
        }

        
        if (value.status === "success") {
            getVaccine(value.response)
        }
    }

    const GetQuota = async () => {
        if (vaccineID !== 0) {
            const value = await GetCountVaksin(vaccineID)

            if (value.status === "success") {
                setVaccineQuota(value.response)
            }
        }
        
    }

    useEffect(() => {
        GetFaskes()
    }, [])

    useEffect(() => {
        GetVaccine()
        
    }, [faskesID])

    useEffect(() => {
        GetVaccineTime()
        GetQuota()
        
    }, [vaccineID])

    useEffect(() => {
        const min = vaccine.stokvaksin - quota.data
        if (isNaN(min)) {
            setRestQuota(0)
        } else {
            setRestQuota(min)
        }
        
        
    },[vaccine, quota])

    console.log(user)
    return (
        <>
        <div className='col-md-5 my-auto mx-auto'>
            <div className='mx-3 px-3 py-3 card shadow-sm'>
                <h4 className='text-center mb-3 fw-bold text-uppercase'>Pendaftaran Vaksin</h4>
                <form>
                    <label htmlFor="kategori" className="form-label">Kategori</label>
                    <select onChange={(e) => {
                        setData({...data, [e.target.name]: e.target.value})}}
                        name='kategori' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Kategori</option>
                        <option >Masyarakat umum</option>
                        <option >Lanjut usia</option>
                    </select>
                    <label htmlFor="Lokasi" className="form-label">Lokasi</label>
                    <select onChange={(e) => {
                        setFaskesID(e.target[e.target.selectedIndex].dataset.id)
                        }} 
                        name='Lokasi' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Lokasi Faskes</option>
                        {faskesList?.map((faskes) =>
                                <option data-id={faskes.id} key={faskes.id} value={faskes.nama}>{faskes.nama}</option>
                            )}
                    </select>
                    <label htmlFor="Tanggal" className="form-label">Tanggal</label>
                    <select onChange={(e) => {
                        setVaccineID(e.target[e.target.selectedIndex].dataset.id)
                        }} 
                        name='Tanggal' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Tanggal</option>
                        {vaccineList?.map((vaccine) =>
                                <option data-id={vaccine.vaksin_id} key={vaccine.vaksin_id} value={vaccine.jadwal}>{vaccine.jadwal}</option>
                            )}
                    </select>
                    <label htmlFor="Jam" className="form-label">Jam</label>
                    <select
                        name='Jam' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Jam</option>
                        <option data-id={vaccine?.id} key={vaccine?.id} value={vaccine?.waktu}>{vaccine?.waktu}</option>
                    </select>
                    <label htmlFor="Vaksin" className="form-label">Vaksin</label>
                    <select
                        name='Vaksin' className="form-select mb-4" aria-label=".form-select-sm example" required>
                        <option selected disabled>Pilih Jenis Vaksin</option>
                        <option data-id={vaccine?.id} key={vaccine?.id} value={vaccine?.jenisvaksin}>{vaccine?.jenisvaksin}</option>
                    </select>
                    <p>Sisa kuota: {restQuota}</p>
                    <div className='text-center'>
                        {user.status_satu === ""?
                            <Link to="/daftar-vaksin/two" state={data}>
                                <button type="button" class="btn btn-primary text-uppercase">Selanjutnya</button>
                            </Link>
                        :
                            <Link to="/daftar-vaksin/konfirmasi" state={data}>
                                <button type="button" class="btn btn-primary text-uppercase">Selanjutnya</button>
                            </Link>
                        }
                        {/* <Link to="/daftar-vaksin/two" state={data}>
                            <button type="button" class="btn btn-primary text-uppercase">Selanjutnya</button>
                        </Link> */}
                    </div>       
                </form>   
            </div>
        </div>
        </>
    )
}