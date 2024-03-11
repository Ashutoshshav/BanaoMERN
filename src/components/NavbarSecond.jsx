import React from 'react'

export default function NavbarSecond() {
        return (
                <div>
                        <nav className="navbar d-none navbar-expand-sm d-sm-block">
                                <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                                <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                                <a className="nav-link" aria-current="page" href="#">All Post</a>
                                                        </li>
                                                        <li className="nav-item">
                                                                <a className="nav-link" href="#">Article</a>
                                                        </li>
                                                        <li className="nav-item">
                                                                <a className="nav-link" href="#">Event</a>
                                                        </li>
                                                        <li className="nav-item">
                                                                <a className="nav-link" href="#">Education</a>
                                                        </li>
                                                        <li className="nav-item">
                                                                <a className="nav-link" href="#">Job</a>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div>
                                                <ul className="navbar-nav">
                                                        <li className="nav-item dropdown">
                                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Write Post
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                        </li>
                                                        <button type="button" className="btn btn-primary">Join Group</button>
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        )
}
