
export default function UsersList() {
    
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <select class="form-select form-select-sm w-auto h-50 col-md-2" aria-label=".form-select-sm example">
                    <option selected disabled>Status</option>
                    <option value="1">Sudah vaksin</option>
                    <option value="2">Expired</option>
                </select>
                <div className="col-md-2">
                    Andi Pratama
                </div>
                <div className="col-md-2">
                    Rumah Sakit Ceria
                </div>
                <div className="col-md-2">
                    20 Desember 2021
                </div>
                <div className="col-md-2">
                    08.00 - 10.00
                </div>
                <div className="col-md-1">
                    Sinovac
                </div>
                <div className="col-md-1">
                    Dosis 1
                </div>
            </div>
        </div>
        </>
    )
}