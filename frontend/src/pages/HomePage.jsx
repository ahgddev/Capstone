import { useState, useEffect } from "react";
import RecentPostCard from "../components/RecentPostCard";
import axios from "axios";

function HomePage() {
  const [myPosts, setmyPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tokenData, setTokenData] = useState(localStorage.getItem("token"));

  async function dataGrabber() {
    setLoading(true);
    try {
      let response = await axios.post("http://localhost:3000/", {
        data: { id: localStorage.getItem("token") },
      });
      setRecentPosts(response.data[1]);
      setmyPosts(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error.response);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, []);
  let minePosts = [...myPosts];
  let currentPosts = [...recentPosts];

  console.log(currentPosts)
  return (
    <div id="homepagecontainer">
      <section id="heroimg">
        <img src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Plant Parent Hero img" className="logo"/>
        <div id="websiteTitle"> <h1>Plant Parents</h1>
        <h1>Share plant information with your friends.</h1></div>
      </section>
      <section id="websiteUpsell">
        <div className="upsellCard">
          <img src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Plants in a room" />
          <h2>Connect with Friends</h2>
          <p>Share your passion for gardening, landscaping and other plant related hobbies.</p>
        </div>
        <div className="upsellCard">
          <img src="https://images.unsplash.com/photo-1425736317462-a103b1303a35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bundle of vines" />
          <h2>Share from Anywhere</h2>
          <p>Easily share photos and update your network of plants you've found.</p>
        </div>
        <div className="upsellCard">
          <img src="https://plus.unsplash.com/premium_photo-1675705063544-ff440948b085?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cactus" />
          <h2>Discover new Plants</h2>
          <p>Find new and interesting plant species.</p>
        </div>
      </section>
      <section id="myPostsContainer">
        <h1>Your Posts</h1>
        <div>
         {minePosts[0]?.length == 0 ? <p>No posts </p> : minePosts.length != 0 ? minePosts[0].map((myPostCards) => {
              return (
                <RecentPostCard
                  key={minePosts.indexOf(myPostCards)}
                  imgURL={myPostCards.imgURL}
                  username={myPostCards.username}
                  title={myPostCards.title}
                  postdate={myPostCards.post_date}
                  posttext={myPostCards.text}
                />
              );
            }): <p>Loading posts....</p>}
        </div>
      </section>
      <section id="recentPostsContainer">
        <h1>Recent Posts</h1>
        {currentPosts.length == 0 ? (
          <p>Loading posts....</p>
        ) : (
          currentPosts[0].map((recentCards) => {
            return (
              <RecentPostCard
                imgURL={recentCards.imgURL}
                username={recentCards.username}
                title={recentCards.title}
                postdate={recentCards.post_date}
                posttext={recentCards.text}
              />
            );
          })
        )}
      </section>
    </div>
  );
}

export default HomePage;
