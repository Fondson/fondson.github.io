import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class PortfolioModal extends Component{
    render(){
        const modals = this.props.data.map((modal)=>{
            return (
                <div className="portfolio-modal modal fade" id={modal.modalRef} key={modal.modalRef} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>{modal.header}</h2>
                                        <hr className="star-primary"/>
                                        {/*<img src="img/portfolio/smartphone.png" className="img-responsive img-centered" alt=""/>*/}
                                        <p>{modal.longDescription}</p>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <a href={modal.link} className="btn btn-default" style={padding}>
                                                    View on GitHub
                                                </a>
                                                <button type="button" className="btn btn-default" data-dismiss="modal" style={padding}><i className="fa fa-times"></i> Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div> {modals} </div>
        );
    }
};

let padding = {
    margin: "2px"
}

export default PortfolioModal;