import logo from '../../assets/Logo.png'
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addMySession } from '../../store/Data';
import IsAuth from '../../utils/isAuth.js'
import { useEffect } from 'react';

export default function Login() {

    const mySession = useSelector((state) => state.mySession.mySession)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    /* Base data login for admin */
    const baseAdmin = {
        username: "",
        password: ""
    }

    /* useState for Login admin */
    const [admin, setAdmin] = useState(baseAdmin)
    const [getError, setError] = useState("")
    const [auth, getAuth] = useState(false)

    /* Check if user is logged in */
    const authCheck = () => {
        getAuth(IsAuth(mySession))

        if (auth) {
            navigate(`/admin/faskes`)
        }
    }

    /* Login function => validate data to server */
    const login = async (e) => {
        e.preventDefault()

        var config = {
            method: 'post',
            url: 'http://localhost:8000/admin/login',
            data : admin
        };

        await axios(config)
            .then(response => {
                console.log(response)
                const send = addMySession(response)
                dispatch(send)
                navigate(`/admin/faskes`)
            })
            .catch((error) => {

                const status = error.response.status;

                if (status === 500) {
                    setError("Data yang Anda masukan salah!")
                }

                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        authCheck()
    })

    return (
        <>
        <div className="container-fluid m-3 p-0">
            <div className="row">
                <div className='col-md-5 p-0 img-fluid'>
                    <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo} alt='vaccine-logo'/>
                    </a>
                </div>
            </div>
            <div className='row mt-5'>
            <div className="col-md-4 col-2"></div>
            <div className="col-md-4 col-8 p-3 p-md-4 card my-5">
                <h3 className='text-center mb-3 fw-bold'>MASUK</h3>
                <form onSubmit={login}>
                    <div class="mb-3">
                        <label for="user" class="form-label">User</label>
                        <input name='username' type="text" class="form-control" id="user" aria-label="user" placeholder='User'
                            value={admin.username} onChange={(e) => setAdmin({...admin, [e.target.name]: e.target.value})}/>
                    </div>
                    <div class="mb-1">
                        <label for="exampleInputPassword1" class="form-label">Kata sandi</label>
                        <input name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder='Masukan kata sandi'
                            value={admin.password} onChange={(e) => setAdmin({...admin, [e.target.name]: e.target.value})}/>
                    </div>
                    <small className="text-danger">{getError}</small><br/>
                    <div className='text-center mt-3'>
                        <button type="submit" class="btn btn-primary text-uppercase">Masuk</button>
                    </div>  
                </form>
            </div>
            <div className="col-md-4 col-2"></div>
            </div>
        </div>
        </>
    )
}