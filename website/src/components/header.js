import React from 'react'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//stylesheets
import '../css/header.css'

const Header = () => {
	return (
		<header>
                <h2 align="center">RC Rock Crawler Competition Tracker</h2>
        </header>
    )
}

export default Header