import { useEffect, useState } from "react";
import News from "../../services/news";
import NewsList from "../components/newsList";

export default function NewsPage() {
    
    const [data, setData] = useState([])

    const getNews = async() => {
        const value = await News()

        setData(value.response)
    }

    useEffect(() => {
        getNews()
    }, [])

    console.log(data)

    return (
        <>
        <div className="container-fluid">
            <h1 className="text-center my-5 font-monospace fw-bold">Berita Vaksinasi Covid-19</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mx-5 my-5">
                <div className="col">
                        {data?.map((newsData) =>
                        <NewsList data={newsData}/>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}