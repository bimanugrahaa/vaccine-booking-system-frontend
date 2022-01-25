import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardStatusVaccine from "../components/cardStatusVaccine";
import CardVaccineSchedule from "../components/cardVaccineSchedule";
import Header from "../components/header";

export default function StatusVaccine() {

    const mySession = useSelector((state) => state.mySession.mySession)

    console.log(mySession)
    // console.log("state", state)
    const {state} = useLocation();
    // const { user = 'nama' } = location.state || {}
    console.log(state)
    // console.log("user", user)
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