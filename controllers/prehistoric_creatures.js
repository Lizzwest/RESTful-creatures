var express = require('express');
var router = express.Router();
const fs = require('fs')
router.get('/', (req, res)=>{
    // get the json from dinosaurs.json
    let preCre = fs.readFileSync('./prehistoric_creatures.json')
    // convert the json to javascript
    let preCreData = JSON.parse(preCre)
    let nameFilter = req.query.nameFilter
    //keep in donData any dino whos name matches the nameFIlter the user searched for
    if(nameFilter){
        preCreData = preCreData.filter((preCre)=>{
            return preCre.name.toLowerCase()=== nameFilter.toLowerCase()
        })
    }
    res.render('prehistoric_creatures/index', {myPreCre: preCreData})
})

router.get("/prehistoric_creatures/new", (req, res)=>{
    res.render("prehistoric_creatures/new")
})

router.get("/prehistoric_creatures/:id", (req, res) =>{
    let preCre = fs.readFileSync('./prehistoric_creatures.json')
    let preCreData = JSON.parse(preCre)
    let preCreIndex = parseInt (req.params.id)
    res.render("dinosaurs/show", {myPreCre: preCreData[preCreIndex]})
})
router.post("/prehistoric_creatures", (req, res)=>{
    let preCre = fs.readFileSync('./prehistoric_creatures.json')
    let preCreData = JSON.parse(preCre)
    preCreData.push(req.body)
    fs.writeFileSync("./prehistoric_creatures.json", JSON.stringify(preCreData))
    res.redirect("/prehistoric_creatures")

})


module.exports = router