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

const CreateCompPage = () => {
	return (		
	<div>
		<Header/>
		
		<Container fluid>
			<Row>
				<Col xs={12} align="center">
					<p>What rule set would you like to use for your competiton?</p>
				</Col>
			</Row>

			<Row>
				<Col xs={6} align="right">
					<button id="sorrca">
						SORRCA Rules
					</button>
				</Col>

				<Col xs={6} align="left">
					<button id="lite">
						SORRCA LITE Rules
					</button>
				</Col>
			</Row>

			<br/>
			<br/>
			<br/>

			<Row>
				<Col xs={12} align="center">
					<a id="custom" href="/custom">
						I would like to use a custom rule set
					</a>
				</Col>
			</Row>
			</Container>


			<Footer/>
		</div>
	)
}

export default CreateCompPage
