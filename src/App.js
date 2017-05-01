import React, { Component } from 'react';
import Navigation from './Navigation';
import OverviewHeader from './OverviewHeader';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioModal from './PortfolioModal';
import ContactFooter from './ContactFooter';
import portfolioInfo from './portfolioInfo';

class App extends Component {
  render() {
    let modalData = [];
    for (let i = 0; i < portfolioInfo.length; ++i){
      for (let j = 0; j < portfolioInfo[i].data.length; ++j){
        modalData.push(portfolioInfo[i].data[j]);
      }
    }
    return (
      <div id="page-top">
        <Navigation/>
        <OverviewHeader/>
        <About/>
        <Portfolio data={portfolioInfo}/>
        <ContactFooter/>
        <PortfolioModal data={modalData}/>
      </div>             
    );
  }
};

export default App;