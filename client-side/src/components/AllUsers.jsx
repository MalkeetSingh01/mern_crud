
import {Button, Table,TableBody,TableCell, TableHead, TableRow } from "@mui/material";
import styled from "@emotion/styled";

import { getUsers,deleteUser} from "../Service/api";
import { useEffect } from "react";
import { useState } from "react";
import { minWidth } from "@mui/system";
import { Link } from "react-router-dom";

const Body=styled(Table)`
width:80%;
margin:5% auto;
border-collapse: separate;
border-spacing: 2px 5px;
`

const Cell=styled(TableCell)`
& > button{
    font-size:1.1rem;
    // margin-right:20px;
}
font-size:1.4rem;
margin:1    rem`

// const Url=styled(Link)`
// font-size:2rem;
// `
const Thead=styled(TableHead)`
& >tr >th{font-weight:bold}
width:100%;
height:2rem;
`

const Tbody=styled(TableBody)`
& >tr {
    background-color:#e0e0e0;
    padding:1px;
}
& >tr >td{
    padding:10px;
}`

export default function AllUsers(){
    
    const [users,setUsers]=useState([])
    
    useEffect(()=>{
        getAllUsers();
    },[])


const getAllUsers=async ()=>{
    let res=await getUsers();
    setUsers(res.data)
    // console.log(res.data);
}

const deleteUserOne=async(id)=>{
    await deleteUser(id);
    getAllUsers();
}
    return(
        <Body>
            <Thead>
                <TableRow>
                    <Cell>Id</Cell>
                    <Cell>Name</Cell>
                    <Cell>UserName</Cell>
                    <Cell>Email</Cell>
                    <Cell>Phone</Cell>
                </TableRow>
            </Thead>
            <Tbody>
            {
                users.map(user=>{
                    return (<TableRow key={user._id}>
                        <Cell>{user._id}</Cell>
                        <Cell>{user.fname}</Cell>
                        <Cell>{user.username}</Cell>
                        <Cell>{user.email}</Cell>
                        <Cell>{user.phone}</Cell>
                        <Cell style={{width:"15%"}}>
                            <Button variant="contained" style={{marginRight:"40px",fontSize:"1.2rem"}}
                            component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button 
                      variant="contained"
                        color="secondary"
                        onClick={()=>deleteUserOne(user._id)}>Delete</Button>
                        </Cell>
                    </TableRow>
                    )
                    })
            }
            </Tbody>
        </Body>
    )
}