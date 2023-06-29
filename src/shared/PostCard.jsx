import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaCaretDown,
  FaEllipsisV,
  FaHeart,
  FaRegHeart,
  FaCaretUp,
  FaBookmark,
  FaRegBookmark,
  FaShareAlt,
  FaRegCommentAlt,
} from "react-icons/fa";
import { PostContext } from "../context/PostContext";
function PostCard({ detail }) {
  const { setUserDetail, isLoggedIn, user } = useContext(AuthContext);
  const { allPosts, setAllPosts } = useContext(PostContext);
  const [postContent, setPostContent] = useState("");
  const [action, setAction] = useState("Select");
  const [isEdit, setEdit] = useState(false);
  const { _id, username, avatar } = detail;
  const handleLike = () => {
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    fetch(`/api/posts/like/${_id}`, {
      method: "POST",
      headers,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.posts) {
          setAllPosts(res.posts);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleRemoveLike = () => {
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    fetch(`/api/posts/dislike/${_id}`, {
      method: "POST",
      headers,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.posts) {
          setAllPosts(res.posts);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleAddBookmark = () => {
    const headers = new Headers();
    headers.append("authorization", user?.token);
    fetch(`/api/users/bookmark/${_id}`, {
      method: "POST",
      headers,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.bookmarks) {
          const userDetail = {
            ...user,
            bookmarks: res.bookmarks,
          };
          setUserDetail(userDetail);
        }
      })
      .catch((err) => console.log(err));
  };
  const isBookmarked = () => {
    return Boolean(user?.bookmarks?.find((post) => _id === post._id));
  };
  const isLiked = () => {
    const found = detail?.likes?.likedBy?.find(
      (liker) => liker?._id === JSON.parse(localStorage.getItem("user"))._id
    );
    if (found) return true;
    return false;
  };
  const handleRemoveBookmark = () => {
    const headers = new Headers();
    headers.append("authorization", user?.token);
    fetch(`/api/users/remove-bookmark/${_id}`, {
      method: "POST",
      headers,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.bookmarks) {
          const userDetail = {
            ...user,
            bookmarks: user.bookmarks.filter(
              (bookmark) => bookmark._id !== _id
            ),
          };
          setUserDetail(userDetail);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setPostContent(e.target.value);
    setAction(e.target.value);
    if (e.target.value === "edit") {
      setEdit(true);
      handleEdit();
      setAction("Select");
    } else {
      setAction("Select");
    }
  };
  const handleEdit = () => {
    setPostContent(detail.content);
  };
  const handleEditChange = (e) => {
    setPostContent(e.target.value);
  };
  const handleSave = () => {
    const headers = new Headers();
    const payload = {
      postData: {
        content: postContent,
      },
    };
    headers.append("authorization", user?.token);
    fetch(`/api/posts/edit/${_id}`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.posts) {
          setAllPosts(res.posts);
          setEdit(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="post-card">
      <div className="post-header d-flex">
        <div className="d-flex">
          <img
            className="user-profile"
            src={user.username === username ? user?.avatar : avatar}
            alt="profile pic"
          />
          <p>{detail?.username}</p>
        </div>
        <div>
          {username === user.username && (
            <select
              className="action-options"
              name="actions"
              id="actions"
              onChange={handleSelectChange}
              value={action}
            >
              <option value="Select" disabled>
                Select
              </option>
              <option value="edit">Edit</option>

              <option value="delete">Delete</option>
            </select>
          )}
        </div>
      </div>

      {isEdit ? (
        <div>
          <textarea
            className="edit-post-textbox"
            name={postContent}
            value={postContent}
            onChange={handleEditChange}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </div>
      ) : (
        <p className="post-content">{detail.content}</p>
      )}
      {/* <p>{isLiked() ? "true" : "false"}</p> */}

      <div className="post-footer d-flex-row">
        <p>
          {isLiked() ? (
            <FaHeart onClick={handleRemoveLike} />
          ) : (
            <FaRegHeart onClick={handleLike} />
          )}
        </p>
        <p>
          {isBookmarked() ? (
            <FaBookmark onClick={handleRemoveBookmark} />
          ) : (
            <FaRegBookmark onClick={handleAddBookmark} />
          )}
        </p>
      </div>
    </div>
  );
}

export default PostCard;
