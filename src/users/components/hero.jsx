import "../css/hero.css"

export default function Hero() {
    
    return (
        <>
        <div class="hero position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="fw-bold text-light hero-text">Sayangi dirimu</h1>
                <h1 class="fw-bold text-light hero-text">Sayangi sekitarmu</h1>
                <button class="btn btn-primary text-uppercase m-5" href="#">Daftar vaksinasi sekarang!</button>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        </>
    )
}