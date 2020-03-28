import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Modal Video 
import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';


class AboutUs extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
	

    render() {
        return (
            <React.Fragment>
             <section className="section" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="about-content text-center">
                            <h2 className="mx-auto mb-4">Anitya</h2>
                            <p className="text-muted">Who we are Established in the year 1994 Anitya is a team characterized by high professional ethics & efficient services for its clients. We have scaled great height in terms of our in size & stature in a short period of time. we have developed our core.</p>
                            <div className="watch-video mt-5">
                                <Link to="#" onClick={this.openModal}  className="video-play-icon text-dark"><i className="mdi mdi-play play-icon mr-2 h4"></i> <span>Watch The Video!</span></Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                           
                            
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

export default AboutUs;



