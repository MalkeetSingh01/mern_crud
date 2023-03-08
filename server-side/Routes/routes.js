import express from "express";

import { addUser,getUsers ,getUser,editUser,deleteUser} from "../Controller/user-controller.js";

const router=express.Router();

router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUser)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)
// router.post('/',()=>{
//     console.log("Abc")
// })
export default router;