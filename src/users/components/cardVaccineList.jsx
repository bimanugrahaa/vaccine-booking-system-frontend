
export default function CardVaccineList(props) {
    
    return(
        <>
        <div className="card p-2 m-2">
            <p>Tanggal</p>
            <h5>{props?.vaksin?.jadwal}</h5>
            <div className="row">
                <div className="col-5">
                    <p>Jenis Vaksin</p>
                    <h5>{props?.vaksin?.jenisvaksin}</h5>
                </div>
                <div className="col-5">
                    <p>Stok Vaksin</p>
                    <h5>{props?.vaksin?.stokvaksin}</h5>
                </div>
            </div>
        </div>
        </>
    )
}