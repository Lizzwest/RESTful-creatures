const express = require('express')
const app = express()
// create an instance of layouts
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs') // will use to read json files

// tell express we're using ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts) // tell express to let us use a layout template
app.use(express.urlencoded({extended: false}))// body parser middleware
// app.use("/prehistoric_creatures", require("controllers/prehistoric_creatures"))
app.use("/prehistoric_creatures", require("./controllers/prehistoric_creatures"))

// home route
app.get('/', (req, res)=>{
    res.render('home')
})

// index route
// app.get('/dinosaurs', (req, res)=>{
//     // get the json from dinosaurs.json
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     // convert the json to javascript
//     let dinoData = JSON.parse(dinosaurs)
//     let nameFilter = req.query.nameFilter
//     //keep in donData any dino whos name matches the nameFIlter the user searched for
//     if(nameFilter){
//         dinoData = dinoData.filter((dino)=>{
//             return dino.name.toLowerCase()=== nameFilter.toLowerCase()
//         })
//     }
//     // render our dino index page and pass it the
//     // dinoData as "myDinos"
//     res.render('dinosaurs/index', {myDinos: dinoData})
// })



// app.get('/prehistoric_creatures', (req, res)=>{
//     // get the json from dinosaurs.json
//     let preCre = fs.readFileSync('./prehistoric_creatures.json')
//     // convert the json to javascript
//     let preCreData = JSON.parse(preCre)
//     let nameFilter = req.query.nameFilter
//     //keep in donData any dino whos name matches the nameFIlter the user searched for
//     if(nameFilter){
//         preCreData = preCreData.filter((preCre)=>{
//             return preCre.name.toLowerCase()=== nameFilter.toLowerCase()
//         })
//     }
//     res.render('prehistoric_creatures/index', {myPreCre: preCreData})
// })

//get the new dino form
// app.get("/dinosaurs/new", (req, res)=>{
//     res.render("dinosaurs/new")
// })

// app.get("/prehistoric_creatures/new", (req, res)=>{
//     res.render("prehistoric_creatures/new")
// })



//show route (uses URL parameter ID)
// app.get("/dinosaurs/:id", (req, res) =>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     let dinoIndex = parseInt (req.params.id)
//     res.render("dinosaurs/show", {myDinos: dinoData[dinoIndex]})
// })

// app.get("/prehistoric_creatures/:id", (req, res) =>{
//     let preCre = fs.readFileSync('./prehistoric_creatures.json')
//     let preCreData = JSON.parse(preCre)
//     let preCreIndex = parseInt (req.params.id)
//     res.render("dinosaurs/show", {myPreCre: preCreData[preCreIndex]})
// })


//post a dino!
// app.post("/dinosaurs", (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     dinoData.push(req.body)
//     fs.writeFileSync("./dinosaurs.json", JSON.stringify(dinoData))
//     res.redirect("/dinosaurs")

//     console.log(req.body)
// })

// app.post("/prehistoric_creatures", (req, res)=>{
//     let preCre = fs.readFileSync('./prehistoric_creatures.json')
//     let preCreData = JSON.parse(preCre)
//     preCreData.push(req.body)
//     fs.writeFileSync("./prehistoric_creatures.json", JSON.stringify(preCreData))
//     res.redirect("/prehistoric_creatures")

// })

// app.get("/prehistoric_creatures/edit/:id", (req,res)=>{

// })

app.listen(8000)