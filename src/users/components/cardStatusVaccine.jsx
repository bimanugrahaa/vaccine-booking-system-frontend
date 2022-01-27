import { useEffect, useState } from "react"

export default function CardStatusVaccine(props) {
    
    const {state, data} = props
    const [status, setStatus] = useState("")
    const [className, setClassName] = useState("")

    const checkStatus = () => {
        if (data?.status_satu === "Sudah Vaksin" && data?.status_dua === "Sudah Vaksin") {
            setStatus("Sudah Vaksin Kedua")
            setClassName("my-5 text-success fw-bold")
        } else if (data?.status_satu === "Sudah Vaksin") {
            setStatus("Sudah Vaksin Pertama")
            setClassName("my-5 text-success fw-bold")
        } else if (data?.status_satu === "" || data?.status_satu === "Terdaftar" || data?.status_satu === "Expired" || data?.status_dua === "" || data?.status_dua === "Terdaftar" || data?.status_dua === "Expired") {
            setStatus("Belum Vaksin")
            setClassName("my-5 text-danger fw-bold")
        } 
    }

    useEffect(() => {
        checkStatus()
    }, [data])
    
    return ( 
        <>
        <div className="container-fluid card border-3 p-2 mx-auto my-3">
            <h6 className="text-uppercase">Status Vaksin</h6>
            <div className="text-center">
                <h5 className="text-uppercase p-3 m-3 border-bottom">{state.nama}</h5>
                <h5>NIK</h5>
                <h5 className="fw-bold">{state.nik}</h5>
                <h5 className={className}>{status}</h5>
            </div>
        </div>
        </>
    )
}