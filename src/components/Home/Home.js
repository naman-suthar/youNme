import { Container, Grow, Typography } from '@material-ui/core'
import React from 'react'
import Feeds from './Main/Feeds'
import TopCreators from './TopCreators'
import TopStories from './TopStories'

function Home() {
    return (
        <Grow in>
       <div className="d-flex " style={{position:'relative', top: '80px',width:'95vw'}}>
        {/* <div  style={{backgroundColor:'#E1F4F3',height:'50vh',position:'fixed',left:'0%',width:'20vw'}}><TopStories /></div> */}
        <div style={{width:'90vw',marginLeft:'5vw'}}><Feeds /></div>
        {/* <div  style={{backgroundColor:'#E1F4F3',height:'50vh',position:'fixed',right:'0%',width:'20vw'}}><TopCreators /></div> */}
       </div>
       </Grow>
    )
}

export default Home
