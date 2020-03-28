
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";

import '../../css/pe-icon-7.css';
import logo_light from '../../images/w.png';
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="bg-footer">
                    <div className="container">
                        <Row>
                            <Col lg="5">
                            <div className="text-white">
                                <p className="text-white mb-4 footer-list-title f-17">About</p>
                                <p>Anitya Private Limited is a services company that is focused on helping companies add needed labour  through strategic partnering. We provide suite of services through our experts who are qualified & focused in the delivery. Key factor to our growth has been our commitment to delivering process-driven customized services. All our contractor are trained before each project and we maintain safety environment and provide safety gear to all our contractors.</p>
                            </div>
                            </Col>
                            <Col lg="7">
                                <Row>
                                    <Col lg="3">
                                        <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Resources</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="#">Help & Support</Link></li>
                                                <li><Link to="#">Privacy Policy</Link></li>
                                                <li><Link to="#">Terms & Conditions</Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div>
                                            <p className="text-white mb-4 footer-list-title f-17">More Info</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="#">Pricing</Link></li>
                                                <li><Link to="#">For Marketing</Link></li>
                                                <li><Link to="#">For CEOs </Link></li>
                                                <li><Link to="#">For Agencies</Link></li>
                                                <li><Link to="#">Our Apps</Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div>
                                            <div className="text-white">
                                                {/* <h3 className="mb-4 footer-list-title f-17">Anitya</h3> */}
                                                <img src={logo_light} alt="" className="logo-light" height="40" />
                                                <p>Anitya India Private Limited<br />
                                                    Apollo Premier, Plot No. 1, Scheme PU-4, Vijay Nagar<br />
                                                    Indore, MP 452010</p>
                                                <p><strong>Phone No</strong>. – +91 731 477 7777</p>
                                                <p><strong>E-Mail</strong> @ – support@anitya.com</p>
                                                <ul className="footer-icons list-inline mb-4">
                                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-facebook"></i></Link></li>
                                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-twitter"></i></Link></li>
                                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-instagram"></i></Link></li>
                                                    <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-google"></i></Link></li>
                                                </ul>
                                                <p className="copyright mt-3">© {new Date().getFullYear()} Anitya Private Limited.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </footer>
                <ScrollUpButton  style={{ width: "30px",height: "30px",position: "fixed",bottom : "10px", right : "20px", padding : "5px",  textAlign : "center", zIndex : "10000", borderRadius : "3px", backgroundColor : "rgba(19, 206, 103, 0.7)" }} />

            </React.Fragment >
        );
    }
}

export default Footer;


