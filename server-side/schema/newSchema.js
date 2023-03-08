import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

const userSchema=mongoose.Schema({
    fname:String,
    username:String,
    email:String,
    phone:String,
})

// for key indexing
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');
// model creates a document in user collection
const User=mongoose.model("user",userSchema);
  
export default User;