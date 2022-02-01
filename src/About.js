import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About</h2>
              <hr className="line-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ">
              <p>I am a Computer Science graduate from the University of Waterloo.</p>
            </div>
            <div className="col-lg-4">
              <p>
                My passion lies in building connected products. For this reason, I love working on
                integrations and with APIs.
              </p>
            </div>
            <div className="col-lg-4">
              <p>Aside from programming, I enjoy hiking, gaming and watching anime!</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
