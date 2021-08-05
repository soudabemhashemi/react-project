import React, { Component } from 'react'
import './Menu.css'
import ItemMenu from '../ItemMenu/ItemMenu'

class Menu extends Component {
    render() {
        return (
            <div className="wrap_menu p-l-0-xl">
                <nav className="menu">
                    <ul className="main_menu">

                        <ItemMenu name="ورود   |   ثبت نام" href="/login" c="sabt divsbt"/>
                        <ItemMenu name="شروع تست" href="#" c="testbtn"/>
                        <ItemMenu name="حرفه و مهارت" href="#"/>
                        <ItemMenu name="دوره ها" href="#"/>
                        <ItemMenu name="مجله فنجو" href="#"/>
                        <ItemMenu name="خانه" href="/"/>

                    </ul>

                    
                </nav>
            </div>
        )
    }
}

export default Menu
