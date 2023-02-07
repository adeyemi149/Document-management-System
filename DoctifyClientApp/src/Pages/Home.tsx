import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { setToken } from '../features/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hook'

const Home: React.FC = () => {
	const apiURL = "https://localhost:7214/api/Account/"
	const userToken = useAppSelector(state => state.auth.token);

	const authaxios = axios.create({
		baseURL: apiURL,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})

	const getUserAuth = () => {
		authaxios.get("userAuth")
			.then(response => console.log(response.data))
	}

	useEffect(() => {
		getUserAuth()
	}, [])

	return (
		<>
			{!userToken && <Navigate to="/user/login" />}
			<Container>
				<Navbar />
				<SideBar />
				<Outlet />
			</Container>
		</>
	)
}

export default Home

const Container = styled.div`
`