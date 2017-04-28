import React, { Component } from 'react';
import Navigation from './Navigation';
import OverviewHeader from './OverviewHeader';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioModal from './PortfolioModal';
import ContactFooter from './ContactFooter';

// import mockups
import NoteLockerMockup from './img/mockups/note_locker.png';
import FindMeMockup from './img/mockups/find_me.png';
import FruityDuckMockup from './img/mockups/fruity_duck.png';
import MadlibsMockup from './img/mockups/madlibs.png';
import FoodyMockup from './img/mockups/foody.png';
import ConnectFourMockup from './img/mockups/connect_four.png';
import CircleTheDotMockup from './img/mockups/circle_the_dot.png';

const portfolio = [
    {
        title: "Android",
        data: [
            {
                header: "Note Locker",
                modalRef: "noteLockerModal",
                description: "Note-taking lockscreen replacement",
                longDescription: "Give your important reminders the attention they deserve. \
                 Note Locker is a replacement Android lockscreen that lets you quickly note down anything you want. \
                 Add items to your list and be reminded everytime you open your phone.",
                link: "http://github.com/fondson/note-locker",
                mockup: NoteLockerMockup
            },
            {
                header: "Find Me",
                modalRef: "findMeModal",
                description: "Game to test images against image recognition technology",
                longDescription: "Made for ConUHacks 1 with the visual recognition technology of the Clarifai API,\
                 Find Me is an Android app that allows us to test how intelligent the API really is. \
                 The app displays six different images and the tags associated with ONE of the images. \
                 Tap on the images to guess which one was passed to the API and see how accurate the tags described the image.",
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
                description: "2D HTML5 endless fruit collecting game",
                longDescription: "Fruity Duck is a 2D HTML5 game created with the rendering engine pixi.js.\
                 I built this project to learn about game developement on the web, \
                 especially sprite rendering and interactions and game control adaptation on mobile and desktop devices.",
                link: "https://github.com/Fondson/fruity-duck",
                mockup: FruityDuckMockup
            },
            {
                header: "Madlibs",
                modalRef: "madlibsModal",
                description: "Madlibs generator",
                longDescription: "Created using the python Flask web framework, MadLibs is a web application that allows users to create libs using their own words.\
                 Provide the required number of nouns, verbs and adjectives and the words will be inserted into a random lib to create a unique one each time.",
                link: "https://github.com/fondson/MadLibs",
                mockup: MadlibsMockup
            },
            {
                header: "Foody",
                modalRef: "foodyModal",
                description: "Interactive cuisine and restaurant finder",
                longDescription: "Made for ConUHacks 2, Foody is a python Flask web app that finds nearby restaurants that serve cuisine based on images you've selected.\
                 I was responsible for configuring the Clarifai API to extract relevant tags for various food images and developing the front-end of Foody.",
                link: "https://github.com/dougouk/ConUHacks2",
                mockup: FoodyMockup
            }
        ]
    },
    {
        title: "Desktop",
        data:[
            {
                header: "Connect Four",
                modalRef: "connectFourModal",
                description: "Classic Connect Four with a mean AI",
                longDescription: "A C# implementation of Connect Four packaged with a challenging AI and various per-game customizations.\
                 I created this app to learn about AI algorithms, specifically the minimax algorithm which the AI is powered on.\
                 Through optimizations such as alpha-beta pruning and Connect Four based utilities, the AI is able to play out game scenarios and pick out its best move.",
                link: "https://github.com/Fondson/Connect-4",
                mockup: ConnectFourMockup
            },
            {
                header: "Circle The Dot",
                modalRef: "circleTheDotModal",
                description: "Java implementation of the popular mobile game",
                longDescription: "Circle The Dot is a game where the player tries to trap the computer by enclosing it with player dots.\
                 This implementation uses the breadth-first search algorithm to aid the computer in finding the shortest path to escape the board. \
                 I was able to learn about graph traversals and their implementation using different data structures through this project.",
                link: "https://github.com/Fondson/Circle-The-Dot",
                mockup: CircleTheDotMockup
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