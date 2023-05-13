import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={props.mode}>
                <div className="container-fluid ">
                    <Link className="navbar-brand"  to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>

                    </div>
                </div>
                {/* // new edit */}
                <div className={`form-check text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.toggleMode} style={{backgroundColor:'grey'}}/>
                        <label  className="form-check-label" for="flexRadioDefault1">
                            dark
                        </label>
                </div>


                <div className={`form-check text-${props.mode === 'success' ? 'light' : 'success'}`}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onClick={props.toggleMode2} style={{backgroundColor:'green'}}/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            green
                        </label>
                </div> 
                <div className={`form-check text-${props.mode === 'danger' ? 'light' : 'danger'}`}>
                    <input style={{backgroundColor:'red'}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.toggleMode1}/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            red
                        </label>
                </div>
                {/* ///new edit */}
            </nav>

        </div>
    )
};
