import React from 'react';
import UserImg1 from "../assets/Rectangle 3.png";
import UserImg2 from "../assets/Rectangle 6.png";
import RecoGroup from './RecoGroup';

export default function Sidenav() {
        return (
                <div className='w-auto mx-5'>
                        <input className="form-control me-2" type="search" placeholder="Enter Your Location" aria-label="Search" />
                        <div className='d-flex justify-content-between my-3'>
                                <i className="fa-solid fa-location-dot">Noida, India</i>
                                <i class="fa-solid fa-pen"></i>
                        </div>
                        <p className='my-3'>Your location will help us serve better and extend a personalised experience.</p>
                        <h5>RECOMMENDED GROUPS</h5>
                        <div>
                                <RecoGroup img={UserImg1} name="Leisure" status="Follow" />
                                <RecoGroup img={UserImg1} name="Leisure" status="Follow" />
                                <RecoGroup img={UserImg1} name="Leisure" status="Follow" />
                                <RecoGroup img={UserImg1} name="Leisure" status="Follow" />
                                <RecoGroup img={UserImg1} name="Leisure" status="Follow" />
                        </div>
                </div>
        )
}
