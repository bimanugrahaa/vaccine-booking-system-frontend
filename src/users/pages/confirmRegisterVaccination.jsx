import Header from "../components/header";
import review_img from '../../assets/review-img.png'
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { EditRequestVaksinDua, EditRequestVaksinSatu, GetFaskesByID, GetVaksinByID, PostRequestVaksin } from "../../services/services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ConfirmRegisterVaccination() {
    const {state} = useLocation()
    console.log(state)

    const { user } = useOutletContext()

    
    console.log(user)

    const mySession = useSelector((state) => state.mySession.mySession)
    const navigate = useNavigate()
    
    const [vaccine, dataVaccine] = useState({})
    const [faskes, faskesName] = useState("")
    const getVaccineDetail = async() => {

        if (user.status_satu !== "Sudah Vaksin" && state.status_satu === "") {
            state.status_satu = "Terdaftar"
            const value = await GetVaksinByID(state.vaksinID_satu)
            dataVaccine(value.response)
            const faskes = await GetFaskesByID(value.response.faskes_id)
            faskesName(faskes?.response?.nama)
        } else if (user.status_dua !== "Tidak Vaksin") {
            // state.status_dua = "Terdaftar"
            const value = await GetVaksinByID(state.vaksinID_dua)
            dataVaccine(value.response)
            const faskes = await GetFaskesByID(value.response.faskes_id)
            faskesName(faskes?.response?.nama)
        }
    }

    const updateState = () => {
        state.nama = user.nama
        state.nik = user.nik
        state.jeniskelamin = user.jeniskelamin
        state.tanggallahir = user.tanggallahir
        state.nomor = user.nomor
        state.alamat = user.alamat
        state.kelurahan = user.kelurahan
        state.kecamatan = user.kecamatan
        state.kota = user.kota
        state.provinsi = user.provinsi
        
    }

    const submitData = async() => {
        // const value = await PostRequestVaksin(mySession, state)

        let value
        

        if (state.status_satu === "Terdaftar") {
            // state.status_satu = "Terdaftar"
            value = await PostRequestVaksin(mySession, state)
            console.log("baru", value)
        } else if (user.status_satu === "Belum" || user.status_satu === "Expired") {
            
            const update = {
                id: user.id,
                vaksinID_satu: state.vaksinID_satu,
                status_satu: "Terdaftar"
            }

            value = await EditRequestVaksinSatu(mySession, update)
            console.log("update satu", value)
        } else if (user.status_dua === "Belum" || user.status_dua === "Expired" || user.status_dua === "") {
            
            const update = {
                id: user.id,
                vaksinID_dua: state.vaksinID_dua,
                status_dua: "Terdaftar"
            }
            value = await EditRequestVaksinDua(mySession, update)
            console.log("update dua", value)
        }

        if (value.status === "success") {
            navigate('/')
        }
    }

    useEffect(() => {
        getVaccineDetail()
        updateState()
    },[])

    console.log(state)

    return (
        <>
        {/* <Header/> */}
        <div className='col-md-7 my-auto mx-auto'>
            <div className='row'>
                {/* <div className='col-md-4 p-0'>
                    <img src={review_img} className='img-fluid' alt="faskes-review" />
                </div> */}
                {/* <h5 className="text-center text-uppercase">Pendaftaran Vaksin</h5> */}
                <div className="container-fluid p-2 col-md-10 mx-auto my-3">
                    <h4 className="text-center text-uppercase fw-bold m-3">Pendaftaran Vaksin</h4>
                    <div className="card border-3 p-4">
                        <h5 className="text-uppercase fw-bold">Identitas Diri</h5>
                        <h6 className="mt-2">Nama Lengkap</h6>
                        <p className="fw-bold">{state.nama}</p>

                        <h6 className="mt-2">NIK</h6>
                        <p className="fw-bold">{state.nik}</p>

                        <h6 className="mt-2">Jenis Kelamin</h6>
                        <p className="fw-bold">{state.jeniskelamin}</p>

                        <h6 className="mt-2">Tanggal Lahir</h6>
                        <p className="fw-bold">{state.tanggallahir}</p>

                        <h6 className="mt-2">No. Handphone</h6>
                        <p className="fw-bold">{state.nomor}</p>

                        <h6 className="mt-2">Alamat</h6>
                        <p className="fw-bold">{`${state.alamat}, Kel. ${state.kelurahan}, Kec. ${state.kecamatan}, Kota ${state.kota}, Prov. ${state.provinsi}`}</p>
                    </div>

                    <div className="card border-3 p-4 mt-4">
                        <h5 className="text-uppercase fw-bold">Kategori</h5>
                        <p className="fw-bold">{state.kategori}</p>
                    </div>

                    <div className="card border-3 p-4 mt-4">
                        <h5 className="text-uppercase fw-bold">Jadwal</h5>
                        <h6 className="mt-2">Tanggal</h6>
                        <p className="fw-bold">{vaccine.jadwal}</p>

                        <h6 className="mt-2">Jam</h6>
                        <p className="fw-bold">{vaccine.waktu}</p>

                        <h6 className="mt-2">Jenis Vaksin</h6>
                        <p className="fw-bold">{vaccine.jenisvaksin}</p>

                        <h6 className="mt-2">Lokasi Faskes</h6>
                        <p className="fw-bold">{faskes}</p>
                    </div>

                    <div class="mb-3 form-check mt-4">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" 
                            onInvalid={(e) => e.target.setCustomValidity('Klik untuk menyetujui')}
                            onInput={(e) => e.target.setCustomValidity('')} required/>
                        <label class="form-check-label" for="exampleCheck1">Saya setuju dengan Syarat dan Ketentuan serta Kebijakan Privasi.</label>
                    </div>

                    <div className='text-center mt-5'>
                        <button onClick={() => submitData()} type="button" class="btn btn-primary text-uppercase">Daftar</button>
                    </div>  
                </div>                              
            </div>
        </div>
        </>
    )
}