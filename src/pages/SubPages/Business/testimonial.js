import React, { Component } from 'react';

class Testimonial extends Component {


    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

 
    render() {
        return (
            <React.Fragment>
                 <section className="section bg-light" id="testimonial">
                    <div className="container">
                        <div className="title text-center mb-5">
                                        
                                        <h3>Contact Us</h3>
                                        
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29464.764236002793!2d75.66805280888254!3d22.612907595700186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962564220635431%3A0x1ed4b3c611de0d32!2sPithampur%20Industrial%20Area%2C%20Pithampur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2s!4v1584123293402!5m2!1sen!2s" width="600" height="450" frameBorder="0" style={{'border':'none'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <div className="col-md-5"> 
                                <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mb-4">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Your Name..." />
                                            </div>
                                            <div className="form-group mb-4">
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your Email... " />
                                            </div>
                                            <div className="form-group mb-4">
                                                <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Subject..." />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-12 text-right">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>    
                    </div>
            
                </section>
            </React.Fragment >
        );
    }
}

export default Testimonial;


