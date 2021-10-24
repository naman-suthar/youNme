import React from 'react'
import {RiEdit2Fill} from 'react-icons/ri';

const SingleDetail = ({title,detail}) => {
    return (
        <div style={{width:"100%"}}>
            <div style={{
                display:'flex',
            }}>
                <p style={{flex:'1',fontFamily:'Saira, sans-serif',margin:'0px'}}>
                    {title}
                </p>
                <button type="submit" style={{
                    height:'16px',
                    width:"16px",
                    padding:'0px',
                    outline:'none',
                    border:'none'
                    
                }}>
                    <RiEdit2Fill/>
                </button>
            </div>
            <div>
                <p >
                    {detail}
                </p>
            </div>
        </div>
    )
}

export default SingleDetail
