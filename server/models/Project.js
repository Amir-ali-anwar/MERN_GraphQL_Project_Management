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
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  }
});
const project = mongoose.model("project", projectSchema);
export default project