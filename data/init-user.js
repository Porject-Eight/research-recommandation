const axios = require('axios')

const url = 'http://172.25.51.49:8088/api/user'

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

const gender = ['male', 'female']
const age = ['adult', 'child', 'adult']
const level = ['hsk1', 'hsk2', 'hsk3']
const hobby = ['reading', 'travel', 'football', 'music', 'photography']
const country = ['China', 'United States', 'Japan', 'Korea', 'Australia']

let insertUser = async(u) => {
  let user = {
    Labels: [
      gender[Math.floor(Math.random() * gender.length)],
      age[Math.floor(Math.random() * age.length)],
      level[Math.floor(Math.random() * level.length)],
      hobby[Math.floor(Math.random() * hobby.length)],
      country[Math.floor(Math.random() * country.length)],
    ]
  }
  let response = await axios.patch(`${url}/${u}`, user)
  if (response.status >= 400) {
    console.log(`generate mock user: ${u} failed, error: ${response.data}`)
  }else{
    console.log(`generate mock user: ${u} successfully`)
  }
}

let initUser = async() => {
  for (let i = 0; i < mockUsers.length; i++) {
    const u = mockUsers[i];
    await insertUser(u)
  }
}

initUser().then(() => console.log("init user finished")).catch((err) => console.error(err))