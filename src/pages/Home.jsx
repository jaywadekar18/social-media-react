import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../shared/Sidebar";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import PostCard from "../shared/PostCard";
function Home() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    newPostContent: "",
  });
  const { userPosts, setUserPosts } = useContext(PostContext);
  const { setUserDetail, isLoggedIn, user } = useContext(AuthContext);
  const [sort, setSort] = useState("trending");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserPosts();
    getAllUsers();
  }, []);
  const getAllUsers = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch("/api/users")
      .then((res) => res.json())
      .then((res) => {
        console.log("user.username", user.username);
        if (res.users) {
          const users = res.users.filter(
            ({ username }) =>
              user.username !== username ||
              user.following?.some(
                (followingUser) =>
                  followingUser.username !== username &&
                  user.username !== username
              )
          );
          setUsers(users);
        }
      })
      .catch((err) => console.log(err));
  };
  const getUserPosts = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch("/api/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res, user);
        if (res.posts) {
          const userPosts = res.posts.filter(
            ({ username }) =>
              user.username === username ||
              user.following?.some(
                (followingUser) => followingUser.username === username
              )
          );
          setUserPosts(userPosts);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSave = () => {
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    console.log("form", form);
    fetch(`/api/posts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ postData: { content: form.newPostContent } }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setForm({ newPostContent: "" });
      })
      .catch((err) => console.log(err));
    // setForm({ newPostContent: "" });
  };
  const changeHandler = (e) => {
    console.log("e", e.target.value);
    const { name, value } = e.target;
    setForm((val) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };
  const isFormValid = () => {
    let isValid = true;
    for (const key in form) {
      if (form[key].length === 0) {
        isValid = false;
      }
    }
    return isValid;
  };
  const filterPosts = (filter) => {
    if (userPosts.length <= 1) return userPosts;
    if (filter === "latest") {
      return [...userPosts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else {
      const count = userPosts.filter(({ likes }) => likes.likeCount > 0);
      if (count.length <= 1) {
        return userPosts;
      }
      return [...userPosts].sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
    }
  };
  const filter = (filter, posts) => {};
  const handleFilterChange = (e) => {
    console.log("e", e.target.value);
    setSort(e.target.value);
    const sortedPosts = filterPosts(e.target.value);
    if (sortedPosts.length > 0) setUserPosts(sortedPosts);
  };
  return (
    <div className="homepage-container d-flex-row">
      <Sidebar />
      <div className="posts">
        <div className="create-post">
          <p className="page-title">Home</p>
          <p className="page-subtitle">Add a new post...</p>
          <textarea
            placeholder="Create a new post..."
            name="newPostContent"
            id="newPostContent"
            cols="30"
            rows="3"
            value={form.newPostContent}
            onChange={changeHandler}
          ></textarea>
          <button
            disabled={!isFormValid()}
            onClick={handleSave}
            className="custom-btn"
          >
            Post
          </button>
        </div>
        <div>
          <div className="filter-container">
            <select
              name="actions"
              id="actions"
              onChange={handleFilterChange}
              value={sort}
            >
              <option value="Filter" disabled>
                Sort
              </option>
              <option value="trending">Trending</option>

              <option value="latest">Latest</option>
            </select>
          </div>
          {userPosts?.length > 0
            ? userPosts.map((post) => <PostCard key={post.id} detail={post} />)
            : "nothing here.."}
        </div>
      </div>
      <div className="follow-users">
        <p className="page-subtitle">People you may know....</p>
        {users?.length > 0
          ? users.map((profile) => (
              <div
                key={profile._id}
                className="user-card"
                onClick={() => navigate(`/profile/${profile._id}`)}
              >
                <img
                  className="user-card-profile"
                  src={profile?.avatar}
                  alt="profile pic"
                />
                @{profile.username}
              </div>
            ))
          : "no one to followe..."}
      </div>
    </div>
  );
}

export default Home;
