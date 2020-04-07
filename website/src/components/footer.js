import React from 'react'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//styles
import '../css/footer.css'

const Footer = () => {
	return (
		<footer>
            <Col align="center">
                <p>Dewicus Development</p>
                <p>version 1.0.0</p>
            </Col>
        </footer>
    )
}

export default Footer