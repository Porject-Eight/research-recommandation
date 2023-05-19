const axios = require('axios')
const moment = require('moment')

const url = 'http://172.25.51.49:8088/api/feedback'

const mockUsers = [
  'LunaSpark',
  'ZephyrBlaze',
  'RavenSkye',
  'NovaStorm',
  'CoralDream',
  'FloraBee',
  'LeoFire',
  'AquaStar',
  'JadeMoon',
  'RubyRose',
  'SageGreen',
  'LilySnow',
  'MaxPower',
  'SkylerBlue',
  'EvanBright',
  'MilaGrace',
  'NoahSwift',
  'ZaraJoy',
  'FinnWolf',
  'LolaLove',
  'KaiZen',
  'IvyBloom',
  'EliRock',
  'ZoeSun',
  'LeoKing',
  'AvaSong',
  'ColeLight',
  'MiaHope',
  'RexRage',
  'EllaBelle',
  'AceFlash',
  'LanaRay',
  'JaceBlade',
  'EmmaRose',
  'DashSpeed',
  'NoraWish',
  'DrakeFlame',
  'ChloeGrace',
  'SethDark',
  'LilaRain',
  'TroySteel',
  'LucyHeart',
  'LukeSkye',
  'AnnaSmile',
  'TysonFury',
  'EveSparkle',
]

const maxItemId = 599
const feedbackEvents = ['read', 'star', 'like']

let generateMockFeedback = async () => {
  let itemId = Math.floor(Math.random() * maxItemId).toString()
  let userId = mockUsers[Math.floor(Math.random() * mockUsers.length)]
  let fb = feedbackEvents[Math.floor(Math.random() * feedbackEvents.length)]

  let feedbacks = [
    {
      Comment: "mock",
      FeedbackType: fb,
      ItemId: itemId,
      Timestamp: moment().toJSON(),
      UserId: userId
    }
  ]

  let response = await axios.post(url, feedbacks)
  if (response.status >= 400) {
    console.log(`generate mock (item: ${itemId} and user: ${userId}) failed, error: ${response.data}`)
  }else{
    console.log(`generate mock (item: ${itemId} and user: ${userId}) successfully`)
  }
}

let delay = (t) => {
  return new Promise(resolve => setTimeout(resolve, t));
}

let generateFeedback = async () => {
  let total = 200;
  for (let i = 0; i < total; i++) {
    await generateMockFeedback()
    await delay(2000)
  }
}

generateFeedback().then(() => console.log("mock feedback finished")).catch((err) => console.error(err))