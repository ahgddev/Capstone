import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [searchQuery, setSearchQuery] = useState();
  const [tokenData, setTokenData] = useState(localStorage.getItem("token"));
  const [usersavatar, setUsersAvatar] = useState(localStorage.getItem('avatar'));
  const [usersname, setUsersname] = useState(localStorage.getItem('username'));

  let nav = useNavigate();
  function goToResults() {
    let path = "/search/" + searchQuery;
    nav(path);
  }

  useEffect(() => {
    setTokenData(localStorage.getItem("token"));
    setUsersname(localStorage.getItem('username'));
    setUsersAvatar(localStorage.getItem('avatar'));
  });

  console.log("Nav" + tokenData);
  return (
    <div className="nav">
      <div id="userDataContainer">
        {usersavatar && usersname ?  <><h3>Hello {usersname}</h3><img src={usersavatar} alt="User Avatar" /></> : <h3>Hello Guest!</h3>}
      </div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      {!tokenData ? (
        <>
          <Link to="/signup">
            <h1>SignUp</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">
            <h1>Dashboard</h1>
          </Link>
          <Link to="/logout">
            <h1>Logout</h1>
          </Link>
        </>
      )}
      <form onSubmit={goToResults} id="searchForm">
        <input
          type="text"
          name=""
          id="searhBar"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search Posts</button>
      </form>
    </div>
  );
}

export default Nav;
