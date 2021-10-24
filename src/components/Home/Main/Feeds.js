import React from 'react'
import PostCard from '../../PostCard/PostCard';
import FreeProjects from '../FreeProjects';
import PaidProjects from '../PaidProjects';
import './Feeds.css'




function Feeds() {
    return (
        <div>
        
        
        {/* <div className="proj_section">
        <p className="proj_title"> Projects Near you</p>
        <div className="d-flex">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard/>
        </div>
        </div> */}
        
        <FreeProjects/>
        <PaidProjects/>
      </div>
    )
}

export default Feeds
