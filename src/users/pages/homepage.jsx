import Header from '../components/header';
import Hero from '../components/hero';
import about from '../../assets/about-img.png'
import SearchBarFaskes from '../components/searchBarFaskes';
import { useState } from 'react';
import VaccineType from '../components/vaccineType';
import img from '../../assets/home-img.jpg'
import img_two from '../../assets/home-2-img.jpg'
import '../css/homepage.css'
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    
    const navigate = useNavigate()
    const goSearch = () => {
        navigate('/faskes', {state: "search"})
    }

    return (
        <>
        <Header/>
        <Hero goSearch={goSearch}/>
        <SearchBarFaskes switchPage={true}/>
        <div className='row p-3 m-5'>
            <div className='ps-xl-5 ms-xl-5 col-md-5'>
                <h3 className='ms-md-5 text-uppercase text-center fw-bold font-signika'>Apa itu Vaksinasi?</h3>
                <div className='row ms-md-5'>
                    <p className='col-md-12 mt-3 font-home'><span className='fw-bold text-uppercase'>Vaksinasi</span> adalah pemberian Vaksin dalam rangka menimbulkan atau meningkatkan kekebalan 
                        seseorang secara aktif terhadap suatu penyakit, sehingga apabila suatu saat terpajan dengan 
                        penyakit tersebut tidak akan sakit atau hanya mengalami sakit ringan dan tidak menjadi sumber penularan.
                    </p>
                    <p className='font-home'>
                        Pelayanan vaksinasi COVID-19 dilaksanakan di Fasilitas Pelayanan Kesehatan milik Pemerintah Pusat, 
                        Pemerintah Daerah Provinsi, Pemerintah Daerah Kabupaten/Kota atau milik masyarakat/swasta yang memenuhi 
                        persyaratan.
                    </p>
                    <span className='mt-3 fs-6'>Sumber: https://covid19.go.id/tentang-vaksin-covid19</span>
                </div>
            </div>
            <div className='col-md-5 m-5 m-md-auto text-center'>
                <img className='img-fluid rounded m-auto home-img' src={img_two} alt="" />
            </div>
        </div>

        <div className='row p-5 m-5'>
                <VaccineType/>
        </div>        
        
        <div className='row p-5 m-5'>
            <div className='ps-xl-5 ms-xl-5 col-md-5'>
                <h3 className='ms-md-5 text-uppercase text-center fw-bold font-signika'>Tentang</h3>
                <div className='row ms-md-5'>
                    <p className='col-md-12 mt-3 font-home' id='about'>
                        <span className='fw-bold'>AyoVaksin!</span> merupakan sebuah website 
                        yang berfungsi untuk melakukan booking vaksin.
                    </p>
                    <p className='font-home'>
                        AyoVaksin! memiliki berbagai fitur seperti, melakukan pencarian fasilitas kesehatan, 
                        pengecekan kuota vaksin setiap fasilitas kesehatan, hingga dapat melakukan pendaftaran vaksin 
                        secara mudah dan cepat. Yuk daftar melalui AyoVaksin!
                    </p>
                </div>
            </div>
            <div className='col-md-5 m-5 m-md-auto text-center'>
                <img className='img-fluid shadow rounded m-auto home-img' src={about} alt="" />
            </div>
        </div>

        <footer class="footer mt-5 py-3 primary-color">
            <div class="container text-center">
                <span class="font-signika">AyoVaksin! Team - © Copyright 2021.</span>
            </div>
        </footer>
        </>
    )
}