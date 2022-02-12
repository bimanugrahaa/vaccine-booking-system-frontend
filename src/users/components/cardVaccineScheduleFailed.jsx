import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CardVaccineScheduleFailed(props) {
    
    const {data} = props
    const navigate = useNavigate()
    const goRegistration = () => {
        navigate('/daftar-vaksin', {state: data})
    }

    console.log(data)

    const [status, setStatus] = useState("")
    const [className, setClassName] = useState("")

    const checkStatus = () => {
        if (data.status_satu === "" || data.status_dua === "") {
            setStatus("Belum Terdaftar")
            setClassName("text-danger fw-bold")
        } else if (data.status_satu === "Expired" || data.status_dua === "Expired") {
            setStatus("Tiket Vaksin Expired")
            setClassName("text-danger fw-bold")
        }
    }

    useEffect(() => {
        checkStatus()
    }, [])

    return (
        <>
        <div className="container-fluid card border-3 p-2 mx-auto my-3">
            <h6 className="text-uppercase">Lokasi & Jadwal Vaksinasi</h6>
            <div className="text-center mt-4">
                <h5 className={className}>{status}</h5>
                <h5>Daftarkan diri Anda melalui tombol berikut</h5>
                <button onClick={goRegistration} className="btn btn-primary my-3">Daftar Vaksinasi Covid-19</button>
            </div>
        </div>
        </>
    )
}