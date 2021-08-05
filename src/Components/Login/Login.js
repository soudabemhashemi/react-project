import React, { Component } from 'react'
import IMG1 from '../../undraw_farm_girl_dnpe.svg'
import IMG2 from '../../undraw_profile_pic_ic5t.svg'
import './Login.css'

<script src='https://kit.fontawesome.com/a81368914c.js' crossorigin='anonymous'></script>

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: '',
            id: 0
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        alert(this.state.username + ' loginned')
        event.preventDefault()
    }
    
    render() {
        const {username, password, id} = this.state
        return (
            <div className="main">
                <img className="wave" src={IMG1}/>
                <div className="container">
                    <div className="img">
                        <img/>
                    </div>
                </div>
                <div className="login-container">
                    <form onSubmit={this.handleSubmit} id="login" action="/account/" method="POST">
                        <img className="avatar" src={IMG2}/>
                        <h2>خوش آمدید</h2>
                        <div className="input-div one focus">
                            <div className="i">
                                <i className="fa fa-user"></i>
                            </div>
                            <div>
                                <h5>نام کاربری</h5>
                                <input value={username} onChange={this.handleUsernameChange} className="input" type="text"/>
                            </div>
                        </div>

                        <div className="input-div two focus">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>گذرواژه</h5>
                                <input value={password} onChange={this.handlePasswordChange} className="input" type="password"/>
                            </div>
                        </div>

                        <a href="#">رمز عبور خود را فراموش کرده‌اید؟</a>
                        <input type="submit" className="btn" value="login"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
