import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "1",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "U2",
          firstName: "Shubham",
          lastName: "Soni",
          username: "shubhamsoni",
          createdAt: "2023-07-03T14:28:25+05:30",
          updatedAt: "2023-07-03T14:28:25+05:30",
          followers: [],
          following: [],
        },
        {
          _id: "U3",
          firstName: "Ram",
          lastName: "Sharma",
          username: "ramsharma",
          password: "ramsharma123",
          createdAt: "2023-07-03T14:28:25+05:30",
          updatedAt: "2023-07-03T14:28:25+05:30",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.7tTAo8gFMfyI-o-EjaaxKQHaHa&pid=Api&P=0&h=180",
    createdAt: "2022-07-03T14:28:25+05:30",
    updatedAt: "2022-07-03T14:28:25+05:30",
  },
  {
    _id: "2",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "U2",
          firstName: "Shubham",
          lastName: "Soni",
          username: "shubhamsoni",
          createdAt: "2023-07-03T14:28:25+05:30",
          updatedAt: "2023-07-03T14:28:25+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    avatar:
      "https://tse3.mm.bing.net/th?id=OIP.q2gObYBRPGor08UW4amkBAHaHa&pid=Api&P=0&h=180",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut illum dolorum soluta rem adipisci ut quod, quae iste animi fugiat voluptatem quo nam? Non ratione temporibus reprehenderit aut facere.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "U3",
          firstName: "Ram",
          lastName: "Sharma",
          username: "ramsharma",
          password: "ramsharma123",
          createdAt: "2023-07-03T14:28:25+05:30",
          updatedAt: "2023-07-03T14:28:25+05:30",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.7tTAo8gFMfyI-o-EjaaxKQHaHa&pid=Api&P=0&h=180",
    createdAt: "2023-07-03T14:28:25+05:30",
    updatedAt: "2023-07-03T14:28:25+05:30",
  },
  {
    _id: "4",
    content:
      "i fugiat voluptatem quo nam? Non ratione temporibus reprehenderit aut facere.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.7tTAo8gFMfyI-o-EjaaxKQHaHa&pid=Api&P=0&h=180",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "5",
    content: "Hello word!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.7tTAo8gFMfyI-o-EjaaxKQHaHa&pid=Api&P=0&h=180",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "6",
    content: "I am ram!!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ramsharma",
    avatar:
      "https://tse4.mm.bing.net/th?id=OIP.izrjMmF0gU6MZgFHALX_wgHaHa&pid=Api&P=0&h=180",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
