import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardStatusVaccine from "../components/cardStatusVaccine";
import CardVaccineSchedule from "../components/cardVaccineSchedule";
import Header from "../components/header";

export default function StatusVaccine(state) {

    const mySession = useSelector((state) => state.mySession.mySession)

    console.log(mySession)
    console.log("state", state)
    const location = useLocation();
    const { user = 'nama' } = location.state || {}
    console.log(location)
    console.log("user", user)
    return (
        <>
        <Header/>
        <div className="mx-5 px-5">
            <CardStatusVaccine/>
        </div>
        <div className="mx-5 px-5">
            <CardVaccineSchedule/>
        </div>
        
        </>
    )
}