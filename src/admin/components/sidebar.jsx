
export default function Sidebar() {
    

    return (
        <>
        <div class="mx-auto d-flex flex-column flex-shrink-0 p-3 card shadow-sm" style={{"width": "280px"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                <span class="fs-4">ADMIN</span>
            </a>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                {/* <svg class="bi me-2" width="16" height="16"><use href="#home"></use></svg> */}
                <i class="fas fa-plus me-2"></i>
                Fasilitas Kesehatan
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                {/* <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg> */}
                <i className="fas fa-syringe me-2"></i>
                User Vaksin
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                {/* <svg class="bi me-2" width="16" height="16"><use href="#table"></use></svg> */}
                <i class="fas fa-rss-square me-2"></i>
                Berita Vaksin
                </a>
            </li>
            </ul>
            <hr></hr>
            <a href="#" className="ms-5 fw-bold">KELUAR</a>
        </div>
        </>
    )
}