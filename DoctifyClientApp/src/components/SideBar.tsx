import styled from 'styled-components'
import { FcPlus } from 'react-icons/fc';
import { FcDocument } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
	
  return (
	<Container>
		<div>
			  <ul>
				<li>Welcome, Yemi</li>
				<Link style={linkStyle} to="/addDocs" >
					<AddButton>
						  <FcPlus style={style}/>
						<li>Add Documents</li>
					</AddButton>
				</Link>
				<Link style={linkStyle} to="/getDocs" >
					<AddButton>
						<FcDocument style={style}/>
						<li>Get Documents</li>
					</AddButton>
				</Link>
			</ul>
		</div>
	</Container>
  )
}

export default SideBar

const style = { fontSize: "20px" }

const linkStyle = { textDecoration: "none" }

const Container = styled.div`
	position: fixed;
	z-index: -1;
	width: 210px;
  	background-color:#ffffff;
	height: 100%;
 	border-right: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	

	& > div {
		width: 100%;
		padding-top: 100px;
		

		ul {
			list-style-type: none;
			padding: 10px;
			margin: 0;

			li:nth-child(1){
				text-align: center;
				padding-bottom: 10px;
				text-decoration: underline;
			}

		}
	}

	@media (max-width: 600px) {
		display: none;
	}
`

const AddButton = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
	transition-duration: 247ms;
	color: black;
	width: 190px;
	

	li {
		font-weight: 400;
		cursor: pointer;
		padding: 10px;	
	}

	&:hover,:active {
		color: #8181fb;
		background: rgba(0, 0, 0, 0.09);
		border-radius: 5px;
	}
`