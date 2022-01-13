import { useNavigate } from "react-router-dom";

export default function FaskesList(props) {
    
    const navigate = useNavigate();
    const action = (ID, name) => {
        navigate(`/${ID}/${name}`)
    }

    return (
        <>
        <div className="container-fluid row mt-3">
            <div className="col-md-1 text-end">
                {props.useIndex ? 
                <h5 className="fw-bold">1.</h5>
                :
                ""
                }
            </div>
            <div className="col-md-7 p-2 card shadow-sm">
                <div className="row">
                    <h5 className="fw-bold">{props.faskes.nama}</h5>
                </div>
                <div className="row">
                    <p className="mb-2">{`${props.faskes.alamat}, Kel. ${props.faskes.kelurahan}, Kec. ${props.faskes.kecamatan}, Kota ${props.faskes.kota}, Prov. ${props.faskes.provinsi}`}</p>
                </div>
                {props.useButton ?
                <div className="row">
                    <button className="btn btn-primary col-auto mx-3">Cek Vaksin</button>
                    <button className="btn btn-primary col-auto" onClick={() => action(props.faskes.ID, props.faskes.nama)}>Ulasan</button>
                </div>
                :
                ""
                }
            </div>
        </div>
        </>
    )
}