import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/topBar.jsx';
import MiddleBar from './components/middleBar.jsx';
import BottomBar from './components/bottomBar.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <div id= 'navBar'>
          <TopBar bar = 'topBarWidget'/>
          <MiddleBar bar = 'middleBarWidget'/>
        </div>
        <BottomBar bar = 'bottomBarWidget'/>
        <div id = 'mainPage'></div>
      </div>
    );
  }
}

window.Header = Header;
// console.log(TopBarWidget);

// <MiddleBar />