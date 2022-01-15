import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useDispatch, useSelector } from 'react-redux';
import { addMySession } from '../../store/Data';
import '../css/base.css'
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export default function Login() {
    
    const mySession = useSelector((state) => state.mySession.mySession)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const authChecker = () => {
        const decoded = jwt_decode(mySession.token); 
        if (mySession.token !== "" && decoded.exp * 1000 > Date.now()) {
            navigate(`/`)
        }

        // const decoded = jwt_decode(mySession.token); 
        console.log(decoded);
        console.log(Date.now())
    }

    

    useEffect(() => {
        authChecker()
    }, [])
    
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
                const send = addMySession(response)
                dispatch(send)
                navigate(`/`)
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
                <div className='col-md-5 p-0 side-img'></div>
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
                            <a href='#' className='mb-3 text-decoration-none'>Lupa kata sandi?</a>
                            <div className='text-center mt-3'>
                                <button type="submit" class="btn btn-primary text-uppercase">Masuk</button>
                            </div>       
                        </form>   
                    </div>
                    <h6 className='text-center m-5'>Belum punya akun? <Link to="/daftar" className="text-decoration-none">Buat akun</Link></h6>
                </div>
                
                
            </div>
            

        </div>
        
        </>
    )
}