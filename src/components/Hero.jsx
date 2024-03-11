import React from 'react';
import heroImage from "../assets/Rectangle 2.png"

export default function Hero() {
        return (
                <div className="card text-bg-dark">
                        <img src={heroImage} className="card-img" alt="..." />
                        <div className="d-flex justify-content-between card-img-overlay">
                                <div>
                                        <h2 className="fs-4 card-title sm-fs-2">Computer Engineering</h2>
                                        <p className="card-text"><small>142,765 Computer Engineers follow this</small></p>
                                </div>
                                <button type="button" class="btn btn-outline-white text-white">Join Group</button>
                        </div>
                </div>
        )
}
