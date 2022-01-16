import "../css/base.css"

export default function SearchBarFaskes() {
    
    return (
        <>
        <div className='card shadow-sm bg-gradient border-0 text-center p-3 m-5'>
            <h3 className='text-uppercase fw-bold mb-3'>Cari fasilitas kesehatan!</h3>
            <input className='form-control' type="text" placeholder='Rumah sakit ceria'/>
            <button className='btn btn-primary primary-color text-uppercase m-auto mt-3'>Cari</button>
        </div>
        </>
    )
}