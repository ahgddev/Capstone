import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    user_id: {type: Number},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {type: String},
    following: {type: [Number], ref: "Post"},
    last_login: {type: Date, default: new Date()},
})

export default mongoose.model("User", userSchema)