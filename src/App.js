import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useState} from "react"


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  return (
    <Router>
      <div className="App">
        <Header sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App
