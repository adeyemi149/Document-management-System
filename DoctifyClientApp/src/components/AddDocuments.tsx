import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'
import { AiFillFileAdd } from "react-icons/ai"
import "../index.css"
import CreateDocsPostModal from './CreateDocsPostModal'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Documents: React.FC = () => {
	const [showModal, setShowModal] = useState("close");

	const handleClick = () => {		
		if (showModal === "close") {
			setShowModal("open");
			return;
		}

		if (showModal === "open") {
			setShowModal("close")
			return;
		}
	}
  return (
	  <Container>
		  <div onClick={handleClick}>
			<AiFillFileAdd style={style} />
			<p>Click here to add Documents</p>
		  </div>
		  <CreateDocsPostModal showModal={showModal} setShowModal={setShowModal} handleClick={handleClick} />
		  <ToastContainer />
	  </Container>
  )
}

export default Documents

const style= { fontSize: "70px" }

const Container = styled.div`
	position: fixed;
	left: 50px;
	top: 120px;
	color: grey;
	font-family: 'Open Sans', sans-serif;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		cursor: pointer;
		transition-duration: 247ms;

		p {
			width: 120px;
		}

		&:hover, :active {
			color: #8181fb;
		}
	}

	& {
		@media (min-width: 600px) {
			position: fixed;
			left: 250px;
		}
	}
`