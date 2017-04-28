import React, { Component } from 'react';

class ContactFooter extends Component{
    render(){
        return(
            <div id="contact">
                <footer className="text-center">
                    <div className="footer-above">
                        <div className="container">
                            <div className="row">
                                <div className="footer-col col-md-12">
                                    <h3>Contact Me</h3>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="https://ca.linkedin.com/in/fondson-tran-4a070a109" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="http://github.com/fondson" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                                        </li>
                                        <li>
                                            <a href="mailto:fondsont@gmail.com" className="btn-social btn-outline" target="_self"><i className="fa fa-fw fa-envelope"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <footer className="text-center">
                    <div className="footer-below">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    &copy; Fondson Tran 2017
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default ContactFooter;