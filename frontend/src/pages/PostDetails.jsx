import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecentPostCard from "../components/RecentPostCard";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();
  const [postData, setPostData] = useState();
  const [userData, setUserData] = useState();

  async function dataGrabber() {
    try {
      let response = await axios.get(`https://capstone-be-16oc.onrender.com/post/${id}`);
      setPostData(response.data[0]);
      setUserData(response.data[1]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, []);

  return (
    <div id="postContainer">
      <section id="postDisplay">
        {postData ? (
          <>
            <img src={postData.img.imgURL} alt="postImage" id="postImg" />
            <div id="postDetails">
              <img src={userData.avatar} alt="user_avatar" />
              <div id="postTextDetails">
                <h4>{userData.username}</h4>
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
    </div>
  );
}

export default PostDetails;
