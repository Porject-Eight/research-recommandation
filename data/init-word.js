const axios = require('axios')
const fs = require('fs')
const moment = require('moment')

/*
batch insert items post http://{wsl-ip}:8088/api/items

[
  {
    "Categories": [
      "word"
    ],
    "Comment": "string",
    "IsHidden": false,
    "ItemId": "string",
    "Labels": [
      "hsk1"
    ],
    "Timestamp": "2023-05-18T07:55:41.446Z"
  }
]

*/

let initHsk = async (filename, label) => {
  let wordsText = fs.readFileSync(`${__dirname}/${filename}`, 'utf8')
  let words = JSON.parse(wordsText)

  let results = []
  words.forEach((w) => {
    console.log(`${w.hanzi} -- ${w.hanzi.length}`)
    let cate = 'word'
    if(w.hanzi.length > 1) {
      cate = 'phrase'
    }
    results.push(
      {
        Categories: [cate],
        Comment: w.hanzi,
        IsHidden: false,
        ItemId: w.id.toString(),
        Labels: [label],
        Timestamp: moment().toJSON()
      }
    )
  })

  let response = await axios.post('http://172.25.49.243:8088/api/items', results)
  if (response.status >= 400) {
    throw new Error(resposne.data)
  }
}

initHsk('hsk-1.json', 'hsk1').then(() => console.log("init items finished")).catch((err) => console.error(err))
initHsk('hsk-2.json', 'hsk2').then(() => console.log("init items finished")).catch((err) => console.error(err))
initHsk('hsk-3.json', 'hsk3').then(() => console.log("init items finished")).catch((err) => console.error(err))