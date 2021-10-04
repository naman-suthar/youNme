import React , { useState,useEffect} from 'react';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Post from './Post/Post';
import PostCard from '../../PostCard/PostCard';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
function FetchPosts() {
    const [items,setItems] = useState([]);
    const style = {
        margin: 6,
        padding: 8
      };

    const getPostData = () =>{
      axios.get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
    };

    useEffect(() => {
      getPostData()
    }, []);
    // const fetchMoreData = () => {
    //     //  a fake async api call like which sends
    //     //  20 more records in 1.5 secs
    //     setTimeout(() => {
          
    //     }, 1500);
    //   };

  
        return (
        <div>
        
        {/* {
          items.map(entry => (
            <div style={style} >
              <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
            </div>
          ))
        } */}
        <div className="proj_section">
        <p className="proj_title"> Projects Near you</p>
        <div className="d-flex">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard/>
        </div>
       
       
        </div>
        
        <div className="proj_section">
        <p className="proj_title">Top Free Projects</p>
        <div className="d-flex" >
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
       
        </div>
       
       
        </div>
        <div className="proj_section">
        <p className="proj_title">Top Paid Projects</p>
        <div className="d-flex" >
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
       
        </div>
       
       
        </div>
      </div>
    );
}


export default FetchPosts
