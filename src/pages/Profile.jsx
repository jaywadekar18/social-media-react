import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../shared/Sidebar";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Modal from "../shared/Modal";
function Profile() {
  const { setUserDetail, isLoggedIn, user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const { userId } = useParams();
  const editProfile = () => {
    setShowModal(true);
  };
  // console.log("usereee", user);
  const followUser = () => {
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    fetch(`/api/users/follow/${userId}`, {
      method: "POST",
      headers,
      // body: JSON.stringify(),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.user) setUserDetail(res.user);
      })
      .catch((err) => console.log(err));
  };
  const unfollowUser = () => {
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    fetch(`/api/users/unfollow/${userId}`, {
      method: "POST",
      headers,
      // body: JSON.stringify(),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res?.user) {
          setUserDetail(res.user);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch(`/api/users/${userId}`, {
      method: "GET",
      // body: JSON.stringify(""),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res?.user) {
          setUserProfile(res.user);
        }
      })
      .catch((err) => console.log(err));
  }, [userId]);
  const isAleredyFOllwed = () => {
    return user?.following.some(
      ({ username }) => userProfile?.username === username
    );
  };
  return (
    <div className="d-flex-row">
      <Sidebar />
      <div>
        <div className="d-flex">
          <img
            className="user-profile"
            src={userProfile?.avatar}
            alt="profile pic"
          />
          <p>
            {userProfile?.firstName} {userProfile?.lastName}
          </p>
        </div>
        <p>{userProfile?.username}</p>
        <p>{userProfile?.bio}</p>
        {userProfile?.username === user?.username && (
          <button onClick={editProfile}>Edit profile</button>
        )}
        {userProfile?.username !== user?.username && (
          <div>
            {isAleredyFOllwed() ? (
              <button onClick={unfollowUser}>Unfollow</button>
            ) : (
              <button onClick={followUser}>Follow</button>
            )}
          </div>
        )}
      </div>
      {showModal && userProfile?.username === user?.username && (
        <Modal
          profile={user}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default Profile;
