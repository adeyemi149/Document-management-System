import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { Field, FormikProps } from 'formik';
import LoginFormModel from "../models/login"
import { ToastContainer } from 'react-toastify';
import { CircularProgress } from '@mui/material';

const Login: (props: FormikProps<LoginFormModel>) => JSX.Element =
	({ handleSubmit, errors, isSubmitting, touched }) => {
		const userToken = useAppSelector(state => state.auth.token)

		return (
			<>
				{userToken && <Navigate to="/" />}
				<Form>
					<h3>Login</h3>
					<form onSubmit={handleSubmit}>
						<div className=''>
							<Field name="email" id='email' type="email"
								placeholder='user@email.com' className={'form-control my-2' + (errors.email && touched.email ? "border border-danger" : "")} />
							{errors.email && touched.email && <span className='text-error'>{errors.email}</span>}
						</div>
						<div className=''>
							<Field name="password" id='password' type="password"
								placeholder='Enter password' className={'form-control my-2' + (errors.password && touched.password ? "border border-danger" : "")} />
							{errors.password && touched.password && <span className='text-error'>{errors.password}</span>}
						</div>
						<button disabled={isSubmitting} type='submit' className="btn btn-primary rounded-pill my-3">
							{isSubmitting ? <CircularProgress size={20} color='info' /> : "Login"}</button>
					</form>
				</Form>
				<ToastContainer />
			</>
		)
	}

export default Login

const Form = styled.div`
	display: flex;
	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	min-height: 100vh;
  	box-sizing: border-box;
	h3 {
		color: #5858e7;
	}

  & > form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		width: 300px;

		.text-error {
			color: red;
		}

		button:disabled {
			opacity: 0.35;
		}

		input {
			margin-left: 0;
			width: 300px;
		}
	}

	button:disabled {
		opacity: 0.1;
	}
`