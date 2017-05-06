import React, { Component } from 'react';
import profilePic from './img/profilepic.png';

class OverviewHeader extends Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src={profilePic} alt={""}/>
                            <div className="intro-text">
                                <span className="name">Hi there.<br/>I'm Fondson Tran.</span>
                                <hr className="star-light"/>
                                <span className="skills">I like to code things using <span className="typedSkills"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
}

export default OverviewHeader;