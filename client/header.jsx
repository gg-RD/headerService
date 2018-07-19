import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/topBar.jsx';
import MiddleBar from './components/middleBar.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <TopBar bar = 'topBarWidget'/>
        <MiddleBar bar = 'middleBarWidget'/>
      </div>
    );
  }
}

window.Header = Header;
// console.log(TopBarWidget);

// <MiddleBar />