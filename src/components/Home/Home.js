import { Grow } from '@material-ui/core'
import React from 'react'
import Feeds from './Main/Feeds'

function Home() {
    return (
        <Grow in>
       <div className="d-flex " style={{position:'relative', top: '80px',width:'95vw'}}>
     
        <div style={{width:'90vw',marginLeft:'5vw'}}><Feeds /></div>
       
       </div>
       </Grow>
    )
}

export default Home
