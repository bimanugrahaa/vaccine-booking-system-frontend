import noImage from "../../assets/no_image.png"

export default function NewsList(props) {
    const {data} = props
    
    return (
        <>
            <div className="col">
                <div className="card h-100 shadow">
                    <img className="card-img-top img-head mb-2" src={data.image_url === null? noImage : data.image_url} alt="img" />
                    <a style={{color:"black"}} href={data.link} className="card-body text-decoration-none">
                        <p className="card-title text-title">{data.title}</p>
                    </a>
                    <div className="card-footer">
                        <small className="text-muted">Created on : {data.pubDate}</small>
                    </div>
                </div>
            </div>
        </>
    )
}