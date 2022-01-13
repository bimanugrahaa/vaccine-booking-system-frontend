import axios from "axios";
import { useEffect, useState } from "react";
import FaskesList from "../components/faskesList";
import Header from "../components/header";
import SearchBarFaskes from "../components/searchBarFaskes";

export default function SearchFaskes() {
    
    const [faskesList, getFaskesList] = useState([])

    const getFaskes = () => {
        var config = {
            method: 'get',
            url: 'http://localhost:8000/faskes/semua'
        };
    
        axios(config)
            .then(response => {
                console.log(response)
                getFaskesList(response)
            })
            .catch((error) => {
    
                const status = error.response.status;
    
                if (status === 500) {
                }
    
                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        getFaskes()
    }, [])
    
    console.log(faskesList)

    return (
        <>
        <Header/>
        <SearchBarFaskes/>
        {faskesList?.data?.data?.map((faskes) => 
            <FaskesList useButton={true} faskes={faskes}/>
        )}
        {/* <FaskesList/>
        <FaskesList/> */}
        </>
    )
}