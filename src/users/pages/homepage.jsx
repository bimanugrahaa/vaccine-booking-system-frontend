import Header from '../components/header';
import Hero from '../components/hero';
import about from '../../assets/about-img.png'
import SearchBarFaskes from '../components/searchBarFaskes';

export default function Homepage() {
    
    return (
        <>
        <Header/>
        <Hero/>
        <SearchBarFaskes/>
        <h6 className='ms-5 fw-bold'>Tentang</h6>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-3'>
                <p>AyoVaksin! merupakan sebuah website yang berguna untuk melakukan booking vaksin. 
                    AyoVaksin! dapat melakukan pencarian fasilitas kesehatan, pengecekan vaksin tiap 
                    fasilitas kesehatan, hingga melakukan pendaftaran vaksin secara mudah. Yuk daftar 
                    melalui AyoVaksin!
                </p>
            </div>
            <div className='col-lg-4'></div>
            <div className='col-lg-auto'>
                <img className='shadow rounded' src={about} alt="" />
            </div>
        </div>
        <footer class="footer mt-5 py-3 bg-light">
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
        </>
    )
}