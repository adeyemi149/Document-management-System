import axios from 'axios';
import React, {SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components'
import { FormikProps, Field } from 'formik';
import RegisterFormModel from '../models/register';
import { useAppSelector } from '../store/hook';
import { ToastContainer } from 'react-toastify';
import { CircularProgress } from '@mui/material';

const Register: (props: FormikProps<RegisterFormModel>) => JSX.Element =
	({ handleSubmit, errors, touched, isSubmitting}) => {
		const navigateUser = useAppSelector(state => state.auth.navigateUser)
		return (
			<>
		<Form>
		   {navigateUser && <Navigate to="/user/login" />}
		<h3>Register</h3>
		  <form onSubmit={handleSubmit}>
		  <div className=''>
			<Field name="firstName" id='FirstName' type="text"
			placeholder='Enter Firstname' className={'form-control my-2' + (errors.firstName && touched.firstName ? "border border-danger" : "")} />
			{errors.firstName && touched.firstName && <span className='text-error'>{errors.firstName}</span>}			
		  </div>
		  <div className=''>
			<Field name="lastName" id='LastName' type="text" placeholder='Enter lastname'
			className={'form-control my-2' + (errors.lastName && touched.lastName ? "border border-danger" : "")} />
			{errors.lastName && touched.lastName && <span className='text-error'>{errors.lastName}</span>}						
		  </div>
		  <div className=''>
			<Field name="email" id='email' type="email" placeholder='user@email.com' 
			className={'form-control my-2' + (errors.email && touched.email ? "border border-danger" : "")} />
			{errors.email && touched.email && <span className='text-error'>{errors.email}</span>}			
		  </div>
		  <div className=''>
			<Field name="phoneNumber" id='Phonenumber' type="text" placeholder='Enter PhoneNumber'
			className={'form-control my-2' + (errors.phoneNumber && touched.phoneNumber ? "border border-danger" : "")} />
			{errors.phoneNumber && touched.phoneNumber && <span className='text-error'>{errors.phoneNumber}</span>}			
			</div>
		  <div className=''>
			<Field name="password" id='Password' placeholder='Enter Password' type="password"
			className={'form-control my-2' + (errors.password && touched.password ? "border border-danger" : "")} />
			{errors.password && touched.password && <span className='text-error'>{errors.password}</span>}			
		  </div>
		<div className=''>
			<Field name="confirmPassword" id='confirmPassword' placeholder='Confirm Password' type="password"
			className={'form-control my-2' + (errors.confirmPassword && touched.confirmPassword ? "border border-danger" : "")} />
			{errors.password && touched.password && <span className='text-error'>{errors.confirmPassword}</span>}			
		  </div>
				<button type='submit' className="btn btn-primary rounded-pill my-3">
					{isSubmitting ? <CircularProgress size={20} color='info' /> : "Register" }</button>
			</form>
			</Form>
		   <ToastContainer />
			</>
  )
}

export default Register

const Form = styled.div`
	display: flex;
	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	min-height: 100vh;
	border-radius: 10px;
	padding: 2rem;
	box-sizing: border-box;

	h3 {
		text-align: center;
		color: #6c53c5;
	}

	& > form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		width: 300px;

		div {
			display: inline-block;
		}

		.text-error {
			color: red
		}
	}

	div {
		display: flex;
		label {
			flex-grow: 1;
		}

		input {
			width: 300px;
		}
	}
`