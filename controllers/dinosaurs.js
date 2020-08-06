var express = require('express');
var router = express.Router();
const fs = require('fs')
// index route
router.get('/dinosaurs', (req, res)=>{
    // get the json from dinosaurs.json
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    // convert the json to javascript
    let dinoData = JSON.parse(dinosaurs)
    let nameFilter = req.query.nameFilter
    //keep in donData any dino whos name matches the nameFIlter the user searched for
    if(nameFilter){
        dinoData = dinoData.filter((dino)=>{
            return dino.name.toLowerCase()=== nameFilter.toLowerCase()
        })
    }
    // render our dino index page and pass it the
    // dinoData as "myDinos"
    res.render('dinosaurs/index', {myDinos: dinoData})
})





//get the new dino form
router.get("/dinosaurs/new", (req, res)=>{
    res.render("dinosaurs/new")
})




//show route (uses URL parameter ID)
router.get("/dinosaurs/:id", (req, res) =>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    let dinoIndex = parseInt (req.params.id)
    res.render("dinosaurs/show", {myDinos: dinoData[dinoIndex]})
})



//post a dino!
router.post("/dinosaurs", (req, res)=>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    dinoData.push(req.body)
    fs.writeFileSync("./dinosaurs.json", JSON.stringify(dinoData))
    res.redirect("/dinosaurs")

    console.log(req.body)
})

