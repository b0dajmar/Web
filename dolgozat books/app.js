import express from "express"
import path from "path"
import bodyParser from "body-parser"

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))


app.use('/books',(req,res) =>{
    console.log("Book add section")
    res.send(books)
})
app.use('/books/id',(req,res) =>{
    console.log("Book details")
    res.send(searchedBook)
})

app.listen(PORT, () => console.log(`fut a szerver${PORT}`))