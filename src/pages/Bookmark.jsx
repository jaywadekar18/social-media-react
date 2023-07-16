import React, { useContext } from "react";
import Sidebar from "../shared/Sidebar";
import { AuthContext } from "../context/AuthContext";
import PostCard from "../shared/PostCard";
function Bookmark() {
  const { user, isLoggedIn } = useContext(AuthContext);
  console.log("user", user);
  return (
    <div className="d-flex-row">
      <Sidebar />
      <div>
        <p className="page-title">Bookmark</p>
        {user?.bookmarks?.length > 0
          ? user?.bookmarks.map((post) => (
              <PostCard key={post.id} detail={post} />
            ))
          : "You have not bookmark anything..."}
      </div>
    </div>
  );
}

export default Bookmark;
