import { useNavigate, useOutletContext } from "react-router-dom"

export default function Profile() {

    const { data } = useOutletContext()
    const navigate = useNavigate()

    const goEditProfil = () => {
        navigate('/dashboard/profil/edit')
    }

    return(
        <>
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <div className="card border-3 p-4">
                <h5 className="border-bottom pb-4 border-2">Profil</h5>

                <h6 className="mt-2">Nama Lengkap</h6>
                <h6 className="fw-bold">{data.namalengkap}</h6>

                <h6 className="mt-2">NIK</h6>
                <h6 className="fw-bold">{data.nik}</h6>

                <h6 className="mt-2">Email</h6>
                <h6 className="fw-bold">{data.email}</h6>

                <div className='mt-5'>
                    <button onClick={goEditProfil} type="submit" class="btn btn-primary text-uppercase">Edit Profil</button>
                </div>  
            </div>
        </div>  
        </>
    )
}