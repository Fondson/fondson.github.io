import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

class ContactFooter extends Component{
    constructor(props, context) {
        super(props, context);
        this.copyEmail = this.copyEmail.bind(this);
        this.resetEmailCopied = this.resetEmailCopied.bind(this);
    }

    state = {
        emailCopied: false
    }
    
    copyEmail(e) {
        e.preventDefault();
        const inp = document.createElement('input');
        document.body.appendChild(inp);
        inp.value = 'fondsont@gmail.com';
        inp.select();
        document.execCommand('copy');
        inp.remove();
        this.setState({ emailCopied: true });
    }

    resetEmailCopied(e) {
        e.preventDefault();
        this.setState({ emailCopied: false });
    }

    render(){
        const { emailCopied } = this.state;

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
                                            <a onMouseLeave={this.resetEmailCopied} onClick={this.copyEmail} className="btn-social btn-outline" key={emailCopied ? 'emailCopied' : 'emailNotCopied'} data-tip={emailCopied ? 'Copied email' : 'Copy email'}>
                                                <i className="fa fa-fw fa-envelope"></i>
                                                <ReactTooltip type="info" effect="solid"/>
                                            </a>
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
                                    &copy; Fondson Tran 2020
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