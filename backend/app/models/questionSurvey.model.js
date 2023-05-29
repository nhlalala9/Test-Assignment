module.exports = mongoose =>{
    const QuestionsSurvey = mongoose.model(
        "questions",
        mongoose.Schema(
       {
            title: String,
            questions: String
        }
        ,
        {
            timestamps: true,
            strict: false,
        }
      )
    );
    return QuestionsSurvey;
}