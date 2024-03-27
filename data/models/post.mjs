import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  username: { type: String, required: true },
  post_id: { type: Number, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  img: { imgURL: {type: String}, imgALT: {type: String} },
  post_date: {type: Date, default: Date.now()},
  tags: {type: [String]}
});

// PostSchema.statics.findFollowersPosts = function (followers) {
//   return this.find({ campus });
// };


export default mongoose.model("Post", PostSchema);
