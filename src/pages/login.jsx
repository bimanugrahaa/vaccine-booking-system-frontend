import login_img from '../assets/vaccine-one.png'

export default function Login() {
    
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5 p-0'>
                    <img src={login_img} className='img-fluid' alt="vaccine-login" />
                </div>
                <div className='col-md-6 my-auto p-5 card shadow-sm'>
                    <h3 className='text-center mb-3 fw-bold'>MASUK</h3>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Masukan email'/>
                        </div>
                        <div class="mb-1">
                            <label for="exampleInputPassword1" class="form-label">Kata sandi</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Masukan kata sandi'/>
                        </div>
                        <h6 className='mb-3'>Lupa kata sandi?</h6>
                        <div className='text-center'>
                        <button type="submit" class="btn btn-primary text-uppercase">Masuk</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            

        </div>
        
        </>
    )
}