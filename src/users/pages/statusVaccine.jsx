import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VaccineStatus } from "../../services/services";
import { deleteMySession } from "../../store/Data";
import CardStatusVaccine from "../components/cardStatusVaccine";
import CardVaccineScheduleFailed from "../components/cardVaccineScheduleFailed";
import CardVaccineScheduleSuccess from "../components/cardVaccineScheduleSuccess";
import Header from "../components/header";

export default function StatusVaccine() {

    const mySession = useSelector((state) => state.mySession.mySession)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {state} = useLocation();
    const [status, setStatus] = useState([])

    /* Get Status function => Get data to server */
    const GetStatus = async (e) => {
        const data = {
            nama: state.nama,
            nik: parseInt(state.nik)
        }

        const value = await VaccineStatus(e, mySession, data)

        if (value.status === "success") {
            setStatus(value.response)
            
        } else if (value.status === 500) {
            const data = {
                status_dua: "",
                status_satu: "",
            }

            setStatus(data)
        } else if (value.status === 403) {
            toast.error('Your session expired, please login!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            const logout = deleteMySession()
            dispatch(logout)
            setTimeout(() => navigate(`/`), 3000);   
        }
    }

    useEffect((e) => {
        GetStatus(e)
    }, [])

    console.log(status)
    console.log(mySession)
    return (
        <>
        <Header/>
        <div className="mx-5 px-5">
            <CardStatusVaccine state={state} data={status}/>
        </div>
        {status.status_satu === "Sudah Vaksin" && status.status_dua === "Sudah Vaksin" ?
        ""
        :
        mySession.id === status.user_id ?
            (status.status_satu === "" || status.status_satu === "Expired" || status.status_dua === "" || status.status_dua === "Expired") && status.status_satu !== "Terdaftar" ?
                <div className="mx-5 px-5">
                    <CardVaccineScheduleFailed data={status}/>
                </div>
                :
                <div className="mx-5 px-5">
                    <CardVaccineScheduleSuccess data={status}/>
                </div>
        :
        status.status_satu === "" ? 
        <div className="mx-5 px-5">
            <CardVaccineScheduleFailed data={status}/>
        </div>
        :
        ""    
        }
        </>
    )
}