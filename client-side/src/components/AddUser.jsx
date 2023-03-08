import { FormGroup,FormControl, InputLabel ,Box,Input,Button} from "@mui/material";

import { useNavigate} from "react-router-dom";

import { useState } from "react";

import styled from "@emotion/styled";

import { addUser } from "../Service/api";

const Container=styled(FormGroup)`
width:46%;
margin:auto;
`
// const 
const Label=styled(InputLabel)`
font-size:2.4rem;`

const Field=styled(FormControl)`
margin-top:4rem;
height:auto`

const InputSet=styled(Input)`
font-size:2rem;
height:4rem`

const P=styled('span')`
`

const Head=styled('h1')`
font-size:6rem;
margin-top:3rem;
font-weight:bold;
text-align:center
`

const Button1=styled(Button)`
width:40%;
margin:auto;
font-size:2.3rem;
background-color:#747494;
font-weight:bold`


const AddUser=()=>{
    
    const defaultObject={
        fname:"",
        username:"",
        email:"",
        phone:"",
    }
    
    const navigate=useNavigate();

    const[user,setuser]=useState(defaultObject);

   const onValueChange=(e)=>{
        // console.log(e.target.name+" "+e.target.value);
        setuser({...user,[e.target.name]:e.target.value});
    }

    const addUserDetails=async()=>{
        // console.log("---##---"+user);
        await addUser(user);       
         navigate('/all');
    };
    
    return(
        <Container>
            <Head>Add User</Head>
            <Field>
                <Label><P>Name</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="fname"/>
            </Field>
            <Field>
                <Label><P>UserName</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="username"/>
            </Field>
            <Field>
                <Label><P>Email</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="email"/>
            </Field>
            <Field>
                <Label><P>Phone</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="phone"/>
            </Field>
            <Field>
                <Button1 variant="contained" onClick={()=>{addUserDetails()}}><p>ADD USER</p></Button1>
            </Field>
        </Container>
    )
}

export default AddUser;