module.exports = mongoose => {
    const Survey = mongoose.model(
      "survey",
      mongoose.Schema(
        {
          surname: String,
          firstnames: String,
          contactnumber:String,
          date: String,
          age:String
        },
        { timestamps: true }
      )
    );
  
    return Survey;
  };