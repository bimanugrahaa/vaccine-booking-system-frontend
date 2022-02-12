import { useNavigate } from "react-router-dom"

export default function UserVaccineHome() {
    
    const navigate = useNavigate()

    const goVaccineSatu = () => {
        navigate('/admin/user-vaccine/one', {state: "one"})
    }

    const goVaccineDua = () => {
        navigate('/admin/user-vaccine/two', {state: "dua"})
    }

    return(
        <>
        <div className='row col-xl-8 mt-3'>
            <h3 className="fw-bold text-center mb-3">Daftar Vaksinasi</h3>
            <div className="col-6  text-center">
                <button onClick={() => goVaccineSatu()} className="btn btn-primary">VAKSINASI DOSIS SATU</button>
            </div>
            <div className="col-6 text-center">
                <button onClick={() => goVaccineDua()} className="btn btn-primary">VAKSINASI DOSIS DUA</button>
            </div>
        </div>
        </>
    )
}