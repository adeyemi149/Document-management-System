import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { CssBaseline } from '@material-ui/core';

const UserNavbar: React.FC = () => {
	return (
		<>  
		<CssBaseline />
		<Nav>
			<NavRight>
					<Stack spacing={2} direction="row">
					<Link style={linkstyle} to="/user/register"><Button variant="contained">REGISTER</Button></Link>      				
					<Link style={linkstyle} to="/user/login"><Button variant="outlined">LOGIN</Button></Link>      				
    			</Stack>
			</NavRight>
		</Nav>
		<Outlet />
	  </>
  )
}

export default UserNavbar;

const linkstyle = { textDecoration: "none"}

const Nav = styled.div`
	position: fixed;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  background-color: #ffffff;
  width: 100vw;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`

const NavRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30px;
	
`