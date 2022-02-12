
export default function VaccineList(props) {
    

    console.log(props)
    return (
        <div>
        <div className="container-fluid mt-2 py-1 card">
            <div className="row">
                <div className="col-md-3 text-end">
                    <p className="mb-1"><span className="fw-bold">Tanggal</span> {props.vaksin.jadwal}</p>
                    <p className="mb-1"><span className="fw-bold">Jam</span> {props.vaksin.waktu}</p>
                </div>
                <div className="col-md-3 align-self-center text-center">
                    <p>Vaksin <span>{props.vaksin.jenisvaksin}</span></p>
                </div>
                <div className="col-md-3">
                    <p className="mb-1">Kuota: <span>{props.vaksin.stokvaksin}</span></p>
                    <p className="mb-1">Sisa Kuota: 10</p>
                </div>
                <div className="col-md-2 d-grid align-self-center text-center">
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
        </div>
    )
}