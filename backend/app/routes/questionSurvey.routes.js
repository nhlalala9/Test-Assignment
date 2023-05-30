
module.exports = app => {
   
  const questionSurvey = require("../controllers/questionSurvey.controller");
   
    var router = require("express").Router();

    // Create a new Survey
    router.post("/", questionSurvey.create);


    // Retrieve all Surveys
    router.get("/", questionSurvey.findAll);

    // Retrieve a single Survey with id
    router.get("/:id", questionSurvey.findOne);

    // Update a Survey with id
    router.put("/:id", questionSurvey.update);

    // Delete a Surveys with id
    router.delete("/:id", questionSurvey.delete);

    // Delete all Surveys
    router.delete("/", questionSurvey.deleteAll);

    app.use('/api/questionSurvey', router);
  
    
    
  };