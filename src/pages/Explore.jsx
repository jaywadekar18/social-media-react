import React, { useContext, useEffect } from "react";
import Sidebar from "../shared/Sidebar";
import { PostContext } from "../context/PostContext";
import PostCard from "../shared/PostCard";
export default function Explore() {
  const { allPosts, setAllPosts } = useContext(PostContext);
  useEffect(() => {
    getAllPosts();
  }, []);
  // const handleBookmark = () => {
  //   //totdo -> add to user bookmark
  // };
  const handleLike = (postId) => {
    // setAllPosts((posts) => {
    //   return posts.map((post) => post.id !== postId); //change this later
    // });
  };
  const handleDelete = (postId) => {
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    fetch(`/api/users/bookmark/${postId}`, {
      method: "DELETE",
      headers,
      // body: JSON.stringify(""),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        // setAllPosts(res.posts);
        //todo -->handle error
      })
      .catch((err) => console.log(err));
    // setAllPosts((posts) => {
    //   return posts.filter(({ id }) => id !== postId);
    // });
  };
  const getAllPosts = () => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.posts) {
          setAllPosts(res.posts);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex-row">
      <Sidebar />
      <div>
        Explore
        {allPosts.length > 0
          ? allPosts.map((post) => <PostCard key={post.id} detail={post} />)
          : "nothing here.."}
      </div>
    </div>
  );
}
