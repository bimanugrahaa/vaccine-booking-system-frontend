
export default function CardTicketTwo(props) {
    const {status, data} = props
    
    return (
        <>
        <div className="container-fluid mx-auto mb-3">
            <div className="card border-3 p-4">
                <h6 className="text-uppercase">Status Vaksin</h6>
                {status === "Sudah Vaksin" || status === "Terdaftar"? 
                    <>
                    <h5 className="my-3 fw-bold text-success">Vaksin Kedua</h5>
                    </>
                :
                    <>
                    <h5 className="my-3 fw-bold text-secondary">Vaksin kedua</h5>
                    </>
                }
                {status === "Expired"?
                <>
                    <h6 className="text-danger fw-bold">Tiket vaksin expired. Silakan melakukan pendaftaran ulang</h6>
                </>
                :
                ""
                }
                <div className="row">
                    <div className="col-6">
                        <h6 className="mt-2">Tanggal</h6>
                        <p className="fw-bold">{data?.jadwal !== ""? data?.jadwal : "-"}</p>

                        <h6 className="mt-2">Lokasi Faskes</h6>
                        <p className="fw-bold">{data?.faskes?.nama !== ""? data?.faskes?.nama : "-"}</p>
                    </div>
                    <div className="col-6">
                        <h6 className="mt-2">Jam</h6>
                        <p className="fw-bold">{data?.waktu !== ""? data?.waktu : "-"}</p>

                        <h6 className="mt-2">Jenis Vaksin</h6>
                        <p className="fw-bold">{data?.jenisvaksin !== ""? data?.jenisvaksin : "-"}</p>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}