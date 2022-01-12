import axios from 'axios'
import { useState } from 'react/cjs/react.development'
import login_img from '../../assets/vaccine-one.png'

export default function Login() {
    
    /* Base data login for user */
    const baseUserLogin = {
        email: "",
        password: ""
    }

    /* useState for Login user */
    const [user, setUser] = useState(baseUserLogin)
    const [getError, setError] = useState("")

    /* Login function => validate data to server */
    const login = async (e) => {
        e.preventDefault()

        var config = {
            method: 'post',
            url: 'http://localhost:8000/user/login',
            data : user
        };

        await axios(config)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {

                const status = error.response.status;

                if (status === 500) {
                    setError("Data yang Anda masukan salah!")
                }

                console.error('There was an error!', error);
            });
    }

    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5 p-0'>
                    <img src={login_img} className='img-fluid' alt="vaccine-login" />
                </div>
                <div className='col-md-5 my-auto mx-auto'>
                    <div className='mx-5 px-5 py-3 card shadow-sm'>
                        <h3 className='text-center mb-3 fw-bold'>MASUK</h3>
                        <form onSubmit={login}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Masukan email'
                                value={user.email} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
                            </div>
                            <div class="mb-1">
                                <label for="exampleInputPassword1" class="form-label">Kata sandi</label>
                                <input name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder='Masukan kata sandi'
                                value={user.password} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
                            </div>
                            <small className="text-danger">{getError}</small><br/>
                            <a href='#' className='mb-3'>Lupa kata sandi?</a>
                            <div className='text-center'>
                                <button type="submit" class="btn btn-primary text-uppercase">Masuk</button>
                            </div>       
                        </form>   
                    </div>
                    <h6 className='text-center m-5'>Belum punya akun? <a href='#'>Buat akun</a></h6>
                </div>
                
                
            </div>
            

        </div>
        
        </>
    )
}