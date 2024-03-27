import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecentPostCard from "../components/RecentPostCard";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();
  const [postData, setPostData] = useState();
  const [relatedPosts, setRelatedPosts] = useState();

  async function dataGrabber() {
    try {
      let response = await axios.get(`http://localhost:3000/post/${id}`);
      setPostData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, []);

  console.log(postData);
  return (
    <div id="postContainer">
      <section id="postDisplay">
        {postData ? (
          <>
            {" "}
            <img src={postData.img.imgURL} alt="postImage" id="postImg" />
            <div id="postDetails">
              <img src={postData.avatar} alt="user_avatar" />
              <div id="postTextDetails">
                <h4>{postData.username}</h4>
                <p>{postData.post_date}</p>
                <p>{postData.title}</p>
                <p>{postData.text}</p>
              </div>
            </div>
          </>
        ) : (
          <p>loading</p>
        )}
      </section>
      <section id="relatedPosts">
        <h1>Related Posts</h1>
        <div id="relatedPostsSection">
          {/* {relatedPosts?.map((myPostCards) => {
            return (
              <RecentPostCard
                className="cardItem"
                imgURL={myPostCards.imgURL}
                username={myPostCards.username}
                title={myPostCards.title}
                postdate={myPostCards.post_date}
                posttext={myPostCards.text}
              />
            );
          })} */}
        </div>
      </section>
    </div>
  );
}

export default PostDetails;
