import img from '../../assets/vaccine-img.json'
import '../css/vaccineType.css'

export default function VaccineType() {
    
    return (
        <>
        <div class="container p-sm-0">
            <h3 className='text-center font-signika fw-bold text-uppercase my-4'>Apa saja jenis Vaksin?</h3>
            <div class="row mx-sm-5 my-5">
            {img.map((i) => 
                <div className='card shadow-sm item mx-lg-2 mx-md-1 p-1 col-md my-2 col-sm-12'>
                    <img src={i.url} alt={i.name} />
                </div>
            )}
            </div>
        </div>
        </>
    )
}