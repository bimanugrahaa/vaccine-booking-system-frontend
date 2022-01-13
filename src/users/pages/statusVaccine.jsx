import CardStatusVaccine from "../components/cardStatusVaccine";
import CardVaccineSchedule from "../components/cardVaccineSchedule";
import Header from "../components/header";

export default function StatusVaccine() {
    
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