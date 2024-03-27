import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecentPostCard from "../components/RecentPostCard";
import axios from "axios";

function Dashboard() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [myPosts, setmyPosts] = useState([]);
  const [updatedTags, setupdatedTags] = useState([]);
  const [tokenData, setTokenData] = useState(localStorage.getItem('token'));
  const [usersavatar, setUsersAvatar] = useState(localStorage.getItem('avatar'));
  const [usersname, setUsersname] = useState(localStorage.getItem('username'));

  let nav = useNavigate();

  async function dataGrabber() {
    try {
      let response = await axios.get("http://localhost:3000/dashboard");
      setmyPosts(response.data[0]);
      setRecentPosts(response.data[1]);
      setupdatedTags(response.data[2]);
    } catch (error) {
      console.error(error.response);
    }
  }

  
  useEffect(() => {
    if(!tokenData){
      let path = "/login";
      nav(path);
    } else {
      dataGrabber(); 
    }
  }, []);

  return (
    <div id="dashboardContainer">
      <h1>Dashboard</h1>
      <section id="dashTop">
       <img src={usersavatar} alt="" id="dashAvatar"/>
          <h4>Hello <em>{usersname}</em></h4>
      </section>
      <h1>Your Posts</h1>
      <section id="yourPosts">
        <div className="postContainer">
          {myPosts.length != 0 ? myPosts.map((myPostCards) => {
            return (
              <RecentPostCard
                key={"mypost"+myPostCards.post_id}
                imgURL={myPostCards.imgURL}
                username={myPostCards.username}
                title={myPostCards.title}
                postdate={myPostCards.post_date}
                posttext={myPostCards.text}
              />
            );
          }) : <h3>You haven't made any posts!</h3>}
        </div>
      </section>
      <h1>Updated Tags</h1>
      <section id="updatedTags">
      {updatedTags?.map((tags) => {
            return (
              <p className="tagItem"
              key={"tag"+tags}>{tags}</p>
            );
          })}
      </section>
      <section id="recentPosts">
        <h1>Recent Posts</h1>
        <div className="postContainer">
          {recentPosts.length != 0 ? recentPosts.map((recentCards) => {
            return (
              <RecentPostCard
                key={"rcntpost"+recentCards.post_id}
                imgURL={recentCards.imgURL}
                username={recentCards.username}
                title={recentCards.title}
                postdate={recentCards.post_date}
                posttext={recentCards.text}
              />
            );
          }) : <h3>You're not following anyone...</h3>}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
