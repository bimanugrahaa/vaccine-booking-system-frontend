import { Rating } from "react-simple-star-rating";

export default function RatingReview() {
    
    return (
        <>
        <div class="mx-auto text-center d-flex flex-column flex-shrink-0 p-3 card shadow-sm mt-3" style={{"width": "250px"}}>
            <h5 className="fw-bold">180 ULASAN</h5>
            <h6 className="fw-bold">Rating <span>4.7</span>/5</h6>
            <Rating
                size={18}
                initialValue={4.7}
                readonly={true}
            />
        </div>
        <div className="text-center mt-3">
            <button className="btn btn-primary text-center">Tulis ulasan</button>
        </div>
        
        </>
    )
}