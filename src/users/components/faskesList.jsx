export default function FaskesList() {
    
    return (
        <>
        <div className="container-fluid row mt-3">
            <div className="col-md-1 text-end">
                <h5 className="fw-bold">1.</h5>
            </div>
            <div className="col-md-7">
                <div className="row">
                    <h5 className="fw-bold">Rumah Sakit Ceria</h5>
                </div>
                <div className="row">
                    <p className="mb-2">Kelurahan A, Kecamatan B, Kota C, Provinsi D</p>
                </div>
                <div className="row">
                    <button className="btn btn-primary col-auto mx-3">Cek Vaksin</button>
                    <button className="btn btn-primary col-auto">Ulasan</button>
                </div>
            </div>
        </div>
        </>
    )
}