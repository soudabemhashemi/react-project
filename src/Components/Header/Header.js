import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'
import '../util.css'
import Menu from '../Menu/Menu'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Header = ( {sidebarOpen, openSidebar}) => {
    return (
        <div className="wrap-menu-header gradient1 trans-0-4">
			<div className="h-full">
			    <div className="wrap_header trans-0-3">
                    <Logo/>
                    <Menu/>
                    <div className="nav_icon" onClick={()=> openSidebar()}>
                        <i className="btn-show-sidebar trans-0-4"/>
                    </div>
				</div>
			</div>
		</div>
    )
}

export default Header


