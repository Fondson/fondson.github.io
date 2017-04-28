import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import OverviewHeader from './OverviewHeader';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioModal from './PortfolioModal';
import ContactFooter from './ContactFooter';
import NoteLockerMockup from './img/mockups/note_locker.png';
import FindMeMockup from './img/mockups/find_me.png';
import FruityDuckMockup from './img/mockups/fruity_duck.png';

const portfolio = [
    {
        title: "Android",
        data: [
            {
                header: "Note Locker",
                modalRef: "noteLockerModal",
                description: "Note-taking lockscreen replacement",
                longDescription: "Give your important reminders the attention they deserve. Note Locker is a replacement Android lockscreen that lets you quickly note down anything you want. Add items to your list and be reminded everytime you open your phone.",
                link: "http://github.com/fondson/note-locker",
                mockup: NoteLockerMockup
            },
            {
                header: "Find Me",
                modalRef: "findMeModal",
                description: "A game to test images against image recognition technology.",
                longDescription: "Made with the visual recognition technology of the Clarifai API, Find Me is an Android app that allows us to test how intelligent the API really is. The app displays six different images and the tags associated with ONE of the images. Tap on the images to guess which one was passed to the API and see how accurate the tags described the image.",
                link: "https://github.com/fondson/FindMe",
                mockup: FindMeMockup
            }
        ]
    },
    {
        title: "Web",
        data:[
            {
                header: "Fruity Duck",
                modalRef: "fruityDuckModal",
                description: "A 2D HTML5 endless fruit collecting game.",
                longDescription: "Fruity Duck is a 2D HTML5 game created with the rendering engine pixi.js. I built this project to learn about game developement on the web, especially sprite rendering and interactions and game control adaptation on mobile and desktop devices.",
                link: "https://github.com/Fondson/fruity-duck",
                mockup: FruityDuckMockup
            }
        ]
    }
];

class App extends Component {
  render() {
    let modalData = [];
    for (let i = 0; i < portfolio.length; ++i){
      for (let j = 0; j < portfolio[i].data.length; ++j){
        modalData.push(portfolio[i].data[j]);
      }
    }
    return (
      <div id="page-top">
        <Navigation/>
        <OverviewHeader/>
        <About/>
        <Portfolio data={portfolio}/>
        <ContactFooter/>
        <PortfolioModal data={modalData}/>
      </div>             
    );
  }
};

export default App;