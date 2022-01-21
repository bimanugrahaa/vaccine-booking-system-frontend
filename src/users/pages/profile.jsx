
export default function Profile() {
    
    return(
        <>
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <div className="card border-3 p-4">
                <h5 className="border-bottom pb-4 border-2">Profil</h5>

                <h6 className="mt-2">Nama Lengkap</h6>
                <h6 className="fw-bold">Andi Pratama</h6>

                <h6 className="mt-2">NIK</h6>
                <h6 className="fw-bold">31789654000981145</h6>

                <h6 className="mt-2">Email</h6>
                <h6 className="fw-bold">andipratama@gmail.com</h6>

                <div className='mt-5'>
                    <button type="submit" class="btn btn-primary text-uppercase">Edit Profil</button>
                </div>  
            </div>
        </div>  
        </>
    )
}