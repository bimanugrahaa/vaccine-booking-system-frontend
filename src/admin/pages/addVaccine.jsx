import { useEffect, useState } from 'react';
import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import 'react-next-dates/dist/style.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { TimePicker } from 'react-next-dates';
import { DateToString, LongDate } from '../../utils/dateToString';

export default function AddVaccine() {
    
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setDate] = useState(null);

    // console.log(DateToString(selectedDay))
    // console.log(LongDate(DateToString(selectedDay)))
    console.log(selectedTime)
    return (
        <>
        <div className="row">
            <div className='col-md-5 img-fluid'>
                <a href="/" className="d-flex align-items-center m-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} alt='vaccine-logo'/>
                </a>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-lg-3'>
                <Sidebar/>
            </div>
            <div className='col-lg-auto pe-5'></div>
            <div className='col-lg-8 pe-0 mt-3'>
                <i class="fas fa-chevron-left m-2"><a className='ps-3 text-decoration-none text-uppercase' href="#">Kembali</a></i>
                <div className='row'>
                    <h4 className='fw-bold text-uppercase text-center p-0'>Fasilitas Kesehatan Vaksinasi Covid-19</h4>
                </div>
                <div className='row mt-3'>
                    <div className="col-md-7">
                        <div className="row">
                            <h3 className='fw-bold'>Rumah Sakit Ceria</h3>
                        </div>
                        <div className="row">
                            <p className="mb-3">Kelurahan A, Kecamatan B, Kota C, Provinsi D</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <h5 className='fw-bold'>Jadwal Vaksin</h5>
                </div>
                <div className='row mt-3'>
                <form>
                    <div className='row'>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="name" className="form-label">Jenis vaksin</label>
                            <input value={""} onChange={""} name='name' type="text" className="form-control" id="name" aria-label="name" placeholder='Jenis vaksin'/>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="stock" className="form-label">Stok vaksin</label>
                            <input value={""} onChange={""} name='stock' type="text" className="form-control" id="stock" aria-label="stock" placeholder='Stok vaksin'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-5 mb-3">
                            
                            <label htmlFor="date" className="form-label">Tanggal pelaksanaan</label>
                            <div className='row'>
                                <DatePicker inputClassName="form-control bg-white w-100 fs-6 text-start rounded" 
                                    value={selectedDay} onChange={setSelectedDay} inputPlaceholder="Tanggal pelaksanaan" 
                                    calendarClassName="responsive-calendar"
                                    shouldHighlightWeekends />
                            </div>
                            {/* <input value={""} onChange={""} name='date' type="date" className="form-control" id="date" aria-label="date" placeholder='Tanggal pelaksanaan'/> */}
                        </div>
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="time" className="form-label">Jam pelaksanaan</label>
                            <div className='row'>
                                <div className='col-lg-5'>
                                <TimePicker date={selectedTime} onChange={setDate} portalContainer={document.body}>
                                    {({inputProps}) => <input className='form-control rounded' {...inputProps} />}
                                </TimePicker>
                                </div>
                                <div className='col-lg-auto d-flex align-items-center'>—</div>
                                <div className='col-lg-5'>
                                <TimePicker date={selectedTime} onChange={setDate} portalContainer={document.body}>
                                    {({inputProps}) => <input className='form-control rounded' {...inputProps} />}
                                </TimePicker>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    
                    {/* <small className="text-danger">{getError}</small><br/> */}
                    <div className='mt-3'>
                        <button type="submit" className="btn btn-primary text-uppercase">Simpan</button>
                    </div>  
                </form>
                </div>
            </div>
        </div>
        </>
    )
}