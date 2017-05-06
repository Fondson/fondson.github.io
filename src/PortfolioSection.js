import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class PortfolioItem extends Component{
    render(){
        return(
            <ListGroupItem header={this.props.header} href={"#" + this.props.modalRef} bsStyle="info" className="portfolio-link" data-toggle="modal">
                {this.props.children}
            </ListGroupItem>
        );
    }
};

class PortfolioSection extends Component{
    render(){
        const items = this.props.data.map((item)=>{
                        return <PortfolioItem header={item.header} key={item.header} modalRef={item.modalRef}>{item.description} </PortfolioItem>
                    });
        return (
            <header>
                <div className="col-sm-12">
                    <div className="intro-text">
                        <h3>{this.props.title}</h3>
                        <hr className="line-light"/>
                        <ListGroup>
                            {items}
                        </ListGroup>
                    </div>
                </div>
            </header>
        );
    }
};

export default PortfolioSection