import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useOutletContext } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { EditUserPassword } from "../../services/services"
import { deleteMySession } from '../../store/Data';

export default function EditPassword() {
    const { data, mySession } = useOutletContext()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    /* Base data password for user */
    const basePasswordEdit = {
        id: mySession.id,
        password: data.password,
        newpassword: data.newpassword,
    }

    /* Validation error */
    const baseError = {
        password: "",
        newpassword: "",
        confirmPassword: ""
    }

    /* useState for edit password */
    const [user, setUser] = useState(basePasswordEdit)
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    
    /* Validation useState */
    const [err, setErr] = useState(baseError)
    
    /* Edit function => Edit data to server */
    const EditPassword = async (e) => {
        const value = await EditUserPassword(e, mySession, user)

        if (value.status === "success" && user !== "") {
            toast.success('Edit password berhasil!', {
                position: "bottom-center", 
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTimeout(() => navigate('/dashboard'), 3000);
            
        } else if (value.status === "error login") {
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
        } else if(value.status === 401){
            setErr({...err, ["password"]: "Data yang Anda masukan salah!"})
        }
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "newpassword") {
            if (value === "") {
                err.newpassword = "Password tidak dapat kosong!"
            } else if (regexPassword.test(value)) {
                err.newpassword = ""
            } else if (!(regexPassword.test(value))) {
                err.newpassword = "Password minimal 8 huruf terdiri dari angka dan huruf!"
            }

            setErr({...err, [name]: err.newpassword})
            setUser({...user, [name]: value})
        }

        if (name === "confirmPassword") {
            if (value !== user.newpassword ) {
                err.confirmPassword = "Konfirmasi kata sandi yang Anda masukkan salah!"
            } else if (value === user.newpassword) {
                err.confirmPassword = ""
            }

            setErr({...err, [name]: err.confirmPassword})
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

                <form onSubmit={EditPassword}>
                    <div class="mt-3 mb-3">
                        <label for="password" class="form-label">Kata sandi sekarang</label>
                        <input name='password' type="text" class="form-control" id="password" 
                            value={user.password} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} placeholder="Masukan kata sandi saat ini" aria-label="password"/>
                        <small className="text-danger">{err.password}</small><br/>
                    </div>
                    <div class="mb-3">
                        <label for="newpassword" class="form-label">Kata sandi baru</label>
                        <input name='newpassword' type="text" class="form-control" id="newpassword" 
                            value={user.newpassword} onChange={handleInput} placeholder="Masukan kata sandi baru" aria-label="Number"/>
                        <small className="text-danger">{err.newpassword}</small><br/>
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" class="form-label">Konfirmasi kata sandi</label>
                        <input name='confirmPassword' type="text" class="form-control" id="confirmPassword" 
                        value={user.confirmpassword} onChange={handleInput} placeholder='Masukan konfirmasi kata sandi baru'/>
                        <small className="text-danger">{err.confirmPassword}</small><br/>
                    </div>
                    
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