import { useEffect, useState } from "react"
import logo from "../../assets/Logo.png"
import { GetFaskesByID } from "../../services/services"
import CardVaccineList from "./cardVaccineList"

export default function ModalVaccine(props) {
    
    const {id} = props
    console.log("id", props)
    // const [detail, getDetailFaskes] = useState({})

    // const GetFaskesDetail = async(id) => {
    //     const value = await GetFaskesByID(id)

    //     if (value.status === "success") {
    //         getDetailFaskes(value.response)
    //     }
    // }

    // useEffect(() => {
    //     GetFaskesDetail(id)
    // }, [id])

    // console.log(detail)

    return (
        <>
        <div class="modal fade" id={`A${props?.detail?.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header border-0">
                <img src={logo} alt="" />
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-5 pt-4">
                <div className="row">
                    <h5 className="fw-bold">{props?.detail?.nama}</h5>
                </div>
                <div className="row mb-2">
                    <p>{`${props?.detail?.alamat}, Kel. ${props?.detail?.kelurahan}, Kec. ${props?.detail?.kecamatan}, Kota ${props?.detail?.kota}, Prov. ${props?.detail?.provinsi}`}</p>
                    {/* <small className="mb-2">A</small> */}
                </div>
                {props?.detail?.vaksin?.map((vaksin) => 
                    <CardVaccineList vaksin={vaksin}/>
                )}
                {/* <h5 className="fw-bold">Sudah punya akun?</h5>
                <button className="btn btn-primary my-3"><Link to="/masuk" className="text-white text-decoration-none">Masuk</Link></button>
                <h6 className='text-center'>Belum punya akun? <Link to="/daftar" className="text-decoration-none">Buat akun</Link></h6> */}
            </div>
            </div>
        </div>
        </div>
        </>
    )
}