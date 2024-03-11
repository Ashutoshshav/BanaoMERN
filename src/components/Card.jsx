import React from 'react';

export default function Card(props) {
        return (
                <div className="card w-auto m-4" style={{ width: "18rem" }}>
                        <img src={props.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                                <h6 className="card-title">{props.title}</h6>
                                <div className='d-flex justify-content-between'>
                                        <h5 className="card-text">{props.description}</h5>
                                        <div class="dropdown">
                                                <button class="btn btn-secondary dropdown-toggle dg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        ...
                                                </button>
                                                <ul class="dropdown-menu">
                                                        <li><button class="dropdown-item" type="button">Edit</button></li>
                                                        <li><button class="dropdown-item" type="button">Report</button></li>
                                                        <li><button class="dropdown-item" type="button">Option 3</button></li>
                                                </ul>
                                        </div>
                                </div>
                                <p className="card-text">{props.sentence}</p>
                                <div className='d-flex align-items-center justify-content-between'>
                                        <div className='d-flex align-items-center'>
                                                <img src={props.img2} alt="" />
                                                <p>{props.name}</p>
                                        </div>
                                        <div>
                                                <p>{props.views}</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
