import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide the name"],
  },
  description: {
    type: String,
    require: [true, "Please provide the description"],
  },
  status:{
    enum:[]
  },
  clientid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  }
});
module.export = mongoose.model("project", projectSchema);