import { Rating } from "react-simple-star-rating";
import FaskesList from "../components/faskesList";
import Header from "../components/header";
import RatingReview from "../components/ratingReview";
import ReviewList from "../components/reviewList";

export default function FaskesReview() {
    
    return (
        <>
        <Header/>
        <h5 className="fw-bold text-uppercase text-center mt-5">Fasilitas kesehatan</h5>
        <div className="row">
            <div className="col-lg-8 p-0">
                {/* <FaskesList useIndex={false} useButton={false}/> */}
            </div>
            <div className="col-lg-3 p-0 me-2">
                <RatingReview/>
            </div>
            
        </div>
        <div className="row m-0">
            <div className="col-lg-7">
                <div className="row container-fluid">
                    <div className="col-md-1"></div>
                    <h5 className="mt-4 fw-bold col-md-7 p-0">Semua ulasan</h5>
                </div>
                <ReviewList/>
                <ReviewList/>
            </div>
        </div>
        

        </>
    )
}