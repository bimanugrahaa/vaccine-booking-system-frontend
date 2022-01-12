import { Rating } from "react-simple-star-rating";

export default function ReviewList() {
    
    return (
        <>
        <div className="row container-fluid mt-2">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11 card shadow-sm py-2">
                <div className="row">
                    <div className="col-auto">Andi Pratama</div>
                    <div className="col-7 p-0">
                        <Rating
                        fullClassName="d-flex align-items-center"
                        emptyClassName="d-flex align-items-center"
                        size={18}
                        initialValue={5}
                        readonly={true}
                        />
                    </div>
                </div>
                <div className="col-auto mt-2">
                    Faskesnya bagus, bersih, dan rapi. antrian saat vaksin berjalan denan baik. 
                    saya kemarin vaskin sinovac dan tidak ada efek samping apapun
                </div>
                </div>
            </div>
        </div>
        </>
    )
}