import React from 'react'

//header and footer
import Header from '../components/header.js'
import Footer from '../components/footer.js'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MainPage = () => {
	return (
		<div>
			<Header/>
			
			<Container fluid>
			<Row>
				<Col xs={12} align="center">
					<p>What would you like to do?</p>
				</Col>
			</Row>

			<Row>
				<Col xs={6} align="right">
					<Button id="join" href="/join">
						Join a <br/>competition
					</Button>
				</Col>

				<Col xs={6} align="left">
					<Button id="create" href="/createcomp">
						Create a new <br/>competition
					</Button>
				</Col>
			</Row>
			</Container>


			<Footer/>
		</div>
	)
}

export default MainPage
