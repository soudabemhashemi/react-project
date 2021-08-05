import React from 'react'
import './ItemMenu.css'

function ItemMenu(props) {
    const {name, href, c, cLi} = props
    return (
        <li className={cLi}>
            <a href={href} className={c}>{name}</a>
        </li>
    )
}

export default ItemMenu
