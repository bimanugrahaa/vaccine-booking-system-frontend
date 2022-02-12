import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { EditUserDetail } from "../../services/services"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { deleteMySession } from '../../store/Data';


export default function EditProfile() {
    const { data, mySession } = useOutletContext()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* Base data edit for user */
    const baseUserEdit = {
        id: data.id,
        namalengkap: data.namalengkap,
        email: data.email,
    }

    /* useState for edit user */
    const [user, setUser] = useState(baseUserEdit)

    /* Edit function => Edit data to server */
    const Edit = async (e) => {
        const value = await EditUserDetail(e, mySession, user)

        if (value.status !== "error login") {
            toast.success('Edit profil berhasil!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTimeout(() => navigate('/dashboard'), 3000);
            
        } else {
            toast.error('Your session expired, please login!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            const logout = deleteMySession()
            dispatch(logout)
            navigate(`/`)
        }
    }

    return (
        <>
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <div className="card border-3 p-4">
                <h5 className="border-bottom pb-4 border-2">Profil</h5>

                {/* <h6 className="mt-2">Nama Lengkap</h6>
                <h6 className="fw-bold">Andi Pratama</h6>

                <h6 className="mt-2">NIK</h6>
                <h6 className="fw-bold">31789654000981145</h6>

                <h6 className="mt-2">Email</h6>
                <h6 className="fw-bold">andipratama@gmail.com</h6> */}

                <form onSubmit={(e) => Edit(e)}>
                    <div class="mt-3 mb-3">
                        <label for="namalengkap" class="form-label">Nama lengkap</label>
                        <input name='namalengkap' type="text" class="form-control" id="namalengkap" 
                            value={user.namalengkap} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} placeholder="Nama lengkap sesuai KTP" aria-label="Name"/>
                        {/* <small className="text-danger">{err.Namalengkap}</small><br/> */}
                    </div>
                    {/* <div class="mb-3">
                        <label for="nik" class="form-label">NIK</label>
                        <input name='nik' type="text" class="form-control" id="nik" 
                            value={user.nik} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} placeholder="Masukan NIK" aria-label="Number"/> */}
                        {/* <small className="text-danger">{err.NIK}</small><br/> */}
                    {/* </div> */}
                    <h6 className="mt-2">NIK</h6>
                    <h6 className="fw-bold mb-3">{data.nik}</h6>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input name='email' type="email" class="form-control" id="exampleInputEmail1" 
                        value={user.email} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} aria-describedby="emailHelp" placeholder='Masukan email'
                        />
                    </div>
                    {/* <small className="text-danger">{getError}</small><br/> */}
                    {/* <div className='text-center mt-3'>
                        <button type="submit" class="btn btn-primary text-uppercase">Masuk</button>
                    </div>    */}
                    <div className='mt-5'>
                        <button type="submit" class="btn btn-primary text-uppercase">Simpan</button>
                    </div>      
                </form> 
                
                {/* <div className='mt-5'>
                    <button type="submit" class="btn btn-primary text-uppercase">Edit Profil</button>
                </div>   */}
            </div>
        </div>
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        </>
    )
}