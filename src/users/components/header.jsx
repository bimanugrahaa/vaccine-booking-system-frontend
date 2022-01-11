import logo from "../../assets/Logo.png"
import "../css/header.css"

export default function Header() {
     
    return (
        <>
            <div className="container-fluid p-0">
                <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
                    <a href="/" className="d-flex align-items-center ms-3 mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo}/>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item mx-1"><a href="#" className="nav-link font-12 px-2" aria-current="page">BERANDA</a></li>
                        <li className="nav-item mx-1"><a href="#" className="nav-link font-12 px-2">TENTANG</a></li>
                        <li className="nav-item mx-1"><a href="#" className="nav-link font-12 px-2">FASKES</a></li>
                        <li className="nav-item primary-btn mx-1"><a href="#" className="nav-link font-12 text-light px-3">MASUK</a></li>
                        <li className="nav-item secondary-btn mx-1"><a href="#" className="nav-link font-12 px-3">DAFTAR</a></li>
                    </ul>
                </header>
            </div>    
        </>
    )
}