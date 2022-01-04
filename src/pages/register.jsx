import { useState } from 'react';
import login_img from '../assets/vaccine-one.png'

export default function Register() {
    
    /* Validation error */
    const baseError = {
        fullName: "",
        identityNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    /* useState */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [identityNumber, setIdentityNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /* Validation useState */
    const [err, setErr] = useState(baseError)
    const regexName = /^[A-Za-z ]*$/;
    const regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexNumber = /^\d+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let errName =  err.fullName;
        let errIdentity = err.identityNumber;
        let errMail = err.email;
        let errPassword = err.password;
        let errConfirmPassword = err.confirmPassword

        if (name === "fullName") {
            if(value === "") {
                errName = "Nama lengkap tidak boleh kosong!"
            } else if (regexName.test(value)) {
                errName = ""
            } else {
                errName = "Nama lengkap hanya terdiri dari huruf!"
            }
            setErr({...err, [name]: errName})
            setFullName(value)
        }

        if (name === "identityNumber") {
            if (value === "") {
                errIdentity = "NIK tidak dapat kosong!"
            } else if (regexNumber.test(value)) {
                errIdentity = ""
            } else {
                errIdentity = "NIK hanya terdiri dari angka!"
            }

            setErr({...err, [name]: errIdentity})
            setIdentityNumber(value)
        }

        if (name === "email"){
            if (value === "") {
                errMail = "Email tidak dapat kosong!"
            } else if (!(regexMail.test(value))) {
                errMail = "Masukan email dengan benar!"
            } else if (regexMail.test(value)) {
                errMail = ""
            }

            setErr({...err, [name]: errMail})
            setEmail(value)
        }

        if (name === "password") {
            if (value === "") {
                errPassword = "Password tidak dapat kosong!"
            } else if (regexPassword.test(value)) {
                errPassword = ""
            } else if (!(regexPassword.test(value))) {
                errPassword = "Password minimal 8 huruf terdiri dari angka dan huruf!"
            }

            setErr({...err, [name]: errPassword})
            setPassword(value)
        }

        if (name === "confirmPassword") {
            if (value !== password ) {
                errConfirmPassword = "Konfirmasi kata sandi yang Anda masukkan salah!"
            } else if (value === password) {
                errConfirmPassword = ""
            }

            setErr({...err, [name]: errConfirmPassword})
            setConfirmPassword(value)
        }
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
                        <h3 className='text-center mb-3 fw-bold'>BUAT AKUN</h3>
                        <form>
                            <div class="mb-1">
                                <label for="fullName" class="form-label">Nama lengkap</label>
                                <input name='fullName' type="text" class="form-control" id="fullName" 
                                    value={fullName} onChange={handleInput} placeholder="Nama lengkap sesuai KTP" aria-label="Name"/>
                                <small className="text-danger">{err.fullName}</small><br/>
                            </div>
                            <div class="mb-1">
                                <label for="identityNumber" class="form-label">NIK</label>
                                <input name='identityNumber' type="text" class="form-control" id="identityNumber" 
                                    value={identityNumber} onChange={handleInput} placeholder="Masukan NIK" aria-label="Number"/>
                                <small className="text-danger">{err.identityNumber}</small><br/>
                            </div>
                            <div className="mb-1">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input name='email' type="email" class="form-control" id="exampleInputEmail1" 
                                    value={email} onChange={handleInput} aria-describedby="emailHelp" placeholder='Masukan email'/>
                                <small className="text-danger">{err.email}</small><br/>
                            </div>
                            <div class="mb-1">
                                <label for="exampleInputPassword1" class="form-label">Kata sandi</label>
                                <input name='password' type="password" class="form-control" id="exampleInputPassword1" 
                                    value={password} onChange={handleInput} placeholder='Masukan kata sandi'/>
                                <small className="text-danger">{err.password}</small><br/>
                            </div>
                            <div class="mb-1">
                                <label for="exampleInputPassword1" class="form-label">Konfirmasi kata sandi</label>
                                <input name='confirmPassword' type="password" class="form-control" id="exampleInputPassword1" 
                                    value={confirmPassword} onChange={handleInput} placeholder='Konfirmasi kata sandi'/>
                                <small className="text-danger">{err.confirmPassword}</small><br/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Saya setuju dengan Syarat dan Ketentuan serta Kebijakan Privasi.</label>
                            </div>
                            <div className='text-center'>
                                <button type="submit" class="btn btn-primary text-uppercase">Buat Akun</button>
                            </div>       
                        </form>   
                    </div>
                    <h6 className='text-center m-5'>Sudah punya akun? <a href='#'>Masuk</a></h6>
                </div>
                
                
            </div>
            

        </div>
        
        </>
    )
}