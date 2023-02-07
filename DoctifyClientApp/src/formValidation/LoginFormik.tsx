import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { setToken } from '../features/authSlice'
import Login from '../models/login'
import LoginForm from "../Pages/Login"
import { loginSchema } from '../schema/loginSchema'
import { useAppDispatch, useAppSelector } from '../store/hook'

const LoginFormik = () => {
	const dispatch = useAppDispatch();
	return (
	  <>
	  <Formik<Login>
		initialValues={{
			email: "",
			password: "",
		  }}
		  validationSchema={loginSchema}

			onSubmit= {async (values) => {
			  const {email, password} = values
			  const data = {
				email: email,
				password: password
			}
			const baseURL = "https://localhost:7214/api/Account/"
				return axios.post(baseURL + "Login", data)
					.then((response) => {
						if (response.data.token) {
							localStorage.setItem("token", response.data.token)
							dispatch(setToken(response.data))
						}
					}).catch((error) => {
						console.log(error)
						toast.error( error.response.data.message, {
							position: toast.POSITION.BOTTOM_CENTER,
							autoClose: 4000
							})
						return;
					})
			}}
		component={LoginForm}
	  >
	</Formik>
	</>
  )
}

export default LoginFormik


