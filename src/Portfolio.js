import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import testImg from './img/portfolio/smartphone.png';
import PortfolioSection from './PortfolioSection';


class Portfolio extends Component{
    render(){
        const sections = this.props.data.map((section)=>{
                            return <PortfolioSection title={section.title} key={section.title} data={section.data}/>
                        });
        return(
            <section className="success" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Portfolio</h2>
                            <hr className="star-light"/>
                        </div>
                    </div>
                    <div className="row">
                        {sections}
                        {/*<div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/portfolio/questionmark.png" className="img-responsive" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                <div className="caption">
                                    <div className="caption-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/portfolio/document.png" className="img-responsive" alt=""/>
                            </a>
                        </div>*/}
                    </div>
                </div>
            </section>
        )
    }
};

export default Portfolio;
