import axios from 'axios';
import { useState } from 'react';
import logo from '../../assets/Logo.png'
import login_img from '../../assets/vaccine-one.png'

export default function Register() {
    const axios = require('axios');

    /* Validation error */
    const baseError = {
        fullName: "",
        identityNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    /* Base data */
    const baseData = {
        fullName: "",
        identityNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    /* Validation useState */
    const [data, setData] = useState(baseData)
    const [err, setErr] = useState(baseError)

    /* Validation regex */
    const regexName = /^[A-Za-z ]*$/;
    const regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexNumber = /^\d+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


    axios.get('http://localhost:8000/users', {
        crossdomain: true
    })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "fullName") {
            if(value === "") {
                err.fullName = "Nama lengkap tidak boleh kosong!"
            } else if (regexName.test(value)) {
                err.fullName = ""
            } else {
                err.fullName = "Nama lengkap hanya terdiri dari huruf!"
            }
            setErr({...err, [name]: err.fullName})
            setData({...data, [name]: value})
        }

        if (name === "identityNumber") {
            if (value === "") {
                err.identityNumber = "NIK tidak dapat kosong!"
            } else if (regexNumber.test(value)) {
                err.identityNumber = ""
            } else {
                err.identityNumber = "NIK hanya terdiri dari angka!"
            }

            setErr({...err, [name]: err.identityNumber})
            setData({...data, [name]: value})
        }

        if (name === "email"){
            if (value === "") {
                err.email = "Email tidak dapat kosong!"
            } else if (!(regexMail.test(value))) {
                err.email = "Masukan email dengan benar!"
            } else if (regexMail.test(value)) {
                err.email = ""
            }

            setErr({...err, [name]: err.email})
            setData({...data, [name]: value})
        }

        if (name === "password") {
            if (value === "") {
                err.password = "Password tidak dapat kosong!"
            } else if (regexPassword.test(value)) {
                err.password = ""
            } else if (!(regexPassword.test(value))) {
                err.password = "Password minimal 8 huruf terdiri dari angka dan huruf!"
            }

            setErr({...err, [name]: err.password})
            setData({...data, [name]: value})
        }

        if (name === "confirmPassword") {
            if (value !== data.password ) {
                err.confirmPassword = "Konfirmasi kata sandi yang Anda masukkan salah!"
            } else if (value === data.password) {
                err.confirmPassword = ""
            }

            setErr({...err, [name]: err.confirmPassword})
            setData({...data, [name]: value})
        }
    }

    const register = (e) => {

        if (err === "") {
            console.log("Ok")
        }
    }

    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5 p-0 img-fluid' style={{backgroundImage: `url("${login_img}")`, backgroundSize:"cover"}}>
                    <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo}/>
                    </a>
                    {/* <img src={login_img} className='img-fluid' alt="vaccine-login" /> */}
                </div>
                <div className='col-md-5 my-5 mx-auto'>
                    <div className='mx-3 px-3 py-3 card shadow-sm'>
                        <h3 className='text-center mb-3 fw-bold'>BUAT AKUN</h3>
                        <form onSubmit={register}>
                            <div class="mb-1">
                                <label for="fullName" class="form-label">Nama lengkap</label>
                                <input name='fullName' type="text" class="form-control" id="fullName" 
                                    value={data.fullName} onChange={handleInput} placeholder="Nama lengkap sesuai KTP" aria-label="Name"/>
                                <small className="text-danger">{err.fullName}</small><br/>
                            </div>
                            <div class="mb-1">
                                <label for="identityNumber" class="form-label">NIK</label>
                                <input name='identityNumber' type="text" class="form-control" id="identityNumber" 
                                    value={data.identityNumber} onChange={handleInput} placeholder="Masukan NIK" aria-label="Number"/>
                                <small className="text-danger">{err.identityNumber}</small><br/>
                            </div>
                            <div className="mb-1">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input name='email' type="email" class="form-control" id="exampleInputEmail1" 
                                    value={data.email} onChange={handleInput} aria-describedby="emailHelp" placeholder='Masukan email'/>
                                <small className="text-danger">{err.email}</small><br/>
                            </div>
                            <div class="mb-1">
                                <label for="exampleInputPassword1" class="form-label">Kata sandi</label>
                                <input name='password' type="password" class="form-control" id="exampleInputPassword1" 
                                    value={data.password} onChange={handleInput} placeholder='Masukan kata sandi'/>
                                <small className="text-danger">{err.password}</small><br/>
                            </div>
                            <div class="mb-1">
                                <label for="exampleInputPassword1" class="form-label">Konfirmasi kata sandi</label>
                                <input name='confirmPassword' type="password" class="form-control" id="exampleInputPassword1" 
                                    value={data.confirmPassword} onChange={handleInput} placeholder='Konfirmasi kata sandi'/>
                                <small className="text-danger">{err.confirmPassword}</small><br/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" 
                                    onInvalid={(e) => e.target.setCustomValidity('Klik untuk menyetujui')}
                                    onInput="setCustomValidity('')" required/>
                                <label class="form-check-label" for="exampleCheck1">Saya setuju dengan Syarat dan Ketentuan serta Kebijakan Privasi.</label>
                            </div>
                            <div className='text-center'>
                                <button type="submit" class="btn btn-primary text-uppercase">Buat Akun</button>
                            </div>       
                        </form>   
                    </div>
                    <h6 className='text-center m-5 mb-0'>Sudah punya akun? <a href='#'>Masuk</a></h6>
                </div>
                
                
            </div>
            

        </div>
        
        </>
    )
}