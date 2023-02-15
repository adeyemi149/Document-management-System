import React, { SyntheticEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { useAppDispatch } from '../store/hook'
import { Form } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DocsService from '../services/docsService'
import { PostalModalProps } from '../models/types'
import useQuery from '../CustomHooks/useAddQuery'
import { getFileType } from '../models/types'
import usePost from '../CustomHooks/usePost'

const CreateDocsPostModal: React.FC<PostalModalProps> = ({ showModal, handleClick, setShowModal }) => {
	let [errorPost, sendPostRequest, data] = usePost();

	const [description, setDescription] = useState("")
	const [files, setFile] = useState<File[]>([])
	//const [pdfFile, setPdfFile] = useState<any>(null)
	const pdfFile = useRef<any>()

	const addFiles = (e: SyntheticEvent) => {
		e.preventDefault();
		if (files.length > 3) {
			toast.error("Only 3 images can be uploaded at a time", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 2000
			})
			return;
		}

		if (description === "") {
			toast.error("Enter description", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 2000
			})
			return;
		}

		if (files.length <= 0) {
			toast.error("Add Files", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 2000
			})
			return;
		}

		const allowedFile = ['application/docx', 'application/pdf', 'application/txt'];
		for (var i = 0; i < files.length; i++) {
			var selectedFile = files[i];
			if (selectedFile && allowedFile.includes(selectedFile.type)) {
				// const formData = new FormData();
				// formData.append('file', selectedFile)
				sendPostRequest("https://localhost:7214/api/Docs", "POST", description, selectedFile);

			} else {
				toast.error("Not a Valid File Format", {
					position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 2000
				})
				return;
			}
		}

		if (!errorPost) {
			setShowModal("close");
			toast.success("File Added", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			})
			setDescription("");
			setFile([]);
		}
	}


	return (
		<>
			{showModal === "open" &&
				<Container>
					<AddFiles>
						<form>
							<Header>
								<p>Add Documents</p>
								<button onClick={handleClick}>
									<AiOutlineClose style={style} />
								</button>
							</Header>
							<InputValue>
								<input onChange={e => setDescription(e.target.value)} autoFocus={true} type="text" placeholder='Enter File Description' />
								<input onChange={(e: any) => setFile(e.target.files)} type="file" multiple />
							</InputValue>
							<SendFile>
								<button onClick={addFiles}>Send</button>
							</SendFile>
						</form>
					</AddFiles>
				</Container>
			}
			<ToastContainer />
		</>
	)
}

export default CreateDocsPostModal

const style = { fontSize: "20px", color: "black" }

const GlobalStyle = styled.div`
	max-width: 250px;
`

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0 , 0, 0, 0.19);
`

const AddFiles = styled.div`
	width: 100%;
	max-height: 90%;
	max-width: 300px;
	background-color: white;
	overflow: initial;
	border-radius: 5px;
	position: relative;
	top: 100px;
	display: flex;
	flex-direction: column;
	margin: 0 auto; 

	& {
		@media (min-width: 600px) {
			max-width: 600px
		}
	}
`

const Header = styled(GlobalStyle)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: black;
	padding: 0 10px 0 10px;
	padding: 16px 0;
	line-height: 1.5;
	margin: 0 auto;

	p {
		padding-top: 15px;
	}

	button {
		height: 40px;
		width: 40px;
		min-width: auto;
		color: rgba(0, 0, 0, .15);
		border: none;
		transition-duration: 247ms;
		border-radius: 5px;
	}

	button:hover {
		border: 2px solid black;
	}

	& {
		@media (min-width: 600px) {
			max-width: 480px
		}
	}
`

const InputValue = styled(GlobalStyle)`
	margin: 0 auto;

	input:first-of-type {
		padding: 10px;
		width: 250px;

		& {
		@media (min-width: 600px) {
			width: 480px
		}
	}
	}

	input {
		width: 250px;
		margin: 10px auto;
		padding: 10px 0;
		border-radius: 5px;
		outline: none;

		& {
		@media (min-width: 600px) {
			width: 480px
		}
	}
		
	}

	& {
		@media (min-width: 600px) {
			max-width: 480px
		}
	}
`

const SendFile = styled(GlobalStyle)`
	margin: 0 auto;
	display: flex;
	margin-bottom: 15px;
	justify-content: flex-end;

	button {
		border: none;
		padding: 10px;
		width: 80px;
		border-radius: 5px;
		background: #8181fb;
		color: white;
		transition-duration: 247ms;

		&:hover,:active {
		color: #8181fb;
		background: rgba(0, 0, 0, 0.09);
		}
	}

	& {
		@media (min-width: 600px) {
			max-width: 480px
		}
	}
`