import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/base.css"

export default function SearchBarFaskes(props) {
    
    const [search, setSearch] = useState("")
    const [searchCond, setSearchCond] = useState(false)
    const navigate = useNavigate()

    const goSearch = () => {
        navigate('/faskes', {state: search})
    }

    const Searching = () => {
        
        setSearchCond(true)
        
    }

    useEffect(() => {
        if (searchCond) {
            console.log("masuk")
            props.SetName(search)
            setSearchCond(false)
        }
    },[searchCond])

    return (
        <>
        <div className='card shadow-sm bg-gradient border-0 text-center p-3 m-5'>
            <h3 className='text-uppercase fw-bold mb-3'>Cari fasilitas kesehatan!</h3>
            <input name="search" className='form-control' type="text" placeholder='Cari Fasilitas Kesehatan'
                value={search} onChange={(e) => setSearch(e.target.value)}/>
            {props.switchPage ?
            <div className="row">
                <button onClick={() => goSearch()} className='btn btn-primary primary-color text-uppercase m-auto mt-3'>Cari</button>
            </div>
            :
            <div className="row">
                <button onClick={Searching} className='btn btn-primary primary-color text-uppercase m-auto mt-3'>Cari</button>
            </div>
            }
            {/* <button className='btn btn-primary primary-color text-uppercase m-auto mt-3'>Cari</button> */}
        </div>
        </>
    )
}