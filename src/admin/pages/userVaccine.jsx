import { useEffect, useState } from "react";
import { GetAllRequestVaksin } from "../../services/services";
import UsersList from "../components/usersList";
import VaccineList from "../components/vaccineList";

export default function UserVaccine() {
    
    /* Get current url and ID */
    const urlNow = window.location.pathname
    const uriSplit = urlNow.split('/')
    const ID = uriSplit[3]

    const [requestVaksin, getAllRequestVaksin] = useState([])
    const GetRequestVaksin = async() => {
        const value = await GetAllRequestVaksin()

        getAllRequestVaksin(value.response)

        console.log("value", value)
    }

    useEffect(() => {
        GetRequestVaksin()
    }, [])

    console.log(ID)
    return (
        <>
        <div className='col-xl-8 mt-3'>
                <div className='row mb-3'>
                    <h4 className='fw-bold text-uppercase text-center p-0'>Daftar Vaksinasi Covid-19</h4>
                </div>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Faskes</th>
                    <th scope="col">Tanggal Vaksin</th>
                    <th scope="col">Jam</th>
                    <th scope="col">Vaksin</th>
                    <th scope="col">Dosis</th>
                    </tr>
                </thead>
                <tbody>
                    {ID === "one"?
                        requestVaksin?.data?.map((req) =>
                            <UsersList data={req} vaccine={ID}/>
                        )
                    :
                        requestVaksin?.data?.map((req) =>
                            {if (req.status_dua !== "") {
                                return <UsersList data={req} vaccine={ID}/>
                            }}
                        ) 
                }
                </tbody>
                </table>
            </div>
        </>
    )
}