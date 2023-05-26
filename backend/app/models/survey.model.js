module.exports = mongoose => {
    const Survey = mongoose.model(
      "survey",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Survey;
  };