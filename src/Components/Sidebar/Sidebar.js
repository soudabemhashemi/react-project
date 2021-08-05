import React, { Component } from 'react'
import './Sidebar.css'
import '../util.css'
import ItemMenu from '../ItemMenu/ItemMenu'




const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return(
        <aside className={`sidebar trans-0-4 ${sidebarOpen? "show-sidebar": "hide"}`} id="sidebar">
            <button id="sidebarIcon" onClick={()=> closeSidebar()} className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>

             <ul className="p-t-95 p-b-70 sidebar_menu">
                 <ItemMenu name="خانه" href="/" c="txt19 textSize" cLi="t-center m-b-33"/>
                 <ItemMenu name="مجله فنجو" href="#" c="txt19 textSize" cLi="t-center m-b-33"/>
                 <ItemMenu name="دوره ها" href="#" c="txt19 textSize" cLi="t-center m-b-33"/>
                 <ItemMenu name="حرفه و مهارت" href="#" c="txt19 textSize" cLi="t-center m-b-33"/>
                 <ItemMenu name="شروع تست" href="#" c="vrd testbtn txt19 textSize" cLi="t-center m-b-33"/>
             </ul>
 	    </aside>
    )
}

export default Sidebar;

