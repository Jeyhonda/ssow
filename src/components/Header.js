import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <React.Fragment>
            <header className="p-3">
                <div className="container-fluid ">
                    <div className="row g-3">
                        <div className="col-md-3 text-center">
                            <Link to="/"><img alt="logo" src="../../whale-logo.png" width="64" /></Link>
                        </div>
                        <div className="col-md-9 text-center">
                        <nav className="navbar navbar-expand-lg navbar-dark p-0">
                            <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">
                                    Crystal Cove
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">
                                    Roadmap
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">
                                    Cigar Club
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">
                                    Membership
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>

                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;