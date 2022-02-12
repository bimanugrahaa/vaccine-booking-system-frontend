import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { deleteMySession } from '../../store/Data';
import { useEffect, useState } from "react";

export default function Sidebar() {
    
    const mySession = useSelector((state) => state.mySession.mySession)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [auth, getAuth] = useState(false)

    /* Logout function */
    const logout = () => {
        const logout = deleteMySession()
        dispatch(logout)
        navigate(`/admin/login`)
    }

    return (
        <>
        <div class="mx-auto d-flex flex-column flex-shrink-0 p-3 card shadow-sm" style={{"width": "280px"}}>
            {/* <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"> */}
                <span class="fs-4"><i class="fas fa-user mx-3"></i>ADMIN</span>
            {/* </a> */}
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <NavLink to='/admin/faskes' className="my-0 py-2 px-3 text-decoration-none" 
                    style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "1rem 0",
                          color: isActive ? "blue" : "black"
                        };
                      }}            
                    aria-current="page"><i class="fas fa-plus me-2"></i>Fasilitas Kesehatan</NavLink>
                {/* <a href="#" class="nav-link" aria-current="page"> */}
                {/* <svg class="bi me-2" width="16" height="16"><use href="#home"></use></svg> */}
                {/* <i class="fas fa-plus me-2"></i>
                Fasilitas Kesehatan
                </a> */}
            </li>
            <li>
                <NavLink to='/admin/user-vaccine' className="my-0 py-2 px-3 text-decoration-none" 
                    style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "1rem 0",
                          color: isActive ? "blue" : "black"
                        };
                      }}            
                    aria-current="page"><i className="fas fa-syringe me-2"></i>User Vaksin</NavLink>
                {/* <a href="#" class="nav-link link-dark"> */}
                {/* <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg> */}
                {/* <i className="fas fa-syringe me-2"></i> */}
                {/* User Vaksin */}
                {/* </a> */}
            </li>
            <li>
                <NavLink to='/admin/news' className="my-0 py-2 px-3 text-decoration-none" 
                    style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "1rem 0",
                          color: isActive ? "blue" : "black"
                        };
                      }}            
                    aria-current="page"><i class="fas fa-rss-square me-2"></i>Berita Vaksin</NavLink>
                {/* <a href="#" class="nav-link link-dark"> */}
                {/* <svg class="bi me-2" width="16" height="16"><use href="#table"></use></svg> */}
                {/* <i class="fas fa-rss-square me-2"></i>
                Berita Vaksin
                </a> */}
            </li>
            </ul>
            <hr></hr>
            <span href="#" className="ms-5 fw-bold" onClick={() => logout()}>KELUAR</span>
        </div>
        </>
    )
}