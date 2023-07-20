const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let dummyData = [
  {
    title :"The Light That Never Goes Out",
    artist : "The Smith",
    url : "https://open.spotify.com/track/0WQiDwKJclirSYG9v5tayI?si=4b85c0f74cc74eec"
  },
  {
    title :"This Charming Man",
    artist : "The Smith",
    url : "https://open.spotify.com/track/1FvDJ9KGxcqwv1utyPL3JZ?si=0d9aba50c4184390"
  },
  {
    title :"Back To The Old House",
    artist : "The Smith",
    url : "https://open.spotify.com/track/6LUGvXEAK8WxIBYK43uoTb?si=c5fbaa0e11d64ae5"
  }
]

const newResponsesFunc = (status, message, data) =>{
  return {
    meta : {
      status : status,
      message : message
    },
    data : data
  }
}

app.get('/getPlaylist', (req, res) => {
  const newResponses = newResponsesFunc(200, "success", dummyData)
  res.status(200).json(newResponses)
})

app.post('/insertPlaylist', (req, res) => {
  const getReq = {
    title : req.body.title,
    artist : req.body.artist,
    url: req.body.url
  }
  dummyData.push(getReq)
  const newResponses = newResponsesFunc(200, "success", getReq)
  res.status(200).json(newResponses)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})