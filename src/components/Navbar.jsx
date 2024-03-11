import React from 'react';
import logo from "../assets/whole.png";

export default function Navbar() {
        return (
                <nav className="bg-tertiary d-none d-sm-block">
                        <div className="d-flex flex-row align-items-center justify-content-evenly" style={{ height: "72px" }}>
                                <a className="navbar-brand"><img src={logo} alt="logo" /></a>
                                <input className="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-transparent" type="submit">Create Account</button>
                        </div>
                </nav>
        )
}
