import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "U1",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I am good boyy",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.7tTAo8gFMfyI-o-EjaaxKQHaHa&pid=Api&P=0&h=180",
  },
  {
    _id: "U2",
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I am cool guy",
    avatar:
      "https://tse3.mm.bing.net/th?id=OIP.q2gObYBRPGor08UW4amkBAHaHa&pid=Api&P=0&h=180",
  },
  {
    _id: "U3",
    firstName: "Ram",
    lastName: "Sharma",
    username: "ramsharma",
    password: "ramsharma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "College student..",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.7tTAo8gFMfyI-o-EjaaxKQHaHa&pid=Api&P=0&h=180",
  },
];
