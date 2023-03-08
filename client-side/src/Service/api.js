import axios from "axios";

const URL="http://localhost:8000";

export const addUser=async (data)=>{
    try {
        return await axios.post(`${URL}/add`,data)
    } catch (err) {
     console.log("Error on ADD USERS API---"+err)   
    }
}

export const getUsers=async ()=>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log("Error on ALL USERS API---",error)
    }
}

export const getUser=async (id)=>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error on edit USER API---",error)
    }
}

export const editUser=async (user,id)=>{
    try {
        return await axios.put(`${URL}/${id}`,user)
    } catch (error) {
        console.log("Error while edit user APi",error)
    }
}

export const deleteUser=async(id)=>{
try {
    return await axios.delete(`${URL}/${id}`)
} catch (error) {
    console.log("Error While delete user Api",error)
}
}