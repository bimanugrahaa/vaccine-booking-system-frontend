import { useEffect, useState } from 'react';
import logo from '../../assets/Logo.png'
import Sidebar from '../components/sidebar'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import 'react-next-dates/dist/style.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { TimePicker } from 'react-next-dates';
import { DateToString, LongDate } from '../../utils/dateToString';
import { Calendar } from '../../utils/calendar';
import { JoinTime, TimeToString } from '../../utils/timeToString';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddVaccine() {
    
    const navigate = useNavigate();

    /* Get current url and ID */
    const urlNow = window.location.pathname
    const uriSplit = urlNow.split('/')
    const ID_Faskes = uriSplit[3]

    const baseDataVaccine = {
        jenisvaksin: "",
        stokvaksin: 0,
        jadwal: "",
        waktu: "",
        faskes_id: 0,
        startTime: "",
        endTime: ""
    }

    const [dataVaccine, setDataVaccine] = useState(baseDataVaccine)
    const [faskesDetail, getFaskesDetail] = useState({})

    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTimeStart, setTimeStart] = useState(null);
    const [selectedTimeEnd, setTimeEnd] = useState(null);

    const getDetail = () => {
        var config = {
            method: 'get',
            url: `http://localhost:8000/faskes/${ID_Faskes}`
        };
    
        axios(config)
            .then(response => {
                console.log(response)
                getFaskesDetail(response.data.data)
            })
            .catch((error) => {
    
                const status = error.response.status;
    
                if (status === 500) {
                }
    
                console.error('There was an error!', error);
            });
    }

    const Submit = (e) => {
        e.preventDefault()

        const submit = {
            ...dataVaccine
        }

        const dateToString = DateToString(selectedDay)

        submit.jadwal = dateToString
        submit.faskes_id = parseInt(ID_Faskes)
        submit.stokvaksin = parseInt(submit.stokvaksin)

        if (selectedTimeStart && selectedTimeEnd !== null) {
            submit.startTime = TimeToString(selectedTimeStart.toString())
            submit.endTime = TimeToString(selectedTimeEnd.toString())
        }

        submit.waktu = JoinTime(submit.startTime, submit.endTime)
        
        var config = {
            method: 'post',
            url: `http://localhost:8000/vaksin`,
            data: submit
        };
    
        axios(config)
            .then(response => {
                console.log(response)
                goFaskesDetail()
            })
            .catch((error) => {
    
                const status = error.response.status;
    
                if (status === 500) {
                }
    
                console.error('There was an error!', error);
            });
    }

    const goFaskesDetail = () => {
        navigate(`/admin/faskes/${ID_Faskes}`)
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <>
        {/* <div className="row">
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
            <div className='col-lg-auto pe-5'></div> */}
            <div className='col-lg-8 pe-0 mt-3'>
                <i class="fas fa-chevron-left m-2"><a className='ps-3 text-decoration-none text-uppercase' href="#">Kembali</a></i>
                <div className='row'>
                    <h4 className='fw-bold text-uppercase text-center p-0'>Fasilitas Kesehatan Vaksinasi Covid-19</h4>
                </div>
                <div className='row mt-3'>
                    <div className="col-md-7">
                        <div className="row">
                            <h3 className='fw-bold'>{faskesDetail?.nama}</h3>
                        </div>
                        <div className="row">
                            <p className="mb-3">{`${faskesDetail?.alamat}, Kel. ${faskesDetail?.kelurahan}, Kec. ${faskesDetail?.kecamatan}, Kota ${faskesDetail?.kota}, Prov. ${faskesDetail?.provinsi}`}</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <h5 className='fw-bold'>Jadwal Vaksin</h5>
                </div>
                <div className='row mt-3'>
                <form onSubmit={Submit}>
                    <div className='row'>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="jenisvaksin" className="form-label">Jenis vaksin</label>
                            <input value={dataVaccine.jenisvaksin} onChange={(e) => setDataVaccine({...dataVaccine, [e.target.name]: e.target.value})} name='jenisvaksin' type="text" className="form-control" id="jenisvaksin" aria-label="jenisvaksin" placeholder='Jenis vaksin'/>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="stokvaksin" className="form-label">Stok vaksin</label>
                            <input value={dataVaccine.stokvaksin} onChange={(e) => setDataVaccine({...dataVaccine, [e.target.name]: e.target.value})} name='stokvaksin' type="text" className="form-control" id="stokvaksin" aria-label="stokvaksin" placeholder='Stok vaksin'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="date" className="form-label">Tanggal pelaksanaan</label>
                            <div className='row'>
                                <DatePicker inputClassName="form-control bg-white w-100 fs-6 text-start rounded" 
                                    value={selectedDay} onChange={setSelectedDay} inputPlaceholder="Tanggal pelaksanaan" 
                                    calendarClassName="responsive-calendar" locale={Calendar}
                                    shouldHighlightWeekends />
                            </div>
                            {/* <input value={""} onChange={""} name='date' type="date" className="form-control" id="date" aria-label="date" placeholder='Tanggal pelaksanaan'/> */}
                        </div>
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5 mb-3">
                            <label htmlFor="time" className="form-label">Jam pelaksanaan</label>
                            <div className='row'>
                                <div className='col-lg-5'>
                                <TimePicker date={selectedTimeStart} onChange={setTimeStart} portalContainer={document.body}>
                                    {({inputProps}) => <input className='form-control rounded' {...inputProps} />}
                                </TimePicker>
                                </div>
                                <div className='col-lg-auto d-flex align-items-center'>—</div>
                                <div className='col-lg-5'>
                                <TimePicker date={selectedTimeEnd} onChange={setTimeEnd} portalContainer={document.body}>
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
            {/* </div> */}
        </div>
        </>
    )
}