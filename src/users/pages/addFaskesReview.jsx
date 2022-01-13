import Header from "../components/header";
import review_img from '../../assets/review-img.png'
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import ModalAuth from "../components/modalAuth";


export default function AddFaskesReview() {
    
    const [ratingValue, setRatingValue] = useState(0)
    const [show, setShow] = useState(false);

    const handleRating = (rate) => {
        setRatingValue(rate)
    }

    console.log(ratingValue)
    return (
        <>
        <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4 p-0'>
                    <img src={review_img} className='img-fluid' alt="faskes-review" />
                </div>
                <div className='col-md-5 my-3 mx-auto'>
                    <h5 className="fw-bold text-uppercase text-center my-5">Fasilitas kesehatan</h5>
                    <div className="row">
                        <h5 className="fw-bold mt-5">Rumah Sakit Ceria</h5>
                    </div>
                    <div className="row mb-5">
                        <p className="mb-2">{`Kelurahan A, Kecamatan B, Kota C, Provinsi D`}</p>
                    </div>
                    <div className="row mb-5">
                        <h5 className="fw-bold">Bagaimana penilaian Anda secara keseluruhan?</h5>
                        <Rating
                            transition
                            onClick={handleRating}
                            ratingValue={ratingValue}
                            allowHalfIcon
                            />
                    </div>
                    <div className="row mb-3">
                        <h5 className="fw-bold">Berikan ulasanmu mengenai fasilitas kesehatan ini!</h5>
                        <textarea name='review' className="form-control ms-2" id="review" rows="5"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-auto">
                            <button className="btn btn-outline-primary">Batal</button>
                        </div>
                        <div className="col-md-auto">
                        <button type="button" class="btn btn-primary" onClick={() => setShow(!show)} data-bs-toggle="modal" data-bs-target="#exampleModal">Kirim</button>
                        </div>
                    </div>

                </div>                                
            </div>
        </div>
        </>
    )
}