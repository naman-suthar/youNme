import React from 'react'
import {GrAdd} from 'react-icons/gr'
export const CollabBtn = () => {
    return (
        <div style={{ display: 'flex',width: '100%',}}>
            <button><span>Collab</span> <GrAdd/></button>
        </div>
    )
}

export default CollabBtn