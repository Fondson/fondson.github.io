import React, { Component } from 'react';
import profilePic from './img/profilepic.png';
import utility from './utility';

const skills = [
    "HTML/CSS/JavaScript",
    "Native Android",
    "Java",
    "C#",
    "SQL Server",
    ".NET",
    "C/C++",
    "Python"
];

class OverviewHeader extends Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src={profilePic} alt={""}/>
                            <div className="intro-text">
                                <span className="name">Fondson Tran</span>
                                <hr className="star-light"/>
                                <span className="skills">{utility.listWithDash(skills)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
}

export default OverviewHeader;