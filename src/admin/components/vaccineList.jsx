
export default function VaccineList() {
    

    return (
        <div className="mx-5">
        <div className="container-fluid py-1 card">
            <div className="row">
                <div className="col-md-3 text-end">
                    <p className="mb-1"><span className="fw-bold">Tanggal</span> 12-21-2021</p>
                    <p className="mb-1"><span className="fw-bold">Jam</span> 08.00-12.00</p>
                </div>
                <div className="col-md-3 align-self-center text-center">
                    <p>Vaksin Sinovac</p>
                </div>
                <div className="col-md-3">
                    <p className="mb-1">Kuota: 100</p>
                    <p className="mb-1">Sisa Kuota: 10</p>
                </div>
                <div className="col-md-1 align-self-center text-center">
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
        </div>
    )
}