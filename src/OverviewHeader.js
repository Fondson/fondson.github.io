import React, { Component } from 'react';
import './OverviewHeader.css';
import profilePic from './img/profilepic.jpg';
import newRepeatedTyped from './RepeatedTyped';
    
const skills = [
    "HTML/CSS/JavaScript",
    "Native Android",
    "Java",
    "C#",
    "Python",
    "SQL",
    "C/C++",
    "PHP"
];

const skillsTypedClassName = "typedSkills";

class OverviewHeader extends Component{
    render(){
        newRepeatedTyped(skillsTypedClassName, skills.map(skill => skill.concat('.')));
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive profile-pic" src={profilePic} alt={""}/>
                            <div className="intro-text">
                                <span className="name">Hi there.<br/>I'm Fondson Tran.</span>
                                <hr className="star-light"/>
                                <span className="skills">I like to code things using <span className={skillsTypedClassName}></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
}

export default OverviewHeader;