import React, { Component } from 'react';
import profilePic from './img/profilepic.png';

const skills = [
    "Android",
    "Java",
    "C#",
    "SQL Server",
    ".NET",
    "C/C++",
    "Python",
    "HTML"
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
                                <span className="skills">{this.parseSkills(skills)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
    parseSkills(skills){
        let parsed = "";
        for (let i = 0; i < skills.length; ++i){
            if (i){
                parsed += " - ";
            }
            parsed += skills[i];
        }
        return parsed;
    }
}

export default OverviewHeader;