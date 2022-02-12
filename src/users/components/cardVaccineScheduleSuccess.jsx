import { useNavigate } from "react-router-dom"

export default function CardVaccineScheduleSuccess() {
    
    const navigate = useNavigate()
    const goTicket = () => {
        navigate('/dashboard')
    }

    return (
        <>
        <div className="container-fluid card border-3 p-2 mx-auto my-3">
            <h6 className="text-uppercase">Lokasi & Jadwal Vaksinasi</h6>
            <div className="text-center mt-4">
                <h5 className="text-success fw-bold">Terdaftar</h5>
                <button onClick={goTicket} className="btn btn-primary my-3">Cek Tiket Vaksin</button>
            </div>
        </div>
        </>
    )
}