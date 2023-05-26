module.exports = mongoose => {
    const Survey = mongoose.model(
      "survey",
      mongoose.Schema(
        {
          surname: String,
          firstnames: String,
          contactnumber:String
        },
        { timestamps: true }
      )
    );
  
    return Survey;
  };