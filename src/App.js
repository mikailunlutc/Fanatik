import React, { Component } from 'react';
// Header
import TopMenu from './header/topMenu';
import BottomMenu from './header/bottomMenu';
// Body
import Agenda from './body/Agenda';
import Banner from './body/banner';
import SwipeableCards from './body/swipeableCards';
import AllNews from './body/allNews';
import Fixture from './body/fixture';
import Allvideo from './body/allvideo';
import NewsDeatilCard from './body/newsdetailcard';
import SelectedSections from './body/selectedSections';
import CompletedMatches from './body/completedmatches';
import FootballNews from './body/footballnews';
import NewsCards from './body/newsCards';
import Scorboard from './body/Scorboard';
import Statistics from './body/statistics';
import Widget from './body/widget';
import Writers from './body/writers';
import SubMenu from './footer/subMenu';
import DisciplinaryTable from './body/disciplinaryTable';
import AssistsTable from './body/assistsTable';
import AllnewsCard from './body/allnewsCard';
class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <TopMenu/>
          <BottomMenu/>
        </div>
        <div className='body'>
        <SwipeableCards/>
        <Banner/>
        <SelectedSections/>
        <Statistics/>
        <DisciplinaryTable/>
        <AssistsTable/>
        <Agenda/>
        <AllnewsCard/>
        <Widget/>
        <Scorboard/>
        <NewsDeatilCard/>
        <AllNews/>
        <Writers/>
        <Fixture/>
        <Allvideo/>
        <CompletedMatches/>
        <Agenda/>
        <FootballNews/>
        <NewsCards/>
        <NewsCards/>
        <NewsCards/>
        <NewsCards/>
        <Banner/>
        </div>
        <div className='footer'>
        <SubMenu/>
        </div>
      </div>
    )
  }
}
export default App;