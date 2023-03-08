import mongoose from "mongoose";

const Connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.3bjm0hh.mongodb.net/?retryWrites=true&w=majority`;
    try {
    await mongoose.connect(URL);
    console.log("Connection server successfull--");
    }catch (error) {
        console.log("error while db connect"+error)
    }
    // mongoose.connect(URL).then((res,err)=>{
    //     if(err)console.log(err);
    //     else console.log("Connection Successfull--")
    // })
}

export default Connection;

// npm i mongoose
// npm install dotenv