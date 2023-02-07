import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DocumentTable from '../components/DocumentTable'
import SearchField from '../components/SearchField'

const GetDocument: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("")

	return (
		<Container>
			<SearchField setSearchTerm={setSearchTerm} />
			<TableContainer>
				<DocumentTable searchTerm={searchTerm} />
			</TableContainer>
		</Container>
	)
}

export default GetDocument

const Container = styled.div`
	/* position: fixed; */
	left: 10px;
	top: 100px;
	z-index: -1;
	
	& {
		@media (min-width: 600px) {
			position: fixed;
			left: 250px;
		}
	}
`

const TableContainer = styled.div`
	overflow: auto;
	height: 300px;
	width: 300px;

	& {
		@media (min-width: 600px) {
			overflow-x: hidden;
			overflow-y: auto;
			width: 600px;
			height: 500px;
		}

		@media (min-width: 800px) {
			overflow-x: hidden;
			overflow-y: auto;
			width: 800px;
			height: 500px;
		}
	}
`