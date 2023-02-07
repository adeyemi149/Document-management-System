import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error: React.FC = () => {
	return (
		<Container>
			<h1>404</h1>
			<h3>Page doesn't exist</h3>
			<Link to="/">back to home</Link>
		</Container>
	)
}

export default Error

const Container = styled.div`
	margin: 100px;
`