const questionSurvey = require("../controllers/questionSurvey.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
   
    // app.get("/api/questionSurvey/", 
    // controller.findAll);
  
    // app.post(
    //   "/api/questionSurvey/",
    //   controller.create
    // );
    // app.get("/api/questionSurvey/:title", controller.findByTitle);
    // app.put("/api/questionSurvey/:id", controller.update); 
    //   app.patch("/api/questionSurvey/:id", controller.update);
  
    //   app.delete("/api/questionSurvey/all", controller.deleteAll);
    //   app.delete("/api/questionSurvey/:id", controller.delete);
    var router = require("express").Router();

    // Create a new Survey
    router.post("/", surveys.create);


    // Retrieve all Surveys
    router.get("/", surveys.findAll);

    // Retrieve a single Survey with id
    router.get("/:id", surveys.findOne);

    // Update a Survey with id
    router.put("/:id", surveys.update);

    // Delete a Surveys with id
    router.delete("/:id", surveys.delete);

    // Delete all Surveys
    router.delete("/", surveys.deleteAll);

    app.use('/api/surveys', router);
  
    
    
  };