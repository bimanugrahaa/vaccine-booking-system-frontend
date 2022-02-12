import { useNavigate, useOutletContext } from "react-router-dom"

export default function VaccinationTicket() {
    const { data } = useOutletContext()
    const navigate = useNavigate()

    const goDetailTiket = (family) => {
        navigate('/dashboard/tiket/detail', {state: family})
    }
    
    return (
        <>
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <div className="card border-3 p-4">
                <h5 className="border-bottom pb-4 border-2">Profil</h5>
                {data.requestvaksin.map((family) => 
                    <div onClick={() => goDetailTiket(family)} className="card p-2 m-2">
                        <h5>{family.nama}</h5>
                    </div>
                )}
            </div>
        </div> 
        </>
    )
}