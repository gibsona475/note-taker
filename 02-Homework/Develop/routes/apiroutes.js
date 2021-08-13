//API FETCH REQUESTES 
const router = require('express').Router();
const fs = require("fs");
//GET ROUTE 


router.get('/notes', (req,res) =>{

    //Read the JSON file,grab all notes  and send back the JSON object to notes.html page
    fs.readFile('./db/db.json', "utf-8", (err,response) =>{
        if(err){
            console.log("Error at ", err);
        }else {
            // console.log(response)
            //convert the response to JSON 
            let noteInfo = JSON.parse(response) || []; 
            // console.log(noteInfo)

            //return the notes 
            res.json(noteInfo);
        }

    }) 
});
//POST 

router.post('/notes', (req,res) =>{

    //Read the JSON file, grab all existing notes 
    fs.readFile('./db/db.json', "utf-8", (err,response) =>{
        if(err){
            console.log("Error at ", err);
        }else {
            // console.log(response)
            //convert the response to JSON 
            let existingNotes = JSON.parse(response) || []; 
            console.log("OLD", existingNotes)
                //npm package uuid
            const newNote = {
                ...req.body, id: //package
             } ; 

            console.log("NEW", newNote);
            //combine the notes 

                //update the file 
    // fs.writeFile()
        
   
        }

    }) 
   

});

//DELETE 

router.delete('/notes/:id', (req,res) =>{
    //Read the JSON file, grab all existing notes 

    //Filter out the note u like to delete 
    //then call fs.writeFIle with the new values 

});

module.exports = router; 