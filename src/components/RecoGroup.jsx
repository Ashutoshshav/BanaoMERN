import React from 'react'

export default function RecoGroup(props) {
        return (
                <div className='d-flex align-items-center justify-content-between my-3'>
                        <div className='d-flex align-items-center'>
                                <img src={props.img} alt="" className='mx-2' />
                                <p className='mx-3'>{props.name}</p>
                        </div>
                        <button type="button" class="btn btn-secondary rounded-pill">{props.status}</button>
                </div>
        )
}
