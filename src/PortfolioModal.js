import React, { Component } from 'react';
import utility from './utility';

const style = {
    padding:{ margin: "2px" },
}

class PortfolioModal extends Component{
    render(){
        const modals = this.props.data.map((modal)=>{
            const visitSite = modal.link ? 
            (
                <a href={modal.link} className="btn btn-default" style={style.padding}>
                    Visit site!
                </a>  
            ) : (<div/>);
            return (
                <div className="portfolio-modal modal fade" id={modal.modalRef} key={modal.modalRef} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        {/*<div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>*/}
                        <div className="container">
                            <div className="col-lg-8 col-lg-offset-2">
                                <project-header>
                                    <div className="intro-text">
                                        <span className="name">{modal.header}</span>
                                        <hr className="star-primary"/>
                                        <span className="tech">{utility.listWithDash(modal.tech)}</span>
                                    </div>
                                </project-header> 
                                <img src={modal.mockup} className="img-responsive img-centered" alt=""/>
                                <p dangerouslySetInnerHTML={modal.longDescription}></p>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        {visitSite}
                                        <a href={modal.github} className="btn btn-default" style={style.padding}>
                                            View on GitHub
                                        </a>
                                        <button type="button" className="btn btn-default" data-dismiss="modal" style={style.padding}><i className="fa fa-times"></i> Close</button>
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

export default PortfolioModal;