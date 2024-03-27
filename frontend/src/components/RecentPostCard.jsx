function RecentPostCard({imgURL, username, title, postdate, posttext}) {
  return (
    <div className="recentPost">
        <img src={imgURL} alt="" />
        <p>{username}</p>
        <p>{title}</p>
        <p>{postdate}</p>
        <p>{posttext}</p>
    </div>
  )
}

export default RecentPostCard