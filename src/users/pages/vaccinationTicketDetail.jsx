import { useLocation } from "react-router-dom";
import CardTicketOne from "../components/cardTicketOne";
import CardTicketTwo from "../components/cardTicketTwo";

export default function VaccinationTicketDetail() {

    const {state} = useLocation();
    console.log(state)
    return (
        <>
        {/* <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <CardTicketOne/>
            <CardTicketOne/>
        </div>  */}
        <div className="container-fluid p-2 col-md-6 mx-auto my-3">
            <div className="card border-3 p-4">
                <h5 className="border-bottom pb-4 border-2 mb-5">{state.nama}</h5>
                <CardTicketOne status={state.status_satu} data={state.vaksin_satu}/>
                <CardTicketTwo status={state.status_dua} data={state.vaksin_dua}/>
            </div>
        </div> 
        {/* <div className="mx-5 px-5"> */}
            {/* <CardTicketOne/> */}
        {/* </div> */}
        {/* <div className="mx-5 px-5"> */}
            {/* <CardTicketOne/> */}
        {/* </div> */}
        </>
    )
}