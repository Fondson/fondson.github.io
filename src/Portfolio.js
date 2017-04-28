import React, { Component } from 'react';
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
                    </div>
                </div>
            </section>
        )
    }
};

export default Portfolio;
