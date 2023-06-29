import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatars } from "../shared/Avatars";
export default function Modal({ profile, setShowModal }) {
  const { setUserDetail, isLoggedIn, user } = useContext(AuthContext);
  const [form, setForm] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    avatar: profile.avatar,
    bio: profile.bio,
    // endDate: profile.name
  });
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
  const editUserDetails = (data) => {
    console.log("data", data);
    const headers = new Headers();
    headers.append(
      "authorization",
      JSON.parse(localStorage.getItem("user")).token
    );
    fetch(`/api/users/edit`, {
      method: "POST",
      headers,
      body: JSON.stringify({ userData: data }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleSave = () => {
    console.log("form", form);
    if (!isFormValid()) return;
    const userDetails = { ...user, ...form };
    console.log("userDetails", userDetails);
    setUserDetail(userDetails);
    editUserDetails({ ...form, _id: user._id });
    setShowModal(false);
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
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Edit Profile</p>
        <span
          className="close-btn"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel 🗙
        </span>
        <label>
          First name
          <input
            className="modal-input-box"
            name="firstName"
            value={form.firstName}
            onChange={changeHandler}
          />
        </label>

        <label>
          Last name
          <input
            className="modal-input-box"
            name="lastName"
            value={form.lastName}
            onChange={changeHandler}
          />
        </label>

        <label>Bio </label>
        <input
          className="modal-input-box"
          name="bio"
          value={form.bio}
          onChange={changeHandler}
        />
        <label>Avatar </label>
        <div className="avatar-list">
          {Avatars.map((avatar, id) => (
            <label className="avatarLabel">
              <input
                type="radio"
                name="avatar"
                id="avatar"
                value={avatar}
                checked={avatar === form.avatar}
                onChange={changeHandler}
              />
              <img src={avatar} alt="pic" />
            </label>
          ))}
        </div>
        <button
          className="custom-btn"
          disabled={!isFormValid()}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
