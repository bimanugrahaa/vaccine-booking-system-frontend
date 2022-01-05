import logo from '../../assets/Logo.png'
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function Login(params) {
    
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

    const baseAdmin = {
        email: "",
        password: ""
    }

    const [admin, setAdmin] = useState(baseAdmin)

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "user") {
            // setErr({...err, [name]: err.fullName})
            setAdmin({...admin, email: value})
        }

        if (name === "password") {
            // setErr({...err, [name]: err.password})
            setAdmin({...admin, [name]: value})
        }
    }

    const login = async (e) => {
        e.preventDefault()
        console.log("admin", admin)

        var config = {
            method: 'post',
            url: 'http://localhost:8000/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(admin)
        };
        
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
        // await axios.post('http://localhost:8000/login', admin, {
        //     crossdomain: true,
        //     'Access-Control-Allow-Origin': true,
        //     'Content-Type': 'application/json' 
        // })
        //     .then(response => console.log(response))
        //     .catch(error => {
        //         console.error('There was an error!', error);
        //     });
    }

    return (
        <>
        <div className="container-fluid m-3 p-0">
            <div className="row">
                <div className='col-md-5 p-0 img-fluid'>
                    <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo}/>
                    </a>
                </div>
            </div>
            <div className='row mt-5'>
            <div className="col-md-4 col-2"></div>
            <div className="col-md-4 col-8 p-3 p-md-4 card">
                <h3 className='text-center mb-3 fw-bold'>MASUK</h3>
                <form onSubmit={login}>
                    <div class="mb-3">
                        <label for="user" class="form-label">User</label>
                        <input name='user' type="text" class="form-control" id="user" aria-label="user" placeholder='User'
                            value={admin.email} onChange={handleInput}/>
                    </div>
                    <div class="mb-1">
                        <label for="exampleInputPassword1" class="form-label">Kata sandi</label>
                        <input name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder='Masukan kata sandi'
                            value={admin.password} onChange={handleInput}/>
                    </div>
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