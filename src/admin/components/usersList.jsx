import { useState } from "react"
import { useSelector } from "react-redux"
import { EditRequestVaksinDua, EditRequestVaksinSatu } from "../../services/services"

export default function UsersList(props) {
    const mySession = useSelector((state) => state.mySession.mySession)
 
    const {data, vaccine} = props
    const baseData = {
        nama: data.nama,
        status: "",
        faskes: "",
        tanggal: "",
        jam: "",
        vaksin: "",
        dosis: ""
    }
    const [status, setStatus] = useState("")

    if (vaccine === "one") {
        baseData.status = data.status_satu
        baseData.faskes = data.vaksin_satu.faskes.nama
        baseData.tanggal = data.vaksin_satu.jadwal
        baseData.jam = data.vaksin_satu.waktu
        baseData.vaksin = data.vaksin_satu.jenisvaksin
        baseData.dosis = "Dosis 1"
    }

    if (vaccine === "two" && data.status_dua !== "") {
        baseData.status = data.status_dua
        baseData.faskes = data.vaksin_dua.faskes.nama
        baseData.tanggal = data.vaksin_dua.jadwal
        baseData.jam = data.vaksin_dua.waktu
        baseData.vaksin = data.vaksin_dua.jenisvaksin
        baseData.dosis = "Dosis 2"
    }

    const changeStatus = async(e) => {
        
        setStatus(e.target.value)

        console.log("e.target.value", e.target.value)

        if (vaccine === "one") {
            const vaccineOne = {
                id: data.id,
                status_satu: e.target.value
            }
            console.log(mySession)
            const value = await EditRequestVaksinSatu(mySession.data.data, vaccineOne)
        }

        if (vaccine === "two") {
            const vaccineTwo = {
                id: data.id,
                status_dua: e.target.value
            }
            
            const value = await EditRequestVaksinDua(mySession.data.data, vaccineTwo)
        }
        
    }
    
    return (
        <>
        {/* <div className="container-fluid">
            <div className="row">
                <select class="form-select form-select-sm w-auto h-50 col-md-2" aria-label=".form-select-sm example">
                    <option selected disabled>{baseData.status}</option>
                    <option value="1">Sudah vaksin</option>
                    <option value="2">Expired</option>
                </select>
                <div className="col-md-2">
                    {baseData.nama}
                </div>
                <div className="col-md-2">
                    {baseData.faskes}
                </div>
                <div className="col-md-2">
                    {baseData.tanggal}
                </div>
                <div className="col-md-2">
                    {baseData.jam}
                </div>
                <div className="col-md-1">
                    {baseData.vaksin}
                </div>
                <div className="col-md-1">
                    {baseData.dosis}
                </div>
            </div>
        </div> */}
        {/* <table class="table">
        <tbody> */}
            <tr>
            <th scope="row">
                <select onChange={(e) => {
                        changeStatus(e)}} class="form-select form-select-sm w-auto h-50 col-md-2" aria-label=".form-select-sm example">
                    <option selected disabled>{baseData.status}</option>
                    <option value="Terdaftar">Terdaftar</option>
                    <option value="Sudah Vaksin">Sudah Vaksin</option>
                    <option value="Expired">Expired</option>
                </select>
            </th>
            <td>{baseData.nama}</td>
            <td>{baseData.faskes}</td>
            <td>{baseData.tanggal}</td>
            <td>{baseData.jam}</td>
            <td>{baseData.vaksin}</td>
            <td>{baseData.dosis}</td>
            </tr>
            {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr> */}
        {/* </tbody>
        </table> */}
        </>
    )
}