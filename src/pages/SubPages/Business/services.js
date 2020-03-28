import React, { Component } from 'react';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    
                                    <h3>What We Do</h3>
                                    <p className="text-muted mt-3">We provide full Labour Contract Services in various industries. We are proud that focus on training and safety.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="busi-services-box p-4 bg-white mt-5">
                                    <div className="busi-services-icon">
                                        <i className="pe-7s-monitor text-custom h2"></i>
                                    </div>
                                    <div className="busi-services-desc">
                                        <h5 className="mb-4 f-18">Manpower Supply</h5>
                                        <p className="text-muted mb-0">Pooja Group is the part of Pooja Group of Companies started its venture in 1994. Our team is highly characterized by professionals. Pooja Group of Companies….</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="busi-services-box  p-4 bg-white mt-5">
                                    <div className="busi-services-icon">
                                        <i className="pe-7s-notebook text-custom h2"></i>
                                    </div>
                                    <div className="busi-services-desc">
                                        <h5 className="mb-4 f-18">Industrial Housekeeping</h5>
                                        <p className="text-muted mb-0">Pooja Manpower suppliers also serve in the field of Inudustrial Housekeeping and serving our different clients all over India with our services….</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                                <div className="busi-services-box p-4 bg-white mt-5">
                                    <div className="busi-services-icon">
                                        <i className="pe-7s-exapnd2 text-custom h2"></i>
                                    </div>
                                    <div className="busi-services-desc">
                                        <h5 className="mb-4 f-18">Skilled Unskilled Manpower</h5>
                                        <p className="text-muted mb-0">Skill is an evolution of a person’s proficiency, wages, and the specialization in a field. Skilled employees usually get higher salaries and rank….</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="busi-services-box p-4 bg-white mt-5">
                                    <div className="busi-services-icon">
                                        <i className="pe-7s-albums text-custom h2"></i>
                                    </div>
                                    <div className="busi-services-desc">
                                        <h5 className="mb-4 f-18">Contract Labour Supplier</h5>
                                        <p className="text-muted mb-0">Contract Labour It means someone who signs a deal with you for providing any type of specified labour work. It is very crucial for the starting….</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Services;


