const express = require("express")

const mysql = require("mysql");
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


const db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'CRUDDataBase'
    
});


app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName
  const movieReview = req.body.movieReview
  const sqlInsert = "INSERT INTO movie_review (movieName,movieReview) VALUES (?,?)"
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(err)
  })
})



app.listen(3001, () => {
    console.log('running on 3001')
})


