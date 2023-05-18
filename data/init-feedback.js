const axios = require('axios')
const moment = require('moment')

/*
batch add feedbacks put http://{wsl-ip}:8088/api/feedback

[
  {
    "Comment": "crocodilia",
    "FeedbackType": "bird",
    "ItemId": "fish",
    "Timestamp": "2020-02-02T20:20:02.02Z",
    "UserId": "crocodilia"
  },
  {
    "Comment": "crocodilia",
    "FeedbackType": "bird",
    "ItemId": "fish",
    "Timestamp": "2020-02-02T20:20:02.02Z",
    "UserId": "crocodilia"
  },
  {
    "Comment": "crocodilia",
    "FeedbackType": "bird",
    "ItemId": "fish",
    "Timestamp": "2020-02-02T20:20:02.02Z",
    "UserId": "crocodilia"
  }
]


*/

const feedbacks = [
  {
    Comment: "已读",
    FeedbackType: "read",
    ItemId: "477",
    Timestamp: moment().toJSON(),
    UserId: "james"
  },
  {
    Comment: "收藏",
    FeedbackType: "star",
    ItemId: "459",
    Timestamp: moment().toJSON(),
    UserId: "james"
  },
  {
    Comment: "点赞",
    FeedbackType: "like",
    ItemId: "460",
    Timestamp: moment().toJSON(),
    UserId: "james"
  },
  {
    Comment: "已读",
    FeedbackType: "read",
    ItemId: "177",
    Timestamp: moment().toJSON(),
    UserId: "lon"
  },
  {
    Comment: "收藏",
    FeedbackType: "star",
    ItemId: "159",
    Timestamp: moment().toJSON(),
    UserId: "lon"
  },
  {
    Comment: "点赞",
    FeedbackType: "like",
    ItemId: "160",
    Timestamp: moment().toJSON(),
    UserId: "james"
  },
  {
    Comment: "已读",
    FeedbackType: "read",
    ItemId: "77",
    Timestamp: moment().toJSON(),
    UserId: "marc"
  },
  {
    Comment: "收藏",
    FeedbackType: "star",
    ItemId: "59",
    Timestamp: moment().toJSON(),
    UserId: "marc"
  },
  {
    Comment: "点赞",
    FeedbackType: "like",
    ItemId: "60",
    Timestamp: moment().toJSON(),
    UserId: "marc"
  },
  {
    Comment: "已读",
    FeedbackType: "read",
    ItemId: "377",
    Timestamp: moment().toJSON(),
    UserId: "strong"
  },
  {
    Comment: "收藏",
    FeedbackType: "star",
    ItemId: "359",
    Timestamp: moment().toJSON(),
    UserId: "strong"
  },
  {
    Comment: "点赞",
    FeedbackType: "like",
    ItemId: "460",
    Timestamp: moment().toJSON(),
    UserId: "strong"
  },
  {
    Comment: "已读",
    FeedbackType: "read",
    ItemId: "124",
    Timestamp: moment().toJSON(),
    UserId: "emil"
  },
  {
    Comment: "收藏",
    FeedbackType: "star",
    ItemId: "231",
    Timestamp: moment().toJSON(),
    UserId: "emil"
  },
  {
    Comment: "点赞",
    FeedbackType: "like",
    ItemId: "88",
    Timestamp: moment().toJSON(),
    UserId: "emil"
  },
]


let initfeedback = async() => {
  let response = await axios.put('http://172.25.49.243:8088/api/feedback', feedbacks)
  if (response.status >= 400) {
    throw new Error(resposne.data)
  }
}

initfeedback().then(() => console.log("init feedback finished")).catch((err) => console.error(err))