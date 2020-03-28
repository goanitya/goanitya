import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layouts
import HeaderBusiness from './Layouts/header';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Business/about-us';
import Services from './SubPages/Business/services';
import Portfolio from './SubPages/Business/portfolio';
import Testimonial from './SubPages/Business/testimonial';
import Team from './SubPages/Business/team';
import Counter from './SubPages/Business/counter';
import Pricing from './SubPages/Business/pricing';
import Client from './SubPages/Business/client';
import Contact from './SubPages/Business/contact';
import '../css/pe-icon-7.css';
import '../css/animate.css';
import '../css/animations-delay.css';
import '../css/magnific-popup.css';

//react bootstarp
import { Carousel } from 'react-bootstrap';

// Images
import BhB1 from '../images/s1.jpg';
import BhB2 from '../images/s2.jpg';
import BhB3 from '../images/s3.jpg';
import BhB4 from '../images/s4.jpg';

class homeBusiness extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('nav-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <HeaderBusiness />

                {/* Home Section */}
                <section className="home-slider" id="home">
                    <div className="container-fluid">
                        <div className="row">
                            <Carousel indicators={false}>
                            <Carousel.Item style={{ backgroundImage: `url(${BhB2})` }}>
                                    <div className="bg-overlay"></div>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-12">
                                                        <div className="busi-home-title text-white text-center">
                                                            <h1 className="animated fadeInDownBig animation-delay-1 mb-4 display-4">Contract Labour Supplier</h1>
                                                            <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">Providing contract labor in Indian states like Punjab, Rajasthan, Gujrat, Haryana, Tamilnadu, Karnataka, Delhi, UP & Uttrakhand.</p>
                                                            <div className="pt-4">
                                                                {/* <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Labour Contract</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                
                                <Carousel.Item style={{ backgroundImage: `url(${BhB1})` }}>
                                    <div className="bg-overlay"></div>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-12">
                                                        <div className="busi-home-title text-white text-center">
                                                            <h1 className="animated fadeInDownBig animation-delay-1 mb-4 display-4">Industrial Housekeeping Company</h1>
                                                            <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">Housekeeping services for: Automobile Industry, Food Industry, Plastic Industry, Educational Institutions, Energy Sector, Bottling Plants.</p>
                                                            <div className="pt-4">
                                                                {/* <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Industrial Housekeeping</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ backgroundImage: `url(${BhB4})` }}>
                                    <div className="bg-overlay"></div>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-12">
                                                        <div className="busi-home-title text-white text-center">
                                                            <h1 className="animated fadeInDownBig animation-delay-1 mb-4 display-4">Skilled, Semi Skilled & Unskilled Labour</h1>
                                                            <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">One of the biggest source of Skilled, Semi-skilled and Unskilled manpower.</p>
                                                            <div className="pt-4">
                                                                {/* <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Skilled & Unskilled Labour</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ backgroundImage: `url(${BhB3})` }}>
                                    <div className="bg-overlay"></div>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-12">
                                                        <div className="busi-home-title text-white text-center">
                                                            <h1 className="animated fadeInDownBig animation-delay-1 mb-4 big-heading display-4">Manpower Supplier</h1>
                                                            <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">Manpower solutions for Automobile Industry, Food Industry, Plastic Industry, Educational Institutions, Energy Sector, Bottling Plants</p>
                                                            <div className="pt-4">
                                                                {/* <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Manpower Supply</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                               
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* AboutUs */}
                

                {/* Services */}
                <Services />

                {/* Portfolio */}
                <Portfolio />

                {/* Contact */}
                <Contact />

                {/* Contact */}
                <Testimonial />

                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeBusiness;


