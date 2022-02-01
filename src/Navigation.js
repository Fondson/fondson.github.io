import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <Navbar className="navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <Button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Button>
            <a className="navbar-brand" href="#page-top">
              Home
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li className="page-scroll">
                <a href="#about">About</a>
              </li>
              <li className="page-scroll">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Contact</a>
              </li>
              <li className="page-scroll">
                <a href="https://drive.google.com/viewer?url=https://raw.githubusercontent.com/Fondson/resume/master/ftran_resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    )
  }
}

export default Navigation
