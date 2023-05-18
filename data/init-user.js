const axios = require('axios')

/*
insert user post http://{wsl-ip}:8088/api/user

{
  Comment: "test",
  Labels: [
    "crocodilia",
    "cetacean",
    "horse"
  ],
  UserId: "cat"
}

*/

const users = [
  {
    Comment: "test",
    Labels: [
      "hsk1",
      "food",
      "travel"
    ],
    Subscribe:[],
    UserId: "james"
  },
  {
    Comment: "test",
    Labels: [
      "hsk2",
      "reading",
      "study"
    ],
    Subscribe:[],
    UserId: "strong"
  },
  {
    Comment: "test",
    Labels: [
      "hsk1",
      "movie",
      "travel"
    ],
    Subscribe:[],
    UserId: "lon"
  },
  {
    Comment: "insect",
    Labels: [
      "hsk3",
      "movie",
      "study"
    ],
    Subscribe:[],
    UserId: "marc"
  }
]

let insertUser = async(user) => {
  let response = await axios.post('http://172.25.49.243:8088/api/user', user)
  if (response.status >= 400) {
    throw new Error(resposne.data)
  }
}

let initUser = async() => {
  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    await insertUser(u)
  }
}

initUser().then(() => console.log("init user finished")).catch((err) => console.error(err))