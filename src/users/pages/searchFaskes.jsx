import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetAllFaskes, GetSearchFaskes } from "../../services/services";
import FaskesList from "../components/faskesList";
import Header from "../components/header";
import SearchBarFaskes from "../components/searchBarFaskes";

export default function SearchFaskes() {
    
    const [faskesList, getFaskesList] = useState([])
    
    const {state} = useLocation()
    const [nama, setNama] = useState(state)

    const SetName = (name) => {
        console.log("masuk")
        console.log(name)
        // setNama(name)
        GetSearch(name)
    }
    const GetFaskes = async () => {
        const value = await GetAllFaskes()

        if (value.status === "success") {
            getFaskesList(value.response)
        }
    }

    const GetSearch = async (nama) => {
        console.log(nama)
        // setNama(nama)
        const value = await GetSearchFaskes(nama)

        if (value.status === "success") {
            console.log(value)
            getFaskesList(value.response)
            
        }
    }

    useEffect(() => {
        if (state === null) {
            GetFaskes()
        } else {
            GetSearch(nama)
        }
        
    }, [])
    
    console.log(faskesList)

    return (
        <>
        <Header/>
        <SearchBarFaskes switchPage={false} SetName={SetName}/>
        {faskesList?.map((faskes) => 
            <FaskesList key={faskes.id} useButton={true} faskes={faskes}/>
        )}
        {/* <FaskesList/>
        <FaskesList/> */}
        </>
    )
}