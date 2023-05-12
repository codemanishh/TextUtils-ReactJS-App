import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={props.mode}>
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>

                    </div>
                </div>
                {/* // new edit */}
                <div className={`form-check text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.toggleMode}/>
                        <label  className="form-check-label" for="flexRadioDefault1">
                            dark
                        </label>
                </div>


                {/* <div className={`form-check text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onClick={props.toggleMode}/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            green
                        </label>
                </div> */}
                <div className={`form-check text-${props.mode === 'danger' ? 'light' : 'danger'}`}>
                    <input style={{backgroundColor:'red'}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.toggleMode}/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            red
                        </label>
                </div>
                {/* ///new edit */}
            </nav>

        </div>
    )
};
