import { useState, useEffect } from "react";
import RecentPostCard from "../components/RecentPostCard";
import axios from "axios";

function HomePage() {
  const [myPosts, setmyPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  async function dataGrabber() {
    setLoading(true);
    try {
      let response = await axios.post("http://localhost:3000/", {
        data: { id: localStorage.getItem("token") },
      });
      setRecentPosts(response.data[0]);
      setmyPosts(response.data[1]);
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
  console.log(minePosts);
  return (
    <div id="homepagecontainer">
      <section id="heroimg">
        <img src="" alt="" />
        <h1>Plant Parent Collective</h1>
        <h1>Share plant information with your friends.</h1>
      </section>
      <section id="websiteUpsell">
        <div className="upsellCard">
          <img src="" alt="" />
          <h2>Benefit 1</h2>
        </div>
        <div className="upsellCard">
          <img src="" alt="" />
          <h2>Benefit 2</h2>
        </div>
        <div className="upsellCard">
          <img src="" alt="" />
          <h2>Benefit 3</h2>
        </div>
      </section>
      <section id="myPostsContainer">
        <h1>Your Posts</h1>
        <div>
          {minePosts.length != 0 ? 
            minePosts.map((myPostCards) => {
              return (
                <RecentPostCard
                  className="cardItem"
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
          currentPosts.map((recentCards) => {
            return (
              <RecentPostCard
                className="cardItem"
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
