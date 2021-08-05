import React, { Component } from 'react'
import logo from '../../logo.png';
import './Logo.css'
import '../util.css'

class Logo extends Component {
    render() {
        return (
            <div className="logo">
				<a href="#" className="m-l-12">
					<img src={logo} alt="LOGO"/>
				</a>
			</div>
        )
    }
}

export default Logo
