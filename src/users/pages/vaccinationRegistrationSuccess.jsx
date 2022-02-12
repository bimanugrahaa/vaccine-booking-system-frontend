import Header from "../components/header";

export default function VaccinationRegistrationSuccess() {
    
    return (
        <>
        <Header/>
        <div className="row">
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <h4 className="text-center text-uppercase fw-bold m-5 text-success">Pendaftaran Vaksin Berhasil!</h4>
            <div className="card border-3 p-4">
                <h5 className="text-uppercase fw-bold">Penerima Vaksin</h5>
                <h5 className="fw-bold border-bottom pb-4 border-2">Andi Pratama</h5>

                <h5 className="mt-2 text-uppercase">Lokasi dan Jadwal Vaksinasi</h5>
                <p className="fw-bold">Vaksin Pertama</p>

                <div className="row">
                    <div className="col-6">
                        <h6 className="mt-2">Jenis Kelamin</h6>
                        <p className="fw-bold">Pria</p>

                        <h6 className="mt-2">Tanggal Lahir</h6>
                        <p className="fw-bold">1 Januari 1998</p>
                    </div>
                    <div className="col-6">
                        <h6 className="mt-2">No. Handphone</h6>
                        <p className="fw-bold">089981457699</p>

                        <h6 className="mt-2">Alamat</h6>
                        <p className="fw-bold">Jl. Dukuh Blok 2B Swasembada Jakarta Utara</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <button type="submit" class="btn btn-primary text-uppercase">Kembali ke halaman awal</button>
            </div>  
        </div>  
        </div>
        </>
    )
}