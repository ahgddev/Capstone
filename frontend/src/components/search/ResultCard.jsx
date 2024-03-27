function resultCard({imgURL, username, title, postdate, postText}) {
  return (
    <div className="resultCardContainer">
        <img src={imgURL} alt="" />
        <p>username {username}</p>
        <p>Title {title}</p>
        <p>Date: {postdate}</p>
        <p>Text {postText}</p>
    </div>
  )
}

export default resultCard