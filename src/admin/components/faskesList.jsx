import '../css/faskes.css'
export default function FaskesList(props) {
    
    return (
        <>
        {/* <div className="container-fluid row border-bottom mt-2">
            <div className="col-md-1 text-end">
                <h6>1.</h6>
            </div>
            <div className="col-md-7">
                <div className="row">
                    <h6>Rumah Sakit Ceria</h6>
                </div>
                <div className="row">
                    <p className="mb-2">Kelurahan A, Kecamatan B, Kota C, Provinsi D</p>
                </div>
            </div>
        </div> */}
        <div className="container-fluid row ps-3 mt-3">
            <div className="col-md-12 p-2 card shadow-sm cursor-pointer">
                <div className="row">
                    <h5 className="fw-bold">{props.faskes.nama}</h5>
                </div>
                <div className="row">
                    <p className="mb-2">{`${props.faskes.alamat}, Kel. ${props.faskes.kelurahan}, Kec. ${props.faskes.kecamatan}, Kota ${props.faskes.kota}, Prov. ${props.faskes.provinsi}`}</p>
                </div>
            </div>
        </div>
        </>
    )
}