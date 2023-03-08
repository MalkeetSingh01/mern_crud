import User from "../schema/newSchema.js";

export const addUser=async(req,res)=>{
    const user=req.body;
    const newUser=new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}

export const getUsers=async (req,res)=>{
    try {
         const data=await User.find({});
        //  await User.deleteMany({});  
         res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const getUser=async (req,res)=>{
    try {
         const user=await User.findOne({_id:req.params.id});
        //  await User.deleteMany({});  
         res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const editUser=async(req,res)=>{
    let user=req.body;
    const editUser=User(user)
    try {
        await User.updateOne({_id:req.params.id},editUser)
        res.status(201).json(editUser)
    } catch (error) {
        res.status(409).json(error.message)
    }
}

export const deleteUser=async(req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id})
        res.status(201).json({message:"user deleted sucessfully"})
    } catch (error) {
        res.status(409).json(error.message)
    }
}
