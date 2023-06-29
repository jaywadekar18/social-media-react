import { useContext, createContext, useState } from "react";
// import { forumData } from "../Data";
export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  return (
    <PostContext.Provider
      value={{ allPosts, setAllPosts, userPosts, setUserPosts }}
    >
      {children}
    </PostContext.Provider>
  );
};
