import React, { Component } from 'react'
import '../util.css'
import logo from '../../working-girl.png';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <section className="section-slide">
                <div className="wrap-slick1">
                    <div className="slick1">
                        <div className="item-slick1 item1-slick1 mystyle">
                            <div className="col-lg-6 col-12">
                                <div data-appear="fadeInUp" className="animated" >
                                    <img src={logo} className="workinggirl"/>
                                </div>
                            </div>
                            <div className="intro"><p>در این صفحه سعی کردم ریسپانسیو بودن و هندل کردن صفحات مختلف را تمرین کنم. برای وارد شدن لطفا گزینه ورود|ثبت نام را کلیک کنید.</p></div>
                        </div>
                    </div>
                </div>
	        </section>
        )
    }
}

export default Home
