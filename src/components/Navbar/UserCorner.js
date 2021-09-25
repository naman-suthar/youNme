import { Avatar, Typography } from '@material-ui/core';
import React from 'react'
const div1 = {

}
export const UserCorner = ({user}) => {
    return (
        <div style={{
            background: 'black',
            borderRadius:'10px'}}>
            <div style={{
                background:'white',
                borderRadius:'20px',
                }} >
                    <div className="mx-4" style={{
                        display:'flex',
                        alignItems:'center'
                        }}>
                    <Avatar src={user.photoURL}/>
            <Typography variant='body2'>{user.displayName}</Typography>
                    </div>
           
            </div>
        </div>
    )
}

export default UserCorner;