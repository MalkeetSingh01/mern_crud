import {AppBar,Toolbar,styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header=styled(AppBar)
`background:#737393;`

// const Tabs=styled('p')`
const Tabs=styled(NavLink)`
font-size:2rem;
font-weigth:900;
color:inherit;
text-decoration:none;
margin:20px 0px 20px 40px  `



const Navbar=()=>{
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>MERN App</Tabs>
                {/* <NavLink>MERN App</NavLink> */}
                <Tabs  to='/all'>All User</Tabs>
                <Tabs  to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar; 
// npm install @mui/material @emotion/react @emotion/styled