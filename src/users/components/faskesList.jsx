import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { GetFaskesByID } from "../../services/services";
import ModalVaccine from "./modalVaccine";

export default function FaskesList(props) {
    
    // const navigate = useNavigate();
    // const action = (ID, name) => {
    //     navigate(`/${ID}/${name}`)
    // }
    const [show, setShow] = useState(false);
    const [data, setData] = useState("")
    const [detail, getDetailFaskes] = useState({})

    const GetFaskesDetail = async(id) => {
        const value = await GetFaskesByID(id)

        if (value.status === "success") {
            getDetailFaskes(value.response)
        }
    }

    useEffect(() => {
        GetFaskesDetail(props.faskes.id)
    }, [])

    console.log("id props", props)
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
                    <button className="btn btn-primary col-auto mx-3" onClick={() => setShow(!show)} data-bs-toggle="modal" data-bs-target={`#A${props.faskes.id}`}>Cek Vaksin</button>
                </div>
                :
                ""
                }
                {!show ? <ModalVaccine detail={detail}/> : "" }
            </div>
        </div>
        </>
    )
}