import { FormGroup,FormControl, InputLabel ,Box,Input,Button} from "@mui/material";

import { useNavigate} from "react-router-dom";

import { useState ,useEffect} from "react";

import styled from "@emotion/styled";

import { editUser ,getUser} from "../Service/api";

import { useParams } from "react-router-dom";

const Container=styled(FormGroup)`
width:46%;
margin:auto;
`
// const 
const Label=styled(InputLabel)`
font-size:1.4rem;`

const Field=styled(FormControl)`
margin-top:1rem;
height:auto`

const InputSet=styled(Input)`
font-size:1.3rem;
height:3.3rem`

const P=styled('span')`
`

const Head=styled('h1')`
font-size:3rem;
margin-top:2rem;
font-weight:bold;
text-align:center
`

const Button1=styled(Button)`
width:40%;
margin:auto;
font-size:1.3rem;
background-color:#747494;
font-weight:bold`


const EditUser=()=>{
    
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

    const editUserDetails=async()=>{
        // console.log("---##---"+user);
        await editUser(user,id);       
         navigate('/all');
    };
    
    const {id}=useParams();

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails=async()=>{
        const response=await getUser(id);
        setuser(response.data)
        // console.log(response)
    }

    return(
        <Container>
            <Head>Edit User</Head>
            <Field>
                <Label><P>Name</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="fname" value={user.fname}/>
            </Field>
            <Field>
                <Label><P>UserName</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="username" value={user.username}/>
            </Field>
            <Field>
                <Label><P>Email</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="email" value={user.email}/>
            </Field>
            <Field>
                <Label><P>Phone</P></Label><InputSet onChange={(e)=>{onValueChange(e)}} name="phone" value={user.phone}/>
            </Field>
            <Field>
                <Button1 variant="contained" onClick={()=>{editUserDetails()}}><p>EDIT USER</p></Button1>
            </Field>
        </Container>
    )
}

export default EditUser;