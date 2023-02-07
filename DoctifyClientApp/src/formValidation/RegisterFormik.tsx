import axios from 'axios'
import { Formik } from 'formik'
import React, { ReactElement } from 'react'
import { toast } from 'react-toastify'
import { setNavigateUser } from '../features/authSlice'
import Register from '../models/register'
import RegisterForm from "../Pages/Register"
import { registrationSchema } from '../schema/registrationSchema'
import AccountService from '../services/accountService'
import { useAppDispatch, useAppSelector } from '../store/hook';

const RegisterFormik = (): ReactElement => {
	const dispatch = useAppDispatch()

	return (
		<Formik<Register>
			initialValues={{
				email: "",
				password: "",
				confirmPassword: "",
				firstName: "",
				lastName: "",
				phoneNumber: "",
			}}
			validationSchema={registrationSchema}
			onSubmit={async (values) => {
				const { firstName, lastName, email, password, phoneNumber } = values
				const data = {
					firstName: firstName,
					lastName: lastName,
					Email: email,
					password: password,
					phoneNumber: phoneNumber
				}

				const baseURL = "https://localhost:7214`/api/Account/"
				axios.post(baseURL + "Register", data)
					.then((response) => {
						if (response.data.message == "success") {
							dispatch(setNavigateUser(true))
						}
					}).catch(error => {
						toast.error(error.response.data.message, {
							position: toast.POSITION.BOTTOM_CENTER,
							autoClose: 4000
						})
						return;
					})
				AccountService.register(firstName, lastName, email, password, phoneNumber);
			}
			}
			component={RegisterForm}
		>
		</Formik>
	)
}

export default RegisterFormik
