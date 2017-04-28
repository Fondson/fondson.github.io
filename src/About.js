import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>About</h2>
                            <hr className="star-primary"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ">
                            <p>I am a second year student in the University of Waterloo pursuing a Bachelor of Computer Science. </p>
                        </div>
                        <div className="col-lg-4">
                            <p>My grade 10 Computer Science course using VB was my first exposure to programming and I loved it. This kickstarted my academic studies in CS. </p>
                        </div>
                        <div className="col-lg-4">
                            <p>Aside from programming, I enjoy gaming, biking and swimming in the summer and skating in the winter.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default About;